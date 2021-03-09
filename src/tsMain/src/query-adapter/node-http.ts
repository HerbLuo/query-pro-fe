import { cloudself } from "../query-pro-fe";
import QueryStructure = cloudself.cn.query.QueryStructure;
import { QueryAdapter } from "../query-pro";
import fetch from "node-fetch"
import {stringifyKtDataObj} from "../kotlin-ir-bugfixer";

export const createNodeHttpQueryAdapter = (
    url: string,
): QueryAdapter => {
    return async (queryStructure: QueryStructure) => {
        const qsJson = stringifyKtDataObj(queryStructure);
        // console.log(qsJson);
        const result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: qsJson,
        }).then(r => r.json());
        if (!result) {
            return result;
        }
        if (!result.ok) {
            throw new Error(result);
        }
        return result.data;
    }
}
