import { createStore } from "redux";
import { panierReducer } from "./panier/panierReducer";


export const store=createStore(panierReducer)