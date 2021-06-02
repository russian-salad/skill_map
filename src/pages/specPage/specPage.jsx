import React, { useEffect, useState } from "react";
import Accordion from "components/accordion";
import axios from "axios";

export default function (props) {
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };
    fetchSkills()
  }, []);

  return (
    <>
      <Accordion data={data}></Accordion>
    </>
  );
}
