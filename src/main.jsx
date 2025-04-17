import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    import {(store, persistedStore)} from "./redux/store";
    <PersistGate persistor="persist">
      <App />
    </PersistGate>
  </Provider>
);
