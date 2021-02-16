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
        val currentTableName = queryStructure.from.main
        val foreignTableName: String
        val foreignFields: List<Field>
        val currentTableFields: List<Field>
        if (fields1._getTableName() == currentTableName) {
            foreignTableName = fields2._getTableName()
            foreignFields = fields2._getFields()
            currentTableFields = fields1._getFields()
        } else {
            foreignTableName = fields1._getTableName()
            foreignFields = fields1._getFields()
            currentTableFields = fields2._getFields()
        }
        if (foreignFields.size != currentTableFields.size) {
            throw RuntimeException("the joiner length of $currentTableFields and $foreignFields is not equal")
        }

        val foreignJoinerOn = foreignFields.mapIndexed { index, field -> FromJoinerOn(currentTableFields[index], field) }
        val newJoins = oldFrom.joins + FromJoiner(foreignTableName, foreignJoinerOn.toTypedArray())

        return createQuery(queryStructure.copy(from = oldFrom.copy(joins = newJoins)))
    }

    override fun joiner() = fieldGenerator()

    override fun foreignField() = createWhereField(queryStructure)
}
