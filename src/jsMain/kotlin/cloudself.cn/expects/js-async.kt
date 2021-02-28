package cloudself.cn.expects

actual fun <T, R>jsThen(obj: T, cb: (obj: T) -> R): R {
    return js("Promise.resolve(obj).then(cb)") as R
}
