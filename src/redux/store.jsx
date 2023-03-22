import { compose, createstore, applyMiddleware } from "redux";
import logger from "react-logger";
import { rootReducer } from "./rootReducer";

const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(middlewares));

export const store = createstore(rootReducer, undefined, composedEnhancers);