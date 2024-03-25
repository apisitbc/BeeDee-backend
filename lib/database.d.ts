import { Db, MongoClient } from "mongodb";
export declare let database: {
    dbClient: MongoClient;
    dbHandle: Db;
};
export declare function connectToMongoDB(): Promise<void>;
//# sourceMappingURL=database.d.ts.map