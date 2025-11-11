import { RequestHandler } from "express";
export const privateRequest: RequestHandler = (req, res,  next) => {

    if(req.headers.authorization) {
        const authorizationToken = req.headers.authorization.split(" ")[1];
        if(authorizationToken === "1234") {
            return next();
        }
    }

     res.status(401).json({error: "Precisa de acesso"})
}