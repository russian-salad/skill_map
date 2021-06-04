import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";

import SpecCard from "pages/homePage/specCard";
import Search from "components/search";
import Button from "components/button";
import s from "pages/homePage/homepage.module.css";
import { CircularProgress } from "@material-ui/core";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading] =useState(true)

  const url = "https://jsonplaceholder.typicode.com/users";
  const token = "";

  useEffect(() => {
    const fetchSpecialization = async () => {
       await axios.get(
        url
        //  {  headers: { "X-Auth-Token": token }  }
      ).then(res=>{
        setData(res.data)
        setList(res.data)
      })
      .then(()=>setLoading(false))
    };
    fetchSpecialization();
  }, []);

  const searchChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setList(data)
    }
  };

  function searchButtonClick() {
    setList(
      data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchButtonClick();
    setPage(1)
  }

  const specList = list.map((item) => <SpecCard key={item.id} data={item} />);

  const range = 2;
  const pageList = specList.slice(
    (page - 1) * range,
    (page - 1) * range + range
  );

 if(loading){
   return <>
    <form onSubmit={handleSubmit} className={s.search}>
        <Search onChange={searchChange} />
        <Button handleClick={searchButtonClick} text="Найти" />
      </form>
      <div className={s.flex}>
     <CircularProgress
      size={150}
      thickness={2}    
     />
      </div>
   </>
 }else{ 
   return (
    <>
      <form onSubmit={handleSubmit} className={s.search}>
        <Search onChange={searchChange} />
        <Button handleClick={searchButtonClick} text="Найти" />
      </form>
      <div className={s.flex}>{pageList}</div>
      <div className={s.flex}>
        <Pagination
        color='primary'
          onChange={(event, value) => setPage(value)}
          count={Math.ceil(specList.length / range)}
        />
      </div>
    </>
  )}
}
