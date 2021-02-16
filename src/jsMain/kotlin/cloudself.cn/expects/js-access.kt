package cloudself.cn.expects

actual fun <T>access(obj: Any, prop: String): T {
    val jsObj: dynamic = obj
    return jsObj[prop] as T
}
