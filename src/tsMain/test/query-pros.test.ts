import {UserPri} from "./model/UserPri";
import {UserPriSetting} from "./model/UserPriSetting";
import {QueryPro} from "../src/query-pro";

const UserQueryPro = new QueryPro<UserPri>("user_pri");
const UserSettingQueryPro = new QueryPro<UserPriSetting>("user_pri_setting");

test("selectBy", async () => {
    UserQueryPro.selectBy().run();
    UserSettingQueryPro.selectBy().run();
});

test("selectBy equals", async () => {
    UserQueryPro.selectBy().uid.equalsTo(1).run();
    UserSettingQueryPro.selectBy().uid.equalsTo(1).run();
    UserQueryPro.selectBy().uid.equalsTo(1).score.equalsTo(2).run();
    UserQueryPro.selectBy().uid.equalsTo(1).and().score.equalsTo(2).run();
});

test("selectBy equals with or", async () => {
    UserQueryPro.selectBy().uid.equalsTo(1).or().score.equalsTo(2).run();
});



// UserSettingQueryPro
//     .leftJoinOn(UserQueryPro.joiner().uid(), UserSettingQueryPro.joiner().uid())
//     .selectBy().uid.equalsTo("")
//     .and().site.equalsTo("global")
//     .andForeignField([UserQueryPro.foreignField().uid.equalsTo(1)])
//     .orderBy().kee.desc().value.asc()
//     .limit(10)
//     .columnsLimiter().kee().value().uid()
//     .run();

