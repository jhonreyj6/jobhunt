import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { store } from "./stores/store.tsx";
import "./helpers/axios.js";
import "flowbite";

// persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persist = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
