import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";

import SpecCard from "pages/homePage/specCard";
import Search from "components/search";
import Button from "components/button";
import s from "pages/homePage/homepage.module.css";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const url = "https://jsonplaceholder.typicode.com/users";
  const token = "";

  useEffect(() => {
    const fetchSpecialization = async () => {
      const res = await axios.get(
        url
        //  {  headers: { "X-Auth-Token": token }  }
      );
      setData(res.data);
      setList(res.data);
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
  }

  const specList = list.map((item) => <SpecCard key={item.id} data={item} />);

  const range = 5;
  const pageList = specList.slice(
    (page - 1) * range,
    (page - 1) * range + range
  );

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
  );
}
