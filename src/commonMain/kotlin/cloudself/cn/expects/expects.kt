package cloudself.cn.expects

expect fun <T>access(obj: Any, prop: String): T

expect fun <T, R>jsThen(obj: T, cb: (obj: T) -> R): R
