import {cloudself} from "./query-pro-fe";
import QueryProImpl = cloudself.cn.query.QueryProImpl;
import QueryField = cloudself.cn.query.QueryField;
import FinalQueryField = cloudself.cn.query.FinalQueryField;
import QueryFieldJs = cloudself.cn.QueryFieldJs;
import QueryKeywords = cloudself.cn.query.QueryKeywords;
import {debugLog} from "./debug-log";
import QueryWithNotKeywords = cloudself.cn.query.QueryWithNotKeywords;
import QueryIgnoreCaseKeywords = cloudself.cn.query.QueryIgnoreCaseKeywords;
import QueryOrderByKeywords = cloudself.cn.query.QueryOrderByKeywords;

function namerFixer(proto: Record<string, any>) {
    debugLog(proto);
    for (const key of Object.keys(proto)) {
        if (key.startsWith("_")) {
            continue;
        }
        const [rel] = key.split("_");
        if (!proto[rel]) {
            proto[rel] = proto[key];
        }
    }
}

export function fixAll() {
    namerFixer(QueryProImpl.prototype);
    namerFixer(FinalQueryField.prototype);
    namerFixer(QueryField.prototype);
    namerFixer(QueryFieldJs.prototype);
    namerFixer(QueryKeywords.prototype);
    namerFixer(QueryWithNotKeywords.prototype);
    namerFixer(QueryIgnoreCaseKeywords.prototype);
    namerFixer(QueryOrderByKeywords.prototype);
    debugLog("all fixed\n");
}
