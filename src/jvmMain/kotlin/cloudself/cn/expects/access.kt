package cloudself.cn.expects

actual fun <T>access(obj: Any, prop: String): T {
    val field = obj::class.java.declaredFields.first { it.name == prop }
    field.isAccessible = true
    @Suppress("UNCHECKED_CAST")
    return field.get(obj) as T
}
