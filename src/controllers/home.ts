import { Request, Response, NextFunction } from "express";

/**
 * Root api route
 * @route GET /
 */

export const index = (req: Request, res: Response): void => {
    const animal = "alligator";
    // Send a text/html file back with the word 'alligator' repeated 1000 times
    res.send(animal.repeat(1000));
    // res.send("you viewed this page " + req.session.views["/"] + " times");
};
