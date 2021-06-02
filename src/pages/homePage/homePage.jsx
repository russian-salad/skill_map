import React, { useEffect, useState } from "react";
import axios from "axios";

import SpecCard from "pages/homePage/specCard";
import Search from "components/search";
import Button from "components/button";
import s from "pages/homePage/homepage.module.css";
import Pagination from "components/pagination";

export default function HomePage() {
  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);


  const url = "https://jsonplaceholder.typicode.com/users";
  const token = "";

  useEffect( () => {
   const fetchSpecialization = async()=>{
    const res = await axios.get(url,
      //  {  headers: { "X-Auth-Token": token }  }
      )
        setData(res.data);
        setList(res.data);
      }
      fetchSpecialization()
}
  , []);

  const searchChange = (event) =>{
    setSearch(event.target.value)
    if(event.target.value === '' ) { setSearch(event.target.value);searchButtonClick()}
  }
  


  function searchButtonClick() {
    console.log(search);
    setList(
      data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }


  function handleSubmit(e) {
    e.preventDefault();
    searchButtonClick();
  }
  

  const specList = list.map((item) => <SpecCard key={item.id} data={item} />);

  return (
    <>
      <form onSubmit={handleSubmit} className={s.search}>
        <Search onChange={searchChange} />
        <Button handleClick={searchButtonClick} text="Найти" />
      </form>
      <div className={s.flex}>{specList}</div>
      <div className={s.flex}>
        <Pagination/>
      </div>
    </>
  );
}
