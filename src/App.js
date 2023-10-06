
import React from 'react';

import { Routes, Route } from 'react-router-dom';
// притащили из папки components содержимый в Header jsx xml код с помощью функционального-компонента Header
import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NoteFound from './pages/NotFound';

// импортировали наш scss код с помощью библиотеки scss
import './scss/app.scss';
//создали контекст глобальную переменную
export const SearchContext = React.createContext('');


// функция которая возврашает html
function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      {/* обернули весь контекст в компонент провайдер который оповещает весь контекст что есть 
      две переменные searchValue, setSearchValue*/}
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
      {/* Header для всех строниц постоянный, 2. передаем данные поиска в Header */}
      <Header />
      <div className="content">
          <Routes>
            {/* Route перемещает по страницам в зависимости от path="/" и отображает element={<Home/>} */}
             <Route index element={<Home />} />
             <Route path="/cart" element={<Cart/>} />
             {/* path="*" - перекидывает если страница не найдена то  */}
             <Route path="*" element={<NoteFound />} />
          </Routes>
        </div>
        </SearchContext.Provider>
      </div>
  );
}
// экспорт хоть куда
export default App;
