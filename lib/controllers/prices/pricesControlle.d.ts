import { PricesService } from "src/services/prices/prices.service";
import { Request, Response } from "express";
export declare class PricesController {
    private pricesService;
    constructor(pricesService: PricesService);
    save(req: Request, res: Response): Promise<void>;
    list(req: Request, res: Response): Promise<void>;
    averagePrices(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=pricesControlle.d.ts.map