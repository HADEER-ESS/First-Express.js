type AppConfig = {
    api : { baseUrl : string, retries: number},
    activeFeature : string[]
}

type DeepReadonly<T> = {
    readonly [P in keyof T] : T[P] extends object ?
    DeepReadonly<T[P]> :
    T[P]
}

const globalConfig : DeepReadonly<AppConfig> = {
    api : {
        baseUrl : "https://api.v2",
        retries : 3
    },
    activeFeature: ["new-dashboard"]
}

// globalConfig.api = {
//     baseUrl : "https://api.v3",
//     retries : 5
// }

// globalConfig.api.retries = 0

// globalConfig.activeFeature.push("beta-feature")

const instantConfig = {
    api : {
        baseUrl : "https://api.v2",
        retries : 3
    },
    activeFeature: ["new-dashboard"]
}as const  //now it won't be mutable for all its levels
