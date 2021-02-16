@file:JsExport
@file:Suppress("EXPERIMENTAL_API_USAGE", "NON_EXPORTABLE_TYPE", "ClassName")

package cloudself.cn.query

import cloudself.cn.types.CreateQueryField
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmField

class QueryKeywords<F : QueryField<*, *, *, *>>(
    private val field: Field,
    private val queryStructure: QueryStructure,
    private val createQueryField: CreateQueryField<F>,
) {
    @JvmField val `is` = this
    @JvmField val not = QueryWithNotKeywords(field, queryStructure, createQueryField)
    @JvmField val ignoreCase = QueryIgnoreCaseKeywords(field, queryStructure, createQueryField)

    fun equalsTo(value: Any) = with(WhereClause(field, "=", value))
    fun between(start: Any, end: Any) = with(WhereClause(field, "between", arrayOf(start, end)))
    fun lessThan(value: Any) = with(WhereClause(field, "<", value))
    fun lessThanOrEqual(value: Any) = with(WhereClause(field, "<=", value))
    fun graterThan(value: Any) = with(WhereClause(field, ">", value))
    fun graterThanOrEqual(value: Any) = with(WhereClause(field, ">=", value))
    fun like(str: String) = with(WhereClause(field, "like", str))
    @JsName("iN")
    fun `in`(vararg values: Any) = with(WhereClause(field, "in", values))
    fun nul() = with(WhereClause(field = field, operator = "is null"))
    fun isNull() = with(WhereClause(field = field, operator = "is null"))
    fun isNotNull() = with(WhereClause(field = field, operator = "is not null"))

    private fun with(whereClause: WhereClause) = createQueryField(queryStructure.copy(where = queryStructure.where + whereClause))
}

class QueryWithNotKeywords<F : QueryField<*, *, *, *>>(
    private val field: Field,
    private val queryStructure: QueryStructure,
    private val createQueryField: CreateQueryField<F>,
) {
    fun equalsTo(value: Any) = with(WhereClause(field, "<>", value))
    fun between(start: Any, end: Any) = with(WhereClause(field, "not between", arrayOf(start, end)))
    fun like(str: String) = with(WhereClause(field, "not like", str))
    @JsName("iN")
    fun `in`(vararg values: Any) = with(WhereClause(field, "not in", values))
    fun nul() = with(WhereClause(field = field, operator = "is not null"))

    private fun with(whereClause: WhereClause) = createQueryField(queryStructure.copy(where = queryStructure.where + whereClause))
}

class QueryIgnoreCaseKeywords<F : QueryField<*, *, *, *>>(
    private val field: Field,
    private val queryStructure: QueryStructure,
    private val createQueryField: CreateQueryField<F>,
) {
    fun equalsTo(value: Any) = with(WhereClause(upperField(field), "=", "upper($value)"))
    fun like(str: String) = with(WhereClause(upperField(field), "like", "upper($str)"))
    @JsName("iN")
    fun `in`(vararg values: Any) = with(WhereClause(upperField(field), "in", values.map { "upper($it)" }))

    private fun upperField(field: Field) = Field(column = "upper(${field.table}.${field.column})")
    private fun with(whereClause: WhereClause) = createQueryField(queryStructure.copy(where = queryStructure.where + whereClause))
}

class QueryOrderByKeywords<F: QueryField<*, *, *, *>>(
    private val field: Field,
    private val queryStructure: QueryStructure,
    private val createQueryField: CreateQueryField<F>,
) {
    fun asc() = with(OrderByClause(field, "asc"))
    fun desc() = with(OrderByClause(field, "desc"))

    private fun with(orderBy: OrderByClause) = createQueryField(queryStructure.copy(orderBy = queryStructure.orderBy + orderBy))
}
