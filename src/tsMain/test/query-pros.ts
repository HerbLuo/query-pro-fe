import {UserPri} from "./model/UserPri";
import {UserPriSetting} from "./model/UserPriSetting";
import {QueryPro} from "../src/query-pro";

const UserQueryPro = new QueryPro<UserPri>("user_pri");
const UserSettingQueryPro = new QueryPro<UserPriSetting>("user_pri_setting");

// UserSettingQueryPro
//     .leftJoinOn(UserQueryPro.joiner().uid(), UserSettingQueryPro.joiner().uid())
//     .selectBy().uid.equalsTo("")
//     .and().site.equalsTo("global")
//     .andForeignField([UserQueryPro.foreignField().uid.equalsTo(1)])
//     .orderBy().kee.desc().value.asc()
//     .limit(10)
//     .columnsLimiter().kee().value().uid()
//     .run();

UserQueryPro.selectBy().run();
