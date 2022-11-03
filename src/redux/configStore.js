import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { carouselReducer } from "./reducer/carouselReducer";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer";
import { quanLyPhimReducer } from "./reducer/quanLyPhimReducer";
import { quanLyRapReducer } from "./reducer/quanLyRapReducer";

const rootReducer = combineReducers({
    // khai báo reducer
    carouselReducer,
    quanLyPhimReducer,
    quanLyRapReducer,
    quanLyNguoiDungReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk)); 