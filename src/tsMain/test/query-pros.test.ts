import {UserPri} from "./model/UserPri";
import {UserPriSetting} from "./model/UserPriSetting";
import {QueryPro} from "../src/query-pro";
import {init} from "./init";

init();

const UserQueryPro = new QueryPro<UserPri>("user_pri");
const UserSettingQueryPro = new QueryPro<UserPriSetting>("user_pri_setting");

test("selectBy", async () => {
    await UserQueryPro.selectBy().run();
    await UserSettingQueryPro.selectBy().run();
});

test("selectBy equals", async () => {
    const rows1 = await UserQueryPro.selectBy().uid.equalsTo(1).run();
    console.log(rows1);
    await UserSettingQueryPro.selectBy().uid.equalsTo(1).run();
    await UserQueryPro.selectBy().uid.equalsTo(1).score.equalsTo(2.2).run();
    await UserQueryPro.selectBy().uid.equalsTo(1).and().score.equalsTo('2.3').run();
});

test("selectBy null", async () => {
    UserQueryPro.selectBy().uid.nul().run();
    UserQueryPro.selectBy().score.nul().run();
    UserQueryPro.selectBy().role.nul().run();
    UserQueryPro.selectBy().uid.nul().score.nul().and().role.nul().run();
});

test("selectBy not", async () => {
    UserQueryPro.selectBy().uid.not.nul().run();
    UserQueryPro.selectBy().uid.not.equalsTo(1).run();
    UserQueryPro.selectBy().score.not.between(600, 700).run();
    UserQueryPro.selectBy().uid.not.in(1, 2).run();
    UserQueryPro
        .selectBy().uid.not.nul()
        .and().uid.not.equalsTo(1)
        .and().score.not.between(600, 700)
        .uid.not.in(1, 2)
        .run();
    UserSettingQueryPro.selectBy().id.not.in(1, 2);
    UserSettingQueryPro.selectBy().uid.not.in(1, 2);
    UserSettingQueryPro.selectBy().kee.not.in(1, 2);
    UserSettingQueryPro.selectBy().value.not.in(1, 2);
    UserSettingQueryPro.selectBy().site.not.in(1, 2);
    UserSettingQueryPro.selectBy().kee.not.like("%key%").run();

});

test("selectBy equals with or", async () => {
    UserQueryPro.selectBy().uid.equalsTo(1).or().score.equalsTo(2).run();
    UserQueryPro
        .selectBy().uid.equalsTo(1)
        .or(f => f.score.graterThan(600).and().role.not.nul())
});

test("selectBy with limit", async () => {
    UserSettingQueryPro.selectBy().uid.equalsTo(1).limit(10).run();
    UserSettingQueryPro.selectBy().uid.equalsTo(1).runLimit1();
});

test("orderBy", async () => {
    UserSettingQueryPro.orderBy().uid().asc().run();
    UserSettingQueryPro.orderBy().uid().asc().kee().desc().run();
});

test("column limiter", async () => {
    const rows1 = await UserSettingQueryPro.selectBy().uid.equalsTo(1).columnLimiter().kee();
    console.log(rows1);
});

test("columns limiter", async () => {
    const rows1 = await UserSettingQueryPro.selectBy().kee.equalsTo("22").columnsLimiter().kee().value().run();
    console.log(rows1);
});

test("misc", async () => {
    UserSettingQueryPro
        .leftJoinOn(UserQueryPro.joiner().uid(), UserSettingQueryPro.joiner().uid())
        .selectBy().uid.equalsTo("")
        .and().site.equalsTo("global")
        .andForeignField([UserQueryPro.foreignField().uid.equalsTo(1)])
        .orderBy().kee().desc().value().asc()
        .limit(10)
        .columnsLimiter().kee().value().uid()
        .run();
});

