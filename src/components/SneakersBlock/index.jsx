import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice'

const typeNames = ["white", "black", "red", "blue", "green", "brown", "light","Dark"];

function SneakersBlock({ id, title, price, imageUrl, sizes, types }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find(obj => obj.id === id));

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0); // Добавляем состояние для активного цвета
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl: imageUrl[activeColorIndex], // Используем активный индекс цвета для выбора изображения
      type: typeNames[types[activeColorIndex]],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  }

  const changeActiveColor = (colorIndex) => {
    setActiveColorIndex(colorIndex); // Передаем индекс цвета
  }

  return (
    <div className="sneakers-block">
      <img
        className="sneakers-block__image"
        src={imageUrl[activeColorIndex]} // Используем активный индекс цвета для выбора изображения
        alt="sneakers"
      />
      <h4 className="sneakers-block__title">{title}</h4>
      <div className="sneakers-block__selector">
        <ul>
          <h4>"color"</h4>
          {types.map((color, colorIndex) => (
            <li
              key={color}
              onClick={() => {
                setActiveColorIndex(colorIndex);
                setActiveType(0); // Сброс активного типа при выборе цвета
              }}
              className={activeColorIndex === colorIndex ? "active" : ""}
            >
              {typeNames[color]}
            </li>
          ))}
        </ul>
        <ul>
          <h4>"size"</h4>
          {sizes.map((size, sizeIndex) => (
            <li
              key={size}
              onClick={() => setActiveSize(sizeIndex)}
              className={activeSize === sizeIndex ? "active" : ""}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="sneakers-block__bottom">
        <div className="sneakers-block__price">
          {price}
          {" 🇪🇺"}
        </div>
        <button onClick={onClickAdd} className="button button--outline button--add">
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>add 👟</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
}

export default SneakersBlock;

