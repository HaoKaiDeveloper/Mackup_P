"use client";

import classes from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { SearchParams } from "@/types";

interface PropsType {
  setQueryObj: React.Dispatch<React.SetStateAction<SearchParams>>;
}

const SearchBar = ({ setQueryObj }: PropsType) => {
  function handleSetQuery(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setQueryObj((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className={classes.main}>
      <select
        className={classes.select}
        name="category"
        onChange={handleSetQuery}
      >
        <option value="">All Product</option>
        <option value="Perfume">Perfume</option>
        <option value="Body Lotion">Body Lotion</option>
        <option value="Room Diffuse">Room Diffuser</option>
        <option value="Fragrance Candle"> Fragrance Candle</option>
      </select>
      <div className={classes.radio}>
        <label htmlFor="low">
          Low to High
          <input
            type="radio"
            id="low"
            name="sort"
            value="LowToHigh"
            onChange={handleSetQuery}
          />
        </label>
        <label htmlFor="height">
          High to Low
          <input
            type="radio"
            id="height"
            name="sort"
            value="HighToLow"
            onChange={handleSetQuery}
          />
        </label>
      </div>
      <div className={classes.search}>
        <label htmlFor="search">
          <input
            type="text"
            placeholder="search"
            name="search"
            onChange={handleSetQuery}
          />
        </label>

        <p>
          <BsSearch />
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
