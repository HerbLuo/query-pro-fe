package cloudself.cn;

import org.junit.Test;

public class MainTest {
    @Test
    public void test() {
        final cloudself.cn.example.UserQueryPro.Companion UserQueryPro = cloudself.cn.example.UserQueryPro.Companion;
        final cloudself.cn.example.SettingQueryPro.Companion SettingQueryPro = cloudself.cn.example.SettingQueryPro.Companion;

        UserQueryPro.selectBy().name.is.equalsTo(1).and().age.is.equalsTo(1000).run();

        UserQueryPro
                .selectBy().id.is.equalsTo(1)
                .or().name.in("Tom", "Cat", "Luo")
                .run();

        UserQueryPro.selectBy().id.is.not.equalsTo(2).run();

        UserQueryPro.selectBy().id.ignoreCase.like("%luo%").run();

        UserQueryPro.selectBy().id.is.nul().run();

        UserQueryPro
                .selectBy().id.is.equalsTo(1)
                .or(it -> it.age.equalsTo(20).and().name.like("%Luo%"))
                .run();

        UserQueryPro.selectBy().name.like("%Luo%").orderBy().id.desc().run();

        UserQueryPro.orderBy().id.desc().run();

        UserQueryPro.orderBy().id.desc().name.asc().run();

        UserQueryPro.orderBy().id.desc().name.asc().limit(1).run();

        UserQueryPro
                .orderBy().id.desc().name.asc().limit(1)
                .columnsLimiter(l -> l.id().name().age())
                .run();

        SettingQueryPro // from setting
                .leftJoinOn(UserQueryPro.joiner().id(), SettingQueryPro.joiner().userId()) // left join user on user.id = setting.user_id
                .selectBy().kee.equalsTo("autoStart") // select ... where setting.kee = 'autoStart'
                .and().value.equalsTo(true) // and setting.value = true
                .andForeignField(UserQueryPro.foreignField().name.ignoreCase.like("%luo%")) // and upper(user.name) like upper("%luo%")
                .limit(1) // limit 1
                .columnsLimiter(l -> l.kee().value()) // select setting.kee, setting.value from setting ...
                .run();
    }
}
