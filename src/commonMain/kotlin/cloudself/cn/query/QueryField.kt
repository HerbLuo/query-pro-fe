@file:JsExport
@file:Suppress("EXPERIMENTAL_API_USAGE", "NON_EXPORTABLE_TYPE")
package cloudself.cn.query

import cloudself.cn.types.CreateQueryField
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads

@Suppress("ClassName")
sealed class QueryFieldType {
    object WHERE_FIELD : QueryFieldType()
    object ORDER_BY_FIELD : QueryFieldType()
}

interface IFieldGenerator {
    @Suppress("FunctionName")
    fun _getFields(): List<Field>
    @Suppress("FunctionName")
    fun _getTableName(): String
}

abstract class FinalQueryField<T, FIELD_GENERATOR: IFieldGenerator> constructor(private val queryStructure: QueryStructure) {
    protected abstract val createField: CreateQueryField<FinalQueryField<T, FIELD_GENERATOR>>
    protected abstract val fieldGenerator: () -> FIELD_GENERATOR

    fun limit(limit: Int): FinalQueryField<T, FIELD_GENERATOR> {
        return createField(queryStructure.copy(limit = limit))
    }

    fun columnsLimiter(limiter: (l: FIELD_GENERATOR) -> FIELD_GENERATOR): FinalQueryField<T, FIELD_GENERATOR> {
        val fields = limiter(fieldGenerator())._getFields()
        return createField(queryStructure.copy(fields = fields.toTypedArray()))
    }

    fun columnLimiter() {

    }

    fun run(): List<T> {
        return arrayListOf()
    }
    fun pageable() {
    }
}

abstract class QueryField<
        T,
        WHERE_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>,
        ORDER_BY_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, FIELD_GENERATOR>,
        FIELD_GENERATOR: IFieldGenerator,
> constructor(private val queryStructure: QueryStructure): FinalQueryField<T, FIELD_GENERATOR>(queryStructure) {
    protected abstract val type: QueryFieldType
    protected abstract val createWhereField: CreateQueryField<WHERE_FIELD>
    protected abstract val createOrderByField: CreateQueryField<ORDER_BY_FIELD>
    override val createField = { qs: QueryStructure -> createWhereField(qs) }

    fun customColumn(column: String) = QueryKeywords(Field(column = column), queryStructure, createWhereField)

    fun and(): WHERE_FIELD {
        if (type != QueryFieldType.WHERE_FIELD) {
            throw RuntimeException("$type can not call and, usage: .orderBy().id.desc().name.asc()")
        }
        @Suppress("UNCHECKED_CAST")
        return this as WHERE_FIELD
    }

    @JvmOverloads
    fun or(factor: ((f: WHERE_FIELD) -> WHERE_FIELD)? = null): WHERE_FIELD {
        if (type != QueryFieldType.WHERE_FIELD) {
            throw RuntimeException("$type can not call and, usage: .orderBy().id.desc().name.asc()")
        }

        if (factor == null) {
            return createWhereField(queryStructure.copy(where = queryStructure.where + WhereClause(operator = "or")))
        }

        val orWhereClauses = factor(createWhereField(QueryStructure())).queryStructure.where
        return createWhereField(queryStructure.copy(where = queryStructure.where + WhereClause(operator = "or", value = orWhereClauses)))
    }

    fun andForeignField(vararg fields: QueryField<*, *, *, *>): WHERE_FIELD {
        val newWhereClause = queryStructure.where.toMutableList()
        for (field in fields) {
            newWhereClause.addAll(field.queryStructure.where)
        }
        return createWhereField(queryStructure.copy(where = newWhereClause.toTypedArray()))
    }

    fun orderBy(): ORDER_BY_FIELD {
        return createOrderByField(queryStructure)
    }
}
