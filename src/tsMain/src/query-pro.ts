import { cloudself } from "./query-pro-fe";
import QueryProImpl = cloudself.cn.query.QueryProImpl;
import QueryField = cloudself.cn.query.QueryField;
import QueryStructure = cloudself.cn.query.QueryStructure;
import QueryStructureAction = cloudself.cn.query.QueryStructureAction;
import QueryStructureFrom = cloudself.cn.query.QueryStructureFrom;
import QueryKeywords = cloudself.cn.query.QueryKeywords;
import QueryOrderByKeywords = cloudself.cn.query.QueryOrderByKeywords;
import IIFieldGenerator = cloudself.cn.query.IFieldGenerator;
import { fixAll } from "./kotlin-ir-bugfixer";

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

export class QueryPro<T> extends QueryProImpl<QueryPro<T>, IWhereField<T>, IOrderByField<T>, IFieldGenerator<T>> {
    private readonly tableName: string;
    constructor(tableName: string) {
        const queryStructure = new QueryStructure(
            QueryStructureAction.SELECT,
            [],
            new QueryStructureFrom(tableName, []),
            [],
            [],
            null,
        );
        super(queryStructure);
        this.tableName = tableName;
    }
}

fixAll()
