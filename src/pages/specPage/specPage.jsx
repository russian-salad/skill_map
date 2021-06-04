import React, { useEffect, useState } from "react";
import Accordion from "components/accordion";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function SpecializationPage (props) {

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    setLoading(true)
    const fetchSkills = async () => {
      await axios.get(url)
      .then(res=>setData(res.data))
      .then(()=>setLoading(false));
      
    };
    fetchSkills()
  }, []);
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
