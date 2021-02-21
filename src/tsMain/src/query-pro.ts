import { cloudself } from "./query-pro-fe";
import QueryField = cloudself.cn.query.QueryField;
import QueryStructure = cloudself.cn.query.QueryStructure;
import QueryStructureAction = cloudself.cn.query.QueryStructureAction;
import QueryStructureFrom = cloudself.cn.query.QueryStructureFrom;
import QueryKeywords = cloudself.cn.query.QueryKeywords;
import QueryOrderByKeywords = cloudself.cn.query.QueryOrderByKeywords;
import IIFieldGenerator = cloudself.cn.query.IFieldGenerator;
import { fixAll } from "./kotlin-ir-bugfixer";
import QueryProJs = cloudself.cn.QueryProJs;
import Field = cloudself.cn.query.Field;
import QueryFieldJs = cloudself.cn.QueryFieldJs;
import {debugLog} from "./debug-log";
import QueryFieldType = cloudself.cn.query.QueryFieldType;

type IWhereField<T> = {
    [key in keyof T]: QueryKeywords<IWhereField<T>>
} & QueryField<T, IWhereField<T>, IOrderByField<T>, IColumnLimiterField<T>, IColumnsLimiterField<T>, IFieldGenerator<T>>

type IOrderByField<T> = {
    [key in keyof T]: QueryOrderByKeywords<IOrderByField<T>>
} & QueryField<T, IWhereField<T>, IOrderByField<T>, IColumnLimiterField<T>, IColumnsLimiterField<T>, IFieldGenerator<T>>

type IFieldGenerator<T> = {
    [key in keyof T]: () => IFieldGenerator<T>
} & IIFieldGenerator;

type IColumnLimiterField<T> = {
    [key in keyof T]: () => T[key]
}

type IColumnsLimiterField<T> = {
    [key in keyof T]: () => IColumnsLimiterField<T>
} & QueryField<T, IWhereField<T>, IOrderByField<T>, IColumnLimiterField<T>, IColumnsLimiterField<T>, IFieldGenerator<T>>

const createQueryField = (type: string, tableName: string, qs: QueryStructure) => {
    const queryField = new QueryFieldJs(
        qs,
        type,
        fieldGenerator(tableName),
        createWhereField(tableName),
        createOrderByField(tableName),
        createColumnFilterField(tableName),
        createColumnsFilterField(tableName),
    );
    (queryField as any).run = () => {
        // console.log(queryField);
        debugLog((queryField as any)._queryStructure);
    }
    return queryField;
}

const createWhereField = (tableName: string) => <T>(qs: QueryStructure): IWhereField<T> => {
    return new Proxy(createQueryField(QueryFieldType.WHERE_FIELD, tableName, qs) as any, {
        get(target: any, p: string): any {
            if (target[p]) {
                return target[p];
            }
            return new QueryKeywords(new Field(tableName, p), qs, createWhereField(tableName));
        }
    });
}

const createOrderByField = (tableName: string) => <T>(qs: QueryStructure): IOrderByField<T> => {
    return new Proxy(createQueryField(QueryFieldType.ORDER_BY_FIELD, tableName, qs) as any, {
        get(target: any, p: string) {
            if (target[p]) {
                return target[p];
            }
            return () => new QueryOrderByKeywords(new Field(tableName, p), qs, createWhereField(tableName));
        }
    });
}

const fieldGenerator = (tableName: string) => <T>(): IFieldGenerator<T> => {
    const field: any = new Proxy({ fields: [] } as any, {
        get(target, p: string) {
            const fields: Field[] = target.fields;
            if (p === "_getFields") {
                return () => fields;
            }
            if (p === "_getTableName") {
                return () => tableName;
            }
            return () => {
                fields.push(new Field(tableName, p));
                return field;
            };
        },
    });
    return field;
}

const createColumnFilterField = (tableName: string) => <T>(qs: QueryStructure): IColumnLimiterField<T> => {
  return new Proxy(createQueryField(QueryFieldType.OTHER_FIELD, tableName, qs) as any, {
      get(target: QueryFieldJs<any, any, any, any, any, any>, p: PropertyKey, receiver: any): any {
          return (target as any).getColumn();
      }
  });
}

const createColumnsFilterField = (tableName: string) => <T>(qs: QueryStructure): IColumnsLimiterField<T> => {
  return new Proxy(createQueryField(QueryFieldType.OTHER_FIELD, tableName, qs) as any, {
      get(target: any, p: string): any {
          const newQs: any = {fields: [...qs.fields, new Field(tableName, p)], prototype: qs};
          return createColumnsFilterField(tableName)(newQs);
      }
  })
}

export class QueryPro<T> extends QueryProJs<QueryPro<T>, IWhereField<T>, IOrderByField<T>, IFieldGenerator<T>> {
    private readonly tableName: string;
    constructor(tableNameOrQs: string | QueryStructure) {
        let tableName: string;
        let queryStructure: QueryStructure | null;
        if (typeof tableNameOrQs === "string") {
            tableName = tableNameOrQs
            queryStructure = new QueryStructure(
                QueryStructureAction.SELECT,
                [],
                new QueryStructureFrom(tableName, []),
                [],
                [],
                null,
            );
        } else {
            tableName = tableNameOrQs.from.main;
            queryStructure = tableNameOrQs;
        }

        super(
            queryStructure,
            qs => new QueryPro(qs),
            createWhereField(tableName),
            createOrderByField(tableName),
            fieldGenerator(tableName)
        );
        this.tableName = tableName;
    }
}

fixAll()
