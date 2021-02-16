package cloudself.cn.types

import cloudself.cn.query.QueryStructure

typealias CreateQuery<QUERY> = (queryStructure: QueryStructure) -> QUERY
typealias QueryStructureResolver = (queryStructure: QueryStructure) -> Any
typealias CreateQueryField<F> = (queryStructure: QueryStructure) -> F
