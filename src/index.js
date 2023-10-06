//  сохроняем реакт код библиотеки в переменную
import React from "react";
// сохроняем в переменную реактдом код из библиотеки реактдом/с помощью этой библиотеки логика реакта приобразуется в html
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

// импортируем фунциональный компонент
import App from "./App";

import { store } from './redux/store'

// говорим- ReactDOM создай нам точку запуска createRoot нашего приложения
//  и оброщайся к вот этому (document.getElementById("root")) html документу:
const root = ReactDOM.createRoot(document.getElementById("root"));
// говорим- отобрази(от рендери) нам html который ты возьмеш-
root.render(
  // -вот отсюда:
  <HashRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </HashRouter>
);
