import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistconfig = {
  //oggetto di configurazione che conterrà i miei dati
  storage: localStorage,
  key: "root",
};

const persistedReducer = persistReducer(persistconfig, store); //renderemmo persistente il nostro reducer unaendo store reducer a localstorage persistconfig

const store = configureStore({
  //reducer di base
  reducer: mainReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
