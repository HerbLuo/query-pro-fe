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

export function fixOverride(proto: any, key: string, value: any) {
    for (const k of Object.keys(proto)) {
        if (k.startsWith(key)) {
            proto[k] = value;
        }
    }
}

export function access<T, K extends keyof T>(obj: T, key: K): T[K] {
    const val = obj[key];
    if (val) {
        return val;
    }
    return (obj as any)["_" + key];
}

export function mergeObj<A, B>(oldObj: A, newObj: B): A & B {
    return {...remove_(oldObj), ...remove_(newObj)} as any;
}

const KtClasses: any[] = [];
function resolvePackage(pkg: any) {
    if (!pkg) {
        return;
    }
    for (const clazzOrPackage of Object.values(pkg)) {
        if ((clazzOrPackage as any)["$metadata$"]) {
            KtClasses.push((clazzOrPackage as any).prototype)
        } else {
            resolvePackage(clazzOrPackage);
        }
    }
}
resolvePackage(cloudself.cn);

const remove_ = (obj: any): any => {
    if (obj === null || obj === undefined || typeof obj === "string" ||
        typeof obj === "number" || typeof obj === "boolean"
    ) {
        return obj;
    }
    if (obj instanceof Array) {
        return obj.map(it => remove_(it));
    }

    const proto = Reflect.getPrototypeOf(obj);
    if (!proto) {
        return obj;
    }

    const areKtClass = KtClasses.includes(proto);
    const keys = Object.entries(Object.getOwnPropertyDescriptors(proto))
        .filter(([k, d]) => {
            if (k === "constructor") {
                return false;
            }
            return d.enumerable === !areKtClass;
        }).map(([k]) => k);

    const newObj: Record<string, unknown> = {};
    for (const key of keys) {
        const val = (obj as any)[key];
        if (val !== null && val !== undefined && typeof val === "object") {
            newObj[key] = remove_(val);
        } else {
            newObj[key] = val;
        }
    }
    return newObj;
}

export function stringifyKtDataObj(obj: {}): string {
    return JSON.stringify(remove_(obj));
}
