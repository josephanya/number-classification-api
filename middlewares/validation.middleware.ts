import { Request, Response, NextFunction } from 'express';

export const validateNumberParam = (req: Request, res: Response, next: NextFunction) => {
    const inputNumber = req.query.number;
    if (!inputNumber) {
        res.status(400).json({
            number: "missing",
            error: "true",
            message: "no number provided"
        });
    }
    const num = Number(inputNumber);
    if (isNaN(num)) {
        res.status(400).json({
            number: inputNumber,
            error: "true",
        });
    }
    if (!Number.isInteger(num)) {
        res.status(400).json({
            number: num,
            error: "true",
            message: "number must be an integer"
        });
    }
    req.body.number = num;
    next();
};
