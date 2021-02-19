type Nullable<T> = T | null | undefined
export namespace cloudself.cn.query {
    class QueryFieldType {
        private constructor();
        readonly WHERE_FIELD: {
        } & cloudself.cn.query.QueryFieldType;
        readonly ORDER_BY_FIELD: {
        } & cloudself.cn.query.QueryFieldType;
    }
    interface IFieldGenerator {
        _getFields(): Array<cloudself.cn.query.Field>;
        _getTableName(): string;
    }
    abstract class FinalQueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR> {
        constructor(queryStructure: cloudself.cn.query.QueryStructure);
        limit(limit: number): cloudself.cn.query.FinalQueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>;
        columnsLimiter(): COLUMNS_LIMITER_FILED;
        columnLimiter(): COLUMN_LIMITER_FILED;
        runLimit1(): Nullable<T>;
        run(): Array<T>;
        pageable(): void;
    }
    abstract class QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR> extends cloudself.cn.query.FinalQueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR> {
        constructor(queryStructure: cloudself.cn.query.QueryStructure);
        customColumn(column: string): cloudself.cn.query.QueryKeywords<WHERE_FIELD>;
        and(): WHERE_FIELD;
        or(factor: Nullable<(p0: WHERE_FIELD) => WHERE_FIELD>): WHERE_FIELD;
        andForeignField(fields: Array<cloudself.cn.query.QueryField<any /*UnknownType **/, any /*UnknownType **/, any /*UnknownType **/, any /*UnknownType **/, any /*UnknownType **/, any /*UnknownType **/>>): WHERE_FIELD;
        orderBy(): ORDER_BY_FIELD;
    }
}
export namespace cloudself.cn.query {
    class QueryKeywords<F> {
        constructor(field: cloudself.cn.query.Field, queryStructure: cloudself.cn.query.QueryStructure, createQueryField: (p0: cloudself.cn.query.QueryStructure) => F);
        readonly is: cloudself.cn.query.QueryKeywords<F>;
        readonly not: cloudself.cn.query.QueryWithNotKeywords<F>;
        readonly ignoreCase: cloudself.cn.query.QueryIgnoreCaseKeywords<F>;
        equalsTo(value: any): F;
        between(start: any, end: any): F;
        lessThan(value: any): F;
        lessThanOrEqual(value: any): F;
        graterThan(value: any): F;
        graterThanOrEqual(value: any): F;
        like(str: string): F;
        iN(values: Array<any>): F;
        nul(): F;
        isNull(): F;
        isNotNull(): F;
    }
    class QueryWithNotKeywords<F> {
        constructor(field: cloudself.cn.query.Field, queryStructure: cloudself.cn.query.QueryStructure, createQueryField: (p0: cloudself.cn.query.QueryStructure) => F);
        equalsTo(value: any): F;
        between(start: any, end: any): F;
        like(str: string): F;
        iN(values: Array<any>): F;
        nul(): F;
    }
    class QueryIgnoreCaseKeywords<F> {
        constructor(field: cloudself.cn.query.Field, queryStructure: cloudself.cn.query.QueryStructure, createQueryField: (p0: cloudself.cn.query.QueryStructure) => F);
        equalsTo(value: any): F;
        like(str: string): F;
        iN(values: Array<any>): F;
    }
    class QueryOrderByKeywords<F> {
        constructor(field: cloudself.cn.query.Field, queryStructure: cloudself.cn.query.QueryStructure, createQueryField: (p0: cloudself.cn.query.QueryStructure) => F);
        asc(): F;
        desc(): F;
    }
}
export namespace cloudself.cn.query {
    interface QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> {
        selectBy(): WHERE_FIELD;
        selectOneBy(): WHERE_FIELD;
        orderBy(): ORDER_BY_FIELD;
        updateBy(): WHERE_FIELD;
        deleteBy(): WHERE_FIELD;
        leftJoinOn(fields1: cloudself.cn.query.IFieldGenerator, fields2: cloudself.cn.query.IFieldGenerator): cloudself.cn.query.QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>;
        joiner(): FIELD_GENERATOR;
        foreignField(): WHERE_FIELD;
    }
    abstract class QueryProImpl<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> implements cloudself.cn.query.QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> {
        constructor(queryStructure: cloudself.cn.query.QueryStructure);
        selectBy(): WHERE_FIELD;
        selectOneBy(): WHERE_FIELD;
        orderBy(): ORDER_BY_FIELD;
        updateBy(): WHERE_FIELD;
        deleteBy(): WHERE_FIELD;
        leftJoinOn(fields1: cloudself.cn.query.IFieldGenerator, fields2: cloudself.cn.query.IFieldGenerator): cloudself.cn.query.QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>;
        joiner(): FIELD_GENERATOR;
        foreignField(): WHERE_FIELD;
    }
}
export namespace cloudself.cn.query {
    class QueryStructure {
        constructor(action: string, fields: Array<cloudself.cn.query.Field>, from: cloudself.cn.query.QueryStructureFrom, where: Array<cloudself.cn.query.WhereClause>, orderBy: Array<cloudself.cn.query.OrderByClause>, limit: Nullable<number>);
        readonly action: string;
        readonly fields: Array<cloudself.cn.query.Field>;
        readonly from: cloudself.cn.query.QueryStructureFrom;
        readonly where: Array<cloudself.cn.query.WhereClause>;
        readonly orderBy: Array<cloudself.cn.query.OrderByClause>;
        readonly limit: Nullable<number>;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Array<cloudself.cn.query.Field>;
        component3(): cloudself.cn.query.QueryStructureFrom;
        component4(): Array<cloudself.cn.query.WhereClause>;
        component5(): Array<cloudself.cn.query.OrderByClause>;
        component6(): Nullable<number>;
        copy(action: string, fields: Array<cloudself.cn.query.Field>, from: cloudself.cn.query.QueryStructureFrom, where: Array<cloudself.cn.query.WhereClause>, orderBy: Array<cloudself.cn.query.OrderByClause>, limit: Nullable<number>): cloudself.cn.query.QueryStructure;
        toString(): string;
    }
    class OrderByClause {
        constructor(field: cloudself.cn.query.Field, operator: string);
        readonly field: cloudself.cn.query.Field;
        readonly operator: string;
        component1(): cloudself.cn.query.Field;
        component2(): string;
        copy(field: cloudself.cn.query.Field, operator: string): cloudself.cn.query.OrderByClause;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Field {
        constructor(table: Nullable<string>, column: string);
        readonly table: Nullable<string>;
        readonly column: string;
        component1(): Nullable<string>;
        component2(): string;
        copy(table: Nullable<string>, column: string): cloudself.cn.query.Field;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class WhereClause {
        constructor(field: Nullable<cloudself.cn.query.Field>, operator: string, value: Nullable<any>);
        readonly field: Nullable<cloudself.cn.query.Field>;
        readonly operator: string;
        readonly value: Nullable<any>;
        component1(): Nullable<cloudself.cn.query.Field>;
        component2(): string;
        component3(): Nullable<any>;
        copy(field: Nullable<cloudself.cn.query.Field>, operator: string, value: Nullable<any>): cloudself.cn.query.WhereClause;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    const QueryStructureAction: {
        readonly SELECT: string;
        readonly UPDATE: string;
        readonly DELETE: string;
    };
    class FromJoinerOn {
        constructor(left: cloudself.cn.query.Field, right: cloudself.cn.query.Field);
        readonly left: cloudself.cn.query.Field;
        readonly right: cloudself.cn.query.Field;
        component1(): cloudself.cn.query.Field;
        component2(): cloudself.cn.query.Field;
        copy(left: cloudself.cn.query.Field, right: cloudself.cn.query.Field): cloudself.cn.query.FromJoinerOn;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class FromJoiner {
        constructor(table: string, on: Array<cloudself.cn.query.FromJoinerOn>);
        readonly table: string;
        readonly on: Array<cloudself.cn.query.FromJoinerOn>;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Array<cloudself.cn.query.FromJoinerOn>;
        copy(table: string, on: Array<cloudself.cn.query.FromJoinerOn>): cloudself.cn.query.FromJoiner;
        toString(): string;
    }
    class QueryStructureFrom {
        constructor(main: string, joins: Array<cloudself.cn.query.FromJoiner>);
        readonly main: string;
        readonly joins: Array<cloudself.cn.query.FromJoiner>;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Array<cloudself.cn.query.FromJoiner>;
        copy(main: string, joins: Array<cloudself.cn.query.FromJoiner>): cloudself.cn.query.QueryStructureFrom;
        toString(): string;
    }
}
export namespace cloudself.cn {
    class QueryFieldJs<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR> extends cloudself.cn.query.QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR> {
        constructor(queryStructure: cloudself.cn.query.QueryStructure, type: typeof cloudself.cn.query.QueryFieldType.WHERE_FIELD, fieldGenerator: () => FIELD_GENERATOR, createWhereField: (p0: cloudself.cn.query.QueryStructure) => WHERE_FIELD, createOrderByField: (p0: cloudself.cn.query.QueryStructure) => ORDER_BY_FIELD, createColumnLimiterField: (p0: cloudself.cn.query.QueryStructure) => COLUMN_LIMITER_FILED, createColumnsLimiterField: (p0: cloudself.cn.query.QueryStructure) => COLUMNS_LIMITER_FILED);
    }
}
export namespace cloudself.cn {
    class QueryProJs<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> extends cloudself.cn.query.QueryProImpl<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> {
        constructor(queryStructure: cloudself.cn.query.QueryStructure, createQuery: (p0: cloudself.cn.query.QueryStructure) => QUERY, createWhereField: (p0: cloudself.cn.query.QueryStructure) => WHERE_FIELD, createOrderByField: (p0: cloudself.cn.query.QueryStructure) => ORDER_BY_FIELD, fieldGenerator: () => FIELD_GENERATOR);
    }
}
export as namespace query_pro_fe;