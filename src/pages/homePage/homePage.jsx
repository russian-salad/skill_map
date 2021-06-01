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

  useEffect(async () => {
    await axios
      .get(url, {
        // headers: { "X-Auth-Token": token },
        dataType: "json",
        type: "GET",
      })
      .then((response) => {
        setData(response.data);
        setList(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const searchChange = (event) => setSearch(event.target.value);


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
  }
  

  const specList = list.map((item) => <SpecCard key={item.id} data={item} />);

  return (
    <>
      <form onSubmit={handleSubmit} className={s.search}>
        <Search onChange={searchChange} />
        <Button handleClick={searchButtonClick} text="Найти" />
      </form>
      <div className={s.flex}>{specList}</div>
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <Pagination />
      </div>
    </>
  );
}
