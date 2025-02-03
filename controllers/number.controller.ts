import { Request, Response, NextFunction } from 'express';
import NumberService from '../services/number.service';

class NumberController {
    private numberService: NumberService;

    constructor() {
        this.numberService = new NumberService();
    }

    checkNumber = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const number = req.body.number;
            const result = await this.numberService.analyzeNumber(number);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
};

export default new NumberController();