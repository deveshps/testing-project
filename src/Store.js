import {configureStore} from "@reduxjs/toolkit"
import ReduxReducer from "./ReduxSlice";

export default configureStore({
    reducer:{
        items:ReduxReducer,
    }
})