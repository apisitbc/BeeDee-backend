"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
class PricesService {
    constructor() { }
    async save(data) {
        try {
            const pricesCollection = database_1.database.dbHandle.collection("prices");
            await pricesCollection.deleteMany({});
            await pricesCollection.insertMany(data);
            console.log("Data loaded into MongoDB collection");
        }
        catch (error) {
            console.error("Error loading data into MongoDB:", error);
            throw error;
        }
    }
    async list() {
        try {
            const pricesCollection = database_1.database.dbHandle.collection("prices");
            return await pricesCollection.find().toArray();
        }
        catch (error) {
            console.error("Error retrieving prices:", error);
            throw error;
        }
    }
    async averagePrices() {
        try {
            const pricesCollection = database_1.database.dbHandle.collection("prices");
            const aggregationPipeline = [
                {
                    $group: {
                        _id: "$symbol",
                        averagePrice: { $avg: "$price" },
                    },
                },
            ];
            return await pricesCollection
                .aggregate(aggregationPipeline)
                .toArray();
        }
        catch (error) {
            console.error("Error calculating average prices:", error);
            throw error;
        }
    }
}
exports.PricesService = PricesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvcHJpY2VzL3ByaWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTBDO0FBRTFDLE1BQWEsYUFBYTtJQUN0QixnQkFBZSxDQUFDO0lBRWhCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBVztRQUNsQixJQUFJO1lBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEUsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFdEMsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ3REO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pELE1BQU0sS0FBSyxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDTixJQUFJO1lBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEUsT0FBTyxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pELE1BQU0sS0FBSyxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWE7UUFDZixJQUFJO1lBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsTUFBTSxtQkFBbUIsR0FBRztnQkFDeEI7b0JBQ0ksTUFBTSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxTQUFTO3dCQUNkLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7cUJBQ25DO2lCQUNKO2FBQ0osQ0FBQztZQUNGLE9BQU8sTUFBTSxnQkFBZ0I7aUJBQ3hCLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDOUIsT0FBTyxFQUFFLENBQUM7U0FFbEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUQsTUFBTSxLQUFLLENBQUM7U0FDZjtJQUNMLENBQUM7Q0FDSjtBQWhERCxzQ0FnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgUHJpY2VzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgYXN5bmMgc2F2ZShkYXRhOiBhbnlbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2VzQ29sbGVjdGlvbiA9IGRhdGFiYXNlLmRiSGFuZGxlLmNvbGxlY3Rpb24oXCJwcmljZXNcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IHByaWNlc0NvbGxlY3Rpb24uZGVsZXRlTWFueSh7fSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHByaWNlc0NvbGxlY3Rpb24uaW5zZXJ0TWFueShkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQgaW50byBNb25nb0RCIGNvbGxlY3Rpb25cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBkYXRhIGludG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBsaXN0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2VzQ29sbGVjdGlvbiA9IGRhdGFiYXNlLmRiSGFuZGxlLmNvbGxlY3Rpb24oXCJwcmljZXNcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwcmljZXNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmV0cmlldmluZyBwcmljZXM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgYXZlcmFnZVByaWNlcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlc0NvbGxlY3Rpb24gPSBkYXRhYmFzZS5kYkhhbmRsZS5jb2xsZWN0aW9uKFwicHJpY2VzXCIpO1xuICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25QaXBlbGluZSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICRncm91cDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBcIiRzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2VQcmljZTogeyAkYXZnOiBcIiRwcmljZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcHJpY2VzQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgIC5hZ2dyZWdhdGUoYWdncmVnYXRpb25QaXBlbGluZSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsY3VsYXRpbmcgYXZlcmFnZSBwcmljZXM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19