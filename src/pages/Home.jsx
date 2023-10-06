import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import SneakersBlock from '../components/SneakersBlock/index'
import Skeleton from '../components/SneakersBlock/Skeleton'
import Pagination from '../components/Pagination/index'


import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

import { SearchContext } from "../App";
import { fetchSneakers } from "../redux/slices/sneakersSlice";


const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.sneakers);
  //если изменится filter возвращаем в categoryId или sort его данные
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  

  //следим за изменением контекста и возвращаем его значение
  const { searchValue } = React.useContext(SearchContext);
  // Хук Юстейт сохроняем в переменную items текущее состояние переменной setItems которая
  // (диструктуризация) используется для изменения состояния джейсона с красовками 


  const onChangeCategory = React.useCallback((id) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  }

  React.useEffect(() => {
    const getSneakers = async () => {
      
        //если у свойства будет изначально минус то удали его
        const sortBy = sort.sortProperty.replace('-', '');
        //проверяй если в сортировке есть минус то сортировка по возрастанию или по убыванию
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        //если categoryId больше нуля, то формируется строка category, которая содержит categoryId, иначе строка остается пустой.
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        //если searchValue существует и содержит какое-либо значение, то будет создана строка "&search=значение_searchValue", в противном случае, будет создана пустая строка "".
        const search = searchValue ? `&search=${searchValue}` : '';
   
        dispatch(fetchSneakers({
          sortBy,
          order,
          category,
          search,
          currentPage
        })); 

      window.scrollTo(0, 0);
    };

    getSneakers();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const sneakers = items.map((obj) => <SneakersBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        {/* Передаем родителю Home категорию и функцию которая будет менять эту категорию и передавать в useState отсортированные  пиццы по категориям */}
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        {/* setSortType(i)-функция которая делает изменения в сортировке */}
        <Sort />
      </div>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>An error occurred while loading data</h2>
          <p>Didn't manage to get the sneakers</p>
        </div>
      ) : (
      <div className="content__items">{status === 'Loading' ? skeletons : sneakers}</div>
      )}
      {/* Метод onChangePage который возврошает не обьект а только число номер страницы */}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />

    </div>
  );
};

export default Home;
//color