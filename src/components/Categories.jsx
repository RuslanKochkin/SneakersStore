import React from 'react';



function Categories({ value, onChangeCategory }){
    // создаем массив из всех категорий и сохраняем в переменную
    const categoryId = [
       require('../asset/img1/elephant1.jpeg'),
       require('../asset/img1/nike.jpeg'),
       require('../asset/img1/lacoste.jpeg'),
       require('../asset/img1/adidas.jpeg'),
       require('../asset/img1/polo.jpeg'),
       require('../asset/img1/puma.jpeg'),
       require('../asset/img1/ck.jpeg'),
       require('../asset/img1/gucci.jpeg'),
       require('../asset/img1/louis_vuitton.jpeg'),
       require('../asset/img1/ga.jpeg'),
       require('../asset/img1/boss.jpeg'),
       require('../asset/img1/hollister.jpeg'),
       require('../asset/img1/tommy.jpeg'),
      
      ];

    return (
      // создаем радительский элемент со своим классом
      <div className="categories">
      <ul>
        {/* У массива categories вызываем мап(позволяет один массив преобразовать в другой)
         и преобразуем массив в список элементов li и они рендерятся каждый под своим 
         индексом по очереди */}
        {categoryId.map((categoryName, i) => (
        <li key={i}  onClick={() => onChangeCategory(i)} 
        className={value === i ? 'active' : ''}>
    {i === 0 ? (
      <img
        src="https://miranimacii.ru/_ph/8/840659900.gif"
        alt = "my-imag"
      />
    ) : (
      <img src={categoryId[i]} alt = "my-imag" />
    )}
          </li>
        ))}
      </ul>
    </div>
    )
  }
  export default Categories;