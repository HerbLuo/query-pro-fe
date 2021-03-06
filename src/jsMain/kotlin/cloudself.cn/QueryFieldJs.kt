@file:JsExport
@file:Suppress("EXPERIMENTAL_API_USAGE", "NON_EXPORTABLE_TYPE")

package cloudself.cn

import cloudself.cn.query.*
import cloudself.cn.types.CreateQueryField

class QueryFieldJs<
        T,
        WHERE_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        ORDER_BY_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        COLUMN_LIMITER_FILED: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        COLUMNS_LIMITER_FILED: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        FIELD_GENERATOR: IFieldGenerator,
> constructor(
    queryStructure: QueryStructure,
    override val type : String,
    override val fieldGenerator: () -> FIELD_GENERATOR,
    override val createWhereField: CreateQueryField<WHERE_FIELD>,
    override val createOrderByField: CreateQueryField<ORDER_BY_FIELD>,
    override val createColumnLimiterField: CreateQueryField<COLUMN_LIMITER_FILED>,
    override val createColumnsLimiterField: CreateQueryField<COLUMNS_LIMITER_FILED>,
): QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>(queryStructure) {
    public override fun <T>getColumn(field: Field): Array<T> {
        return super.getColumn(field)
    }
}