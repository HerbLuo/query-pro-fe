import {UserPri} from "./model/UserPri";
import {UserPriSetting} from "./model/UserPriSetting";
import {QueryPro} from "../src/query-pro";
import {init} from "./init";

init();

const UserQueryPro = new QueryPro<UserPri>("user_pri");
const UserSettingQueryPro = new QueryPro<UserPriSetting>("user_pri_setting");

test("selectBy", async () => {
    const rows1 = await UserQueryPro.selectBy().run();
    console.log(rows1);
    const rows2 = await UserSettingQueryPro.selectBy().run();
    console.log(rows2);
    const rows3 = await UserQueryPro.selectBy().score.between(600, 700).run();
    console.log(rows3);
    const rows5 = await UserQueryPro.selectBy().uid.in(1, 2).run();
    console.log(rows5);
    const rows6 = await UserSettingQueryPro.selectBy().kee.like("%key%").run();
    console.log(rows6);
    // TODO BUG OF IGNORE CASE
    const rows7 = await UserSettingQueryPro.selectBy().kee.ignoreCase.like("%key%").run();
    console.log(rows7);
});

test("selectBy equals", async () => {
    const rows1 = await UserQueryPro.selectBy().uid.equalsTo(1).run();
    console.log(rows1);
    const rows2 = await UserSettingQueryPro.selectBy().uid.equalsTo(1).run();
    console.log(rows2);
    const rows3 = await UserQueryPro.selectBy().uid.equalsTo(1).score.equalsTo(2.2).run();
    console.log(rows3);
    const rows4 = await UserQueryPro.selectBy().uid.equalsTo(1).and().score.equalsTo('2.3').run();
    console.log(rows4);
});

test("selectBy null", async () => {
    const rows1 = await UserQueryPro.selectBy().uid.nul().run();
    console.log(rows1);
    const rows2 = await UserQueryPro.selectBy().score.nul().run();
    console.log(rows2);
    const rows3 = await UserQueryPro.selectBy().role.nul().run();
    console.log(rows3);
    const rows4 = await UserQueryPro.selectBy().uid.nul().score.nul().and().role.nul().run();
    console.log(rows4);
});

test("selectBy not", async () => {
    const rows1 = await UserQueryPro.selectBy().uid.not.nul().run();
    console.log(rows1);
    const rows2 = await UserQueryPro.selectBy().uid.not.equalsTo(1).run();
    console.log(rows2);
    const rows3 = await UserQueryPro.selectBy().score.not.between(600, 700).run();
    console.log(rows3);
    const rows5 = await UserQueryPro.selectBy().uid.not.in(1, 2).run();
    console.log(rows5);
    const rows6 = await UserQueryPro
        .selectBy().uid.not.nul()
        .and().uid.not.equalsTo(1)
        .and().score.not.between(600, 700)
        .uid.not.in(1, 2)
        .run();
    console.log(rows6);
    const rows7 = await UserSettingQueryPro.selectBy().id.not.in(1, 2).run();
    console.log(rows7);
    const rows8 = await UserSettingQueryPro.selectBy().uid.not.in(1, 2).run();
    console.log(rows8);
    const rows9 = await UserSettingQueryPro.selectBy().kee.not.in(1, 2).run();
    console.log(rows9);
    const rows10 = await UserSettingQueryPro.selectBy().val.not.in(1, 2).run();
    console.log(rows10);
    const rows11 = await UserSettingQueryPro.selectBy().site.not.in(1, 2).run();
    console.log(rows11);
    const rows12 = await UserSettingQueryPro.selectBy().kee.not.like("%key%").run();
    console.log(rows12);
});

test("selectBy equals with or", async () => {
    const rows1 = await UserQueryPro.selectBy().uid.equalsTo(1).or().score.equalsTo(2).run();
    console.log(rows1);
    const rows2 = await UserQueryPro
        .selectBy().uid.equalsTo(1)
        .or(f => f.score.graterThan(600).and().role.not.nul()).run();
    console.log(rows2);
});

test("selectBy with limit", async () => {
    const rows1 = await UserSettingQueryPro.selectBy().uid.equalsTo(1).limit(10).run();
    expect(rows1 instanceof Array).toBe(true)
    console.log(rows1);
    const rows2 = await UserSettingQueryPro.selectBy().uid.equalsTo(1).runLimit1();
    expect(rows2 instanceof Array).toBe(false)
    console.log(rows2);
});

test("orderBy", async () => {
    const rows1 = await UserSettingQueryPro.orderBy().uid().asc().run();
    console.log(rows1);
    const rows2 = await UserSettingQueryPro.orderBy().uid().asc().kee().desc().run();
    console.log(rows2);
});

test("column limiter", async () => {
    const rows1 = await UserSettingQueryPro.selectBy().uid.equalsTo(1).columnLimiter().kee();
    console.log(rows1);
});

test("columns limiter", async () => {
    const rows1 = await UserSettingQueryPro.selectBy().kee.equalsTo("22").columnsLimiter().kee().val().run();
    console.log(rows1);
});

test("misc", async () => {
    const rows1 = await UserSettingQueryPro
        .leftJoinOn(UserQueryPro.joiner().uid(), UserSettingQueryPro.joiner().uid())
        .selectBy().uid.equalsTo("")
        .and().site.equalsTo("global")
        .andForeignField([UserQueryPro.foreignField().uid.equalsTo(1)])
        .orderBy().kee().desc().val().asc()
        .limit(10)
        .columnsLimiter().kee().val().uid()
        .run();
    console.log(rows1);
});
