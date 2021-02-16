@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "EXPERIMENTAL_API_USAGE")

package cloudself.cn.query

import cloudself.cn.types.CreateQuery
import cloudself.cn.types.CreateQueryField
import kotlin.js.JsExport

interface QueryPro<
        QUERY: QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>,
        WHERE_FIELD: QueryField<*, *, *, *>,
        ORDER_BY_FIELD: QueryField<*, *, *, *>,
        FIELD_GENERATOR: IFieldGenerator
> {
    fun selectBy(): WHERE_FIELD
    fun selectOneBy(): WHERE_FIELD
    fun orderBy(): ORDER_BY_FIELD
    fun updateBy(): WHERE_FIELD
    fun deleteBy(): WHERE_FIELD

    fun leftJoinOn(fields1: IFieldGenerator, fields2: IFieldGenerator): QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>
    fun joiner(): FIELD_GENERATOR
    fun foreignField(): WHERE_FIELD
}

abstract class QueryProImpl<
        QUERY: QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>,
        WHERE_FIELD: QueryField<*, *, *, *>,
        ORDER_BY_FIELD: QueryField<*, *, *, *>,
        FIELD_GENERATOR: IFieldGenerator
> constructor(private val queryStructure: QueryStructure): QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> {
    protected abstract val createQuery: CreateQuery<QUERY>
    protected abstract val createWhereField: CreateQueryField<WHERE_FIELD>
    protected abstract val createOrderByField: CreateQueryField<ORDER_BY_FIELD>
    protected abstract val fieldGenerator: () -> FIELD_GENERATOR

    override fun selectBy() = createWhereField(queryStructure.copy(action = QueryStructureAction.SELECT))

    override fun selectOneBy() = createWhereField(queryStructure.copy(action = QueryStructureAction.SELECT, limit = 1))

    override fun orderBy() = createOrderByField(queryStructure.copy(action = QueryStructureAction.SELECT))

    override fun updateBy() = createWhereField(queryStructure.copy(action = QueryStructureAction.SELECT))

    override fun deleteBy() = createWhereField(queryStructure.copy(action = QueryStructureAction.SELECT))

    override fun leftJoinOn(
        fields1: IFieldGenerator,
        fields2: IFieldGenerator
    ): QueryPro<QUERY, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR> {
        val oldFrom = queryStructure.from
        val oldJoins = oldFrom.joins
        val currentTableName = queryStructure.from.main
        val field1TableName = fields1._getTableName()
        val field2TableName = fields2._getTableName()

        var foreignTableName: String? = null
        var foreignFields: List<Field>? = null
        var currentTableFields: List<Field>? = null

        if (field1TableName == currentTableName) { // 其中一个是主表
            foreignTableName = field2TableName
            foreignFields = fields2._getFields()
            currentTableFields = fields1._getFields()
        } else if (field2TableName == currentTableName) { // 其中一个是主表
            foreignTableName = field1TableName
            foreignFields = fields1._getFields()
            currentTableFields = fields2._getFields()
        } else { // 没有主表，从joins里面找已有表
            for (oldJoin in oldJoins) {
                if (oldJoin.table == field1TableName) {
                    foreignTableName = field2TableName
                    foreignFields = fields2._getFields()
                    currentTableFields = fields1._getFields()
                    break
                }
                if (oldJoin.table == field2TableName) {
                    foreignTableName = field1TableName
                    foreignFields = fields1._getFields()
                    currentTableFields = fields2._getFields()
                    break
                }
            }
        }
        if (foreignFields == null || currentTableFields == null || foreignTableName == null) {
            throw RuntimeException("can not find left table for joiner1 and joiner2: $field1TableName, $field2TableName")
        }
        if (foreignFields.size != currentTableFields.size) {
            throw RuntimeException("the joiner length of $currentTableFields and $foreignFields is not equal")
        }

        val foreignJoinerOn = foreignFields.mapIndexed { index, field -> FromJoinerOn(currentTableFields[index], field) }
        val newJoins = oldJoins + FromJoiner(foreignTableName, foreignJoinerOn.toTypedArray())

        return createQuery(queryStructure.copy(from = oldFrom.copy(joins = newJoins)))
    }

    override fun joiner() = fieldGenerator()

    override fun foreignField() = createWhereField(queryStructure)
}
