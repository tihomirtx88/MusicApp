import * as authServise from "../services/authService.js";

export const authMiddleware = (ctx,next) =>{
  
    ctx.user = authServise.getUser();

    next();
}