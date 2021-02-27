import { cloudself } from "./query-pro-fe";
import QueryField = cloudself.cn.query.QueryField;
import QueryStructure = cloudself.cn.query.QueryStructure;
import QueryStructureAction = cloudself.cn.query.QueryStructureAction;
import QueryStructureFrom = cloudself.cn.query.QueryStructureFrom;
import QueryKeywords = cloudself.cn.query.QueryKeywords;
import QueryOrderByKeywords = cloudself.cn.query.QueryOrderByKeywords;
import IIFieldGenerator = cloudself.cn.query.IFieldGenerator;
import {access, fixAll, fixOverride} from "./kotlin-ir-bugfixer";
import QueryProJs = cloudself.cn.QueryProJs;
import Field = cloudself.cn.query.Field;
import QueryFieldJs = cloudself.cn.QueryFieldJs;
import QueryFieldType = cloudself.cn.query.QueryFieldType;
import FinalQueryField = cloudself.cn.query.FinalQueryField;

type IWhereField<T> = {
    [key in keyof T]: QueryKeywords<IWhereField<T>>
} & QueryField<T, IWhereField<T>, IOrderByField<T>, IColumnLimiterField<T>, IColumnsLimiterField<T>, IFieldGenerator<T>>

type IOrderByField<T> = {
    [key in keyof T]: () => QueryOrderByKeywords<IOrderByField<T>>
} & QueryField<T, IWhereField<T>, IOrderByField<T>, IColumnLimiterField<T>, IColumnsLimiterField<T>, IFieldGenerator<T>>

type IFieldGenerator<T> = {
    [key in keyof T]: () => IFieldGenerator<T>
} & IIFieldGenerator;

type IColumnLimiterField<T> = {
    [key in keyof T]: () => T[key][]
}

type IColumnsLimiterField<T> = {
    [key in keyof T]: () => IColumnsLimiterField<T>
} & QueryField<T, IWhereField<T>, IOrderByField<T>, IColumnLimiterField<T>, IColumnsLimiterField<T>, IFieldGenerator<T>>

export interface QueryAdapter {
    <T>(queryStructure: QueryStructure): Promise<T>;
}

let defQueryAdapter: QueryAdapter = () => {
    return Promise.reject("unimpl")
}

export function setQueryAdapter(queryAdapter: QueryAdapter) {
    defQueryAdapter = queryAdapter;
}

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
    const run = () => {
        const queryStructure: QueryStructure = (queryField as any)._queryStructure;
        // console.log((queryField as any)._queryStructure);
        return defQueryAdapter(queryStructure);
    };
    (queryField as any).run = run;
    fixOverride(FinalQueryField.prototype, "run", run);
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
            return () => new QueryOrderByKeywords(new Field(tableName, p), qs, createOrderByField(tableName));
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
      get(target: QueryFieldJs<any, any, any, any, any, any>, p: string): any {
          return () => (target as any).getColumn(new Field(tableName, p));
      }
  });
}

const createColumnsFilterField = (tableName: string) => <T>(qs: QueryStructure): IColumnsLimiterField<T> => {
  return new Proxy(createQueryField(QueryFieldType.OTHER_FIELD, tableName, qs) as any, {
      get(target: any, p: string): any {
          if (target[p]) {
              return target[p];
          }
          const fields = [...access(qs, "fields"), new Field(tableName, p)];
          const newQs = new QueryStructure(qs.action, fields, qs.from, qs.where, qs.orderBy, qs.limit);
          return () => createColumnsFilterField(tableName)(newQs);
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
