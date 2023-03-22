import { legacy_createStore as createStore } from "redux";
// import logger from "react-logger";
import { rootReducer } from "./rootReducer";


export const store = createStore(rootReducer);
