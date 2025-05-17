import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



export default function Tag() {
  const [tag, setTag] = useState("car");
  const {loading, gif, fetchApi} =useGif(tag);
  
  function generateGif(){
    fetchApi();
  }
  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h3 className="mt-[15px] text-2xl underline font-bold">{tag.charAt(0).toUpperCase()+tag.slice(1)}</h3>
      {loading ? <Spinner/> : <img src={gif} width="450" />}
      <input 
      className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      value={tag}
      onChange={changeHandler}/>
      <button  className=" w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]" onClick={generateGif}>Generate</button>
    </div>
  );
}
