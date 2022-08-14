import {render} from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const headerElement = document.querySelector(`.header-navigation`);
const contentElement = document.getElementById(`main-content`);

const rednerContent = (templateResult) => {
    render(templateResult, contentElement)
}

export const rednerNaviagtionMiddleware = (ctx,next) => {
    
    render(navigationView(ctx), headerElement);
    next();
};

export const renderContentMiddleware = (ctx,next) => {
    
    ctx.render = rednerContent;
    next();
};