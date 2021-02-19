@file:JsExport
@file:Suppress("EXPERIMENTAL_API_USAGE", "NON_EXPORTABLE_TYPE")

package cloudself.cn

import cloudself.cn.query.IFieldGenerator
import cloudself.cn.query.QueryField
import cloudself.cn.query.QueryProImpl
import cloudself.cn.query.QueryStructure
import cloudself.cn.types.CreateQuery
import cloudself.cn.types.CreateQueryField

class QueryProJs<
        QUERY: QueryProJs<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>,
        WHERE_FIELD: QueryField<*, *, *, *, *, *>,
        ORDER_BY_FIELD: QueryField<*, *, *, *, *, *>,
        FIELD_GENERATOR: IFieldGenerator
> constructor(
    private val queryStructure: QueryStructure,
    override val createQuery: CreateQuery<QUERY>,
    override val createWhereField: CreateQueryField<WHERE_FIELD>,
    override val createOrderByField: CreateQueryField<ORDER_BY_FIELD>,
    override val fieldGenerator: () -> FIELD_GENERATOR
): QueryProImpl<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>(queryStructure) {

}