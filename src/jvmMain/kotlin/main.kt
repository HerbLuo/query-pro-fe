import cloudself.cn.example.UserQueryPro

fun main(args: Array<String>) {
    UserQueryPro.selectBy().id.equalsTo(123)

    println(args)
    println("Hello World!")
}