@file:JsExport
@file:Suppress("EXPERIMENTAL_API_USAGE", "NON_EXPORTABLE_TYPE")
package cloudself.cn.query

import cloudself.cn.expects.access
import cloudself.cn.types.CreateQueryField
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads

@Suppress("ClassName")
object QueryFieldType {
    const val WHERE_FIELD = "WHERE_FIELD"
    const val ORDER_BY_FIELD = "ORDER_BY_FIELD"
    const val OTHER_FIELD = "OTHER_FIELD"
}

interface IFieldGenerator {
    @Suppress("FunctionName")
    fun _getFields(): Array<Field>
    @Suppress("FunctionName")
    fun _getTableName(): String
}

abstract class FinalQueryField<
        T,
        WHERE_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        ORDER_BY_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        COLUMN_LIMITER_FILED: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        COLUMNS_LIMITER_FILED: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        FIELD_GENERATOR: IFieldGenerator,
> constructor(private val queryStructure: QueryStructure) {
    protected abstract val createField: CreateQueryField<FinalQueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>>
    protected abstract val createColumnLimiterField: CreateQueryField<COLUMN_LIMITER_FILED>
    protected abstract val createColumnsLimiterField: CreateQueryField<COLUMNS_LIMITER_FILED>
    protected abstract val fieldGenerator: () -> FIELD_GENERATOR

    fun limit(limit: Int): FinalQueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR> {
        return createField(queryStructure.copy(limit = limit))
    }

    protected open fun <T>getColumn(field: Field): Array<T> {
        val newQueryStructure = queryStructure.copy(fields = queryStructure.fields + field)
        val result = createField(newQueryStructure).run()
        val res = result.map { access<T>(it as Any, field.column) }
        @Suppress("UNCHECKED_CAST")
        return Array(res.size) { i -> res[i] as Any } as Array<T>
    }

    fun columnsLimiter(): COLUMNS_LIMITER_FILED {
        return createColumnsLimiterField(queryStructure)
    }

    fun columnLimiter(): COLUMN_LIMITER_FILED {
        return createColumnLimiterField(queryStructure)
    }

    fun runLimit1(): T? {
        val results = createField(queryStructure.copy(limit = 1)).run()
        if (results.isEmpty()) {
            return null
        }
        return results[0]
    }

    fun run(): Array<T> {
        @Suppress("UNCHECKED_CAST")
        return emptyArray<Int>() as Array<T>
    }

    fun pageable() {
    }
}

abstract class QueryField<
        T,
        WHERE_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        ORDER_BY_FIELD: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        COLUMN_LIMITER_FILED: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        COLUMNS_LIMITER_FILED: QueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>,
        FIELD_GENERATOR: IFieldGenerator,
> constructor(protected val queryStructure: QueryStructure)
    : FinalQueryField<T, WHERE_FIELD, ORDER_BY_FIELD, COLUMN_LIMITER_FILED, COLUMNS_LIMITER_FILED, FIELD_GENERATOR>(queryStructure) {
    protected abstract val type: String
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
        val newWhereClause = queryStructure.where + WhereClause(operator = "or", value = orWhereClauses)
        return createWhereField(queryStructure.copy(where = newWhereClause))
    }

    fun andForeignField(vararg fields: QueryField<*, *, *, *, *, *>): WHERE_FIELD {
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
