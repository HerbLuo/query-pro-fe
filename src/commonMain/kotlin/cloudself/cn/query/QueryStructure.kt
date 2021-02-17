@file:JsExport
@file:Suppress("EXPERIMENTAL_API_USAGE", "ClassName")
package cloudself.cn.query

import kotlin.js.JsExport

data class QueryStructure(
    val action: String = QueryStructureAction.SELECT,
    val fields: Array<Field> = arrayOf(),
    val from: QueryStructureFrom = QueryStructureFrom("", arrayOf()),
    val where: Array<WhereClause> = arrayOf(),
    val orderBy: Array<OrderByClause> = arrayOf(),
    val limit: Int? = null,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as QueryStructure

        if (action != other.action) return false
        if (!fields.contentEquals(other.fields)) return false
        if (from != other.from) return false
        if (!where.contentEquals(other.where)) return false
        if (!orderBy.contentEquals(other.orderBy)) return false
        if (limit != other.limit) return false

        return true
    }

    override fun hashCode(): Int {
        var result = action.hashCode()
        result = 31 * result + fields.contentHashCode()
        result = 31 * result + from.hashCode()
        result = 31 * result + where.contentHashCode()
        result = 31 * result + orderBy.contentHashCode()
        result = 31 * result + (limit ?: 0)
        return result
    }
}

data class OrderByClause(
    val field: Field,
    val operator: String,
)

data class Field(
    val table: String? = null,
    val column: String,
)

data class WhereClause(
    val field: Field? = null,
    val operator: String,
    val value: Any? = null // null arrayOr<string boolean integer long date> WhereClause[]
)

object QueryStructureAction {
    const val SELECT = "SELECT"
    const val UPDATE = "UPDATE"
    const val DELETE = "DELETE"
}

data class FromJoinerOn(
    val left: Field,
    val right: Field,
)

data class FromJoiner(
    val table: String,
    val on: Array<FromJoinerOn>,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as FromJoiner

        if (table != other.table) return false
        if (!on.contentEquals(other.on)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = table.hashCode()
        result = 31 * result + on.contentHashCode()
        return result
    }
}

data class QueryStructureFrom(
    val main: String,
    val joins: Array<FromJoiner> = arrayOf(),
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as QueryStructureFrom

        if (main != other.main) return false
        if (!joins.contentEquals(other.joins)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = main.hashCode()
        result = 31 * result + joins.contentHashCode()
        return result
    }
}
