import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { appReduser } from "./app/reduser";
import { authReduser } from "./Auth/reduser";



const rootReduser=combineReducers({
 auth: authReduser,
 app:appReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =legacy_createStore(rootReduser,composeEnhancers(applyMiddleware(thunk)));