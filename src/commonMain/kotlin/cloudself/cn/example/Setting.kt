package cloudself.cn.example

import cloudself.cn.query.*
import cloudself.cn.types.CreateQueryField
import kotlin.jvm.JvmField
import kotlin.jvm.JvmStatic

data class Setting(
    private val id: Long,
    private val userId: Long,
    private val kee: String,
    private val value: String,
)

class SettingQueryPro {
    class Query constructor(
        queryStructure: QueryStructure
    ): QueryProImpl<Query, WhereField, OrderByField, FieldGenerator>(queryStructure) {
        override val createQuery = { qs: QueryStructure -> Query(qs) }
        override val createWhereField = { qs: QueryStructure -> WhereField(qs) }
        override val createOrderByField = { qs: QueryStructure -> OrderByField(qs) }
        override val fieldGenerator = { FieldGenerator() }
    }

    companion object: @JvmStatic QueryPro<Query, WhereField, OrderByField, FieldGenerator> by
        Query(QueryStructure(from = QueryStructureFrom("setting", arrayOf()))) {
            private const val TABLE_NAME = "setting"
            fun createField(column: String) = Field(TABLE_NAME, column)
        }

    class FieldGenerator: IFieldGenerator {
        private val fields: MutableList<Field> = mutableListOf()
        fun id() = this.also { fields.add(createField("id")) }
        fun userId() = this.also { fields.add(createField("userId")) }
        fun kee() = this.also { fields.add(createField("kee")) }
        fun value() = this.also { fields.add(createField("value")) }
        override fun _getFields() = fields
        override fun _getTableName() = TABLE_NAME
    }

    class WhereField constructor(queryStructure: QueryStructure)
        : QueryField<
            Setting, WhereField, OrderByField, ColumnLimiterField, ColumnsLimiterField, FieldGenerator
        >(queryStructure) {
        override val type = QueryFieldType.WHERE_FIELD
        override val fieldGenerator = { FieldGenerator() }
        override val createWhereField: CreateQueryField<WhereField> = { queryStructure -> WhereField(queryStructure) }
        override val createOrderByField: CreateQueryField<OrderByField> = { queryStructure -> OrderByField(queryStructure) }
        override val createColumnLimiterField: CreateQueryField<ColumnLimiterField> =
            { queryStructure -> ColumnLimiterField(queryStructure) }
        override val createColumnsLimiterField: CreateQueryField<ColumnsLimiterField> =
            { queryStructure -> ColumnsLimiterField(queryStructure) }

        @JvmField val id = QueryKeywords(Companion.createField("id"), queryStructure, createWhereField)
        @JvmField val userId = QueryKeywords(Companion.createField("userId"), queryStructure, createWhereField)
        @JvmField val kee = QueryKeywords(Companion.createField("kee"), queryStructure, createWhereField)
        @JvmField val value = QueryKeywords(Companion.createField("value"), queryStructure, createWhereField)
    }

    class OrderByField constructor(queryStructure: QueryStructure)
        : QueryField<
            Setting, WhereField, OrderByField, ColumnLimiterField, ColumnsLimiterField, FieldGenerator
        >(queryStructure) {
        override val type = QueryFieldType.ORDER_BY_FIELD
        override val fieldGenerator = { FieldGenerator() }
        override val createWhereField: CreateQueryField<WhereField> = { queryStructure -> WhereField(queryStructure) }
        override val createOrderByField: CreateQueryField<OrderByField> = { queryStructure -> OrderByField(queryStructure) }
        override val createColumnLimiterField: CreateQueryField<ColumnLimiterField> =
            { queryStructure -> ColumnLimiterField(queryStructure) }
        override val createColumnsLimiterField: CreateQueryField<ColumnsLimiterField> =
            { queryStructure -> ColumnsLimiterField(queryStructure) }

        fun id() = QueryOrderByKeywords(Companion.createField("id"), queryStructure, createOrderByField)
        fun userId() = QueryOrderByKeywords(Companion.createField("userId"), queryStructure, createOrderByField)
        fun kee() = QueryOrderByKeywords(Companion.createField("kee"), queryStructure, createOrderByField)
        fun value() = QueryOrderByKeywords(Companion.createField("value"), queryStructure, createOrderByField)
    }

    class ColumnLimiterField constructor(queryStructure: QueryStructure)
        : QueryField<
            Setting, WhereField, OrderByField, ColumnLimiterField, ColumnsLimiterField, FieldGenerator
        >(queryStructure) {
        override val type = QueryFieldType.ORDER_BY_FIELD
        override val fieldGenerator = { FieldGenerator() }
        override val createWhereField: CreateQueryField<WhereField> = { queryStructure -> WhereField(queryStructure) }
        override val createOrderByField: CreateQueryField<OrderByField> = { queryStructure -> OrderByField(queryStructure) }
        override val createColumnLimiterField: CreateQueryField<ColumnLimiterField> =
            { queryStructure -> ColumnLimiterField(queryStructure) }
        override val createColumnsLimiterField: CreateQueryField<ColumnsLimiterField> =
            { queryStructure -> ColumnsLimiterField(queryStructure) }

        fun id() = getColumn<Long>(Field(TABLE_NAME, "id"))
        fun userId() = getColumn<Long>(Field(TABLE_NAME, "userId"))
        fun kee() = getColumn<String>(Field(TABLE_NAME, "kee"))
        fun value() = getColumn<String>(Field(TABLE_NAME, "value"))
    }

    class ColumnsLimiterField constructor(queryStructure: QueryStructure)
        : QueryField<
            Setting, WhereField, OrderByField, ColumnLimiterField, ColumnsLimiterField, FieldGenerator
        >(queryStructure) {
        override val type = QueryFieldType.ORDER_BY_FIELD
        override val fieldGenerator = { FieldGenerator() }
        override val createWhereField: CreateQueryField<WhereField> = { queryStructure -> WhereField(queryStructure) }
        override val createOrderByField: CreateQueryField<OrderByField> = { queryStructure -> OrderByField(queryStructure) }
        override val createColumnLimiterField: CreateQueryField<ColumnLimiterField> =
            { queryStructure -> ColumnLimiterField(queryStructure) }
        override val createColumnsLimiterField: CreateQueryField<ColumnsLimiterField> =
            { queryStructure -> ColumnsLimiterField(queryStructure) }

        fun id() = with("id")
        fun userId() = with("userId")
        fun kee() = with("kee")
        fun value() = with("value")

        private fun with(column: String) =
            ColumnsLimiterField(queryStructure.copy(fields = queryStructure.fields + Field(TABLE_NAME, column)))
    }
}
