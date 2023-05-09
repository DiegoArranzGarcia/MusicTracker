import { NextFunction, Request, Response } from 'express';
import { ErrorFormatter, ValidationError, validationResult } from 'express-validator';

export const RequestValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const errorFormatter: ErrorFormatter = (error: ValidationError) => {
    // return { parameter: error, message: msg };
    return {
      // parameter: error.param,
      message: error.msg,
    };
  };

  const errors = validationResult(req).formatWith(errorFormatter).array({ onlyFirstError: true });
  if (errors.length > 0) {
    res.status(400).json({ errors: errors });
  }
  next();
};