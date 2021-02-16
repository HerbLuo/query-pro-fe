package cloudself.cn.example

import cloudself.cn.query.*
import cloudself.cn.types.CreateQueryField
import kotlin.jvm.JvmField
import kotlin.jvm.JvmStatic

data class User(
    private val id: Long,
    private val name: String,
    private val age: Int,
)

class UserQueryPro {
    private class Query constructor(
        queryStructure: QueryStructure
    ): QueryProImpl<Query, WhereField, OrderByField, FieldGenerator>(queryStructure) {
        override val createQuery = { qs: QueryStructure -> Query(qs) }
        override val createWhereField = { qs: QueryStructure -> WhereField(qs) }
        override val createOrderByField = { qs: QueryStructure -> OrderByField(qs) }
        override val fieldGenerator = { FieldGenerator() }
    }
    companion object: @JvmStatic QueryPro<Query, WhereField, OrderByField, FieldGenerator> by
        Query(QueryStructure(from = QueryStructureFrom("user", arrayOf()))) {
            private const val TABLE_NAME = "user"
            fun createField(column: String) = Field(TABLE_NAME, column)
        }

    class FieldGenerator: IFieldGenerator {
        private val fields: MutableList<Field> = mutableListOf()
        fun id() = this.also { fields.add(createField("id")) }
        fun name() = this.also { fields.add(createField("name")) }
        fun age() = this.also { fields.add(createField("age")) }
        override fun _getFields() = fields
        override fun _getTableName() = TABLE_NAME
    }

    class WhereField constructor(queryStructure: QueryStructure)
        : QueryField<User, WhereField, OrderByField, FieldGenerator>(queryStructure) {
        override val type = QueryFieldType.WHERE_FIELD
        override val fieldGenerator = { FieldGenerator() }
        override val createWhereField: CreateQueryField<WhereField> = { queryStructure -> WhereField(queryStructure) }
        override val createOrderByField: CreateQueryField<OrderByField> = { queryStructure -> OrderByField(queryStructure) }

        @JvmField val id = QueryKeywords(Companion.createField("id"), queryStructure, createWhereField)
        @JvmField val name = QueryKeywords(Companion.createField("name"), queryStructure, createWhereField)
        @JvmField val age = QueryKeywords(Companion.createField("age"), queryStructure, createWhereField)
    }

    class OrderByField constructor(queryStructure: QueryStructure)
        : QueryField<User, WhereField, OrderByField, FieldGenerator>(queryStructure) {
        override val type = QueryFieldType.ORDER_BY_FIELD
        override val fieldGenerator = { FieldGenerator() }
        override val createWhereField: CreateQueryField<WhereField> = { queryStructure -> WhereField(queryStructure) }
        override val createOrderByField: CreateQueryField<OrderByField> = { queryStructure -> OrderByField(queryStructure) }

        @JvmField val id = QueryOrderByKeywords(Companion.createField("id"), queryStructure, createOrderByField)
        @JvmField val name = QueryOrderByKeywords(Companion.createField("name"), queryStructure, createOrderByField)
        @JvmField val age = QueryOrderByKeywords(Companion.createField("age"), queryStructure, createOrderByField)
    }
}
