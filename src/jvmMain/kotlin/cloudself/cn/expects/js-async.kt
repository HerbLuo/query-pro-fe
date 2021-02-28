package cloudself.cn.expects

actual fun <T, R> jsThen(obj: T, cb: (obj: T) -> R): R {
    return cb(obj)
}
