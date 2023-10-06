import React from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";

import styles from './Search.module.scss'

const testDebounce = debounce(() => {
  
})


const Search = () => {
const [value, setValue] = React.useState('');

  //с помощью хука в веб контекст вытаскиваем переменную SearchContext
  const {setSearchValue} = React.useContext(SearchContext);
 
  //сохроняем логику реакта в переменной inputRef
  const inputRef = React.useRef();

    //функция фокусирует курсор в поиске 
    const onClickClear = () => {
      setSearchValue('');
      setValue('');
      inputRef.current.focus()
    };

  //useCallback создает функцию и возврощает в testDebounce 
  const updateSearchValue = React.useCallback (
  debounce((str) => {
    setSearchValue(str);
  }, 500),[],
  );

  const onChangeInput = event => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

    return (
        <div className={styles.root}>
          {/* //Часы */}
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={styles.icon}
          id="Smart_Watch41"
          enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" >
            <g>
            <path d="M27,13h-1V9c0-1.65-1.35-3-3-3h-1.18H10.18H9C7.35,6,6,7.35,6,9v14c0,1.65,1.35,3,3,3h1.18h11.64H23    c1.65,0,3-1.35,3-3v-4h1c0.5527,0,1-0.4478,1-1v-4C28,13.4478,27.5527,13,27,13z M17,20c-1.02,0-1.97-0.31-2.76-0.82l-2.53,2.53    C11.51,21.9,11.26,22,11,22s-0.51-0.1-0.71-0.29c-0.39-0.39-0.39-1.03,0-1.42l2.53-2.53C12.31,16.97,12,16.02,12,15    c0-2.76,2.24-5,5-5s5,2.24,5,5S19.76,20,17,20z" 
            fill="#4e7559"/>
            <path d="M19.38,4h2.04l-0.44-2.2C20.89,1.34,20.48,1,20,1h-8c-0.48,0-0.89,0.34-0.98,0.8L10.58,4h2.04H19.38z" 
            fill="#53766f"/>
            <path d="M12.62,28h-2.04l0.44,2.2c0.09,0.46,0.5,0.8,0.98,0.8h8c0.48,0,0.89-0.34,0.98-0.8l0.44-2.2h-2.04H12.62z" 
            fill="#53766f"/>
            <path d="M17,12c-1.65,0-3,1.35-3,3c0,0.82,0.34,1.58,0.88,2.12C15.42,17.66,16.18,18,17,18c1.65,0,3-1.35,3-3    C20,13.35,18.65,12,17,12z" 
            fill="#0677f8"/>
            </g>
          </svg>  
          <input
          //передаем в инпут переменную inputRef
            ref = {inputRef}
            value = {value}
            onChange={onChangeInput}
            className={styles.input} 
            placeholder="Search Art..." />
            {value && (
            <svg
            //передаем функцию фокуса
              onClick={onClickClear}
              className={styles.clearIcon} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
              <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
              <path d="M0 0h48v48H0z" 
              fill="none"/>
            </svg>
            )}
         </div>
            
    )
    
}
export default Search;