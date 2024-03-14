import React from "react";
import "./SortAndFilter.css"
import { useDispatch, useSelector } from "react-redux";
import { setChosenCategory } from "../../store/slices/productSlice";
const SortAndFilter = ({ title }) => {
  const dispatch = useDispatch()
  const optionsArr = useSelector(state => state.products.categories)

  const handleChange = (value) => {
    dispatch(setChosenCategory(value))
  }
  
  return (
    <div className="collection-sort">
      <label>{title}</label>
      <select onChange={(event) => handleChange(event.target.value)}>
        {optionsArr.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortAndFilter;
