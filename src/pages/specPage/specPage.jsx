import React, { useEffect, useState } from "react";
import Accordion from "components/accordion";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function (props) {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };
    fetchSkills()
  }, []);
  useEffect(()=>{setLoading(!loading)},[data])
if(loading){
  return <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
    <CircularProgress
   size={150}
   thickness={2}    
  />
  </div>
}else{
    return (
    <>
      <Accordion data={data}></Accordion>
    </>
  );}
}
