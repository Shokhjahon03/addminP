// import React from 'react'
// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';

import { Button, Input } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const Addteachers = ({setY,y,setaddoredit,addoredit,itemsID}) => {
  let defaultvalues={
    firstName:'',
    lastName:'',
    age:''
  }
  let [val,setVal]=useState({
    firstName:'',
    lastName:'',
    age:''
  })
  let additems=()=>{
    if (val.firstName!=='' && val.lastName!=='' && val.age!=='') {
      axios.post('http://localhost:3000/teachers',val)
      setVal(defaultvalues)
    setY(y+100)
    }
  }
  let edititemsvalues=async ()=>{
    let res=await axios.get(`http://localhost:3000/teachers/${itemsID}`)
        let idetmal=await res.data
        setVal(idetmal)
  }
  
  let breakk=()=>{
    setVal(defaultvalues)
    setaddoredit(true)
  }
  let itemput=async ()=>{
    axios.put(`http://localhost:3000/teachers/${itemsID}`,val)
    setY(y+100)
    setVal(defaultvalues)
    setaddoredit(true)
}

  useEffect(()=>{
    if (itemsID) {
      edititemsvalues()
    }
  },[itemsID])
  return (
    <div>
      
      <form className='w-full border p-6 mt-[30px]'>
        <h1>{addoredit?'Add Teachers':'Edit techers values'}</h1>
        <div className="w-full flex justify-around">
        <Input value={val.firstName} onChange={(e)=>setVal({firstName:e.target.value,lastName:val.lastName,age:val.age})} placeholder="Firstname…" variant="outlined" />
        <Input value={val.age} onChange={(e)=>setVal({firstName:val.firstName,lastName:val.lastName,age:e.target.value})} placeholder="Age…" variant="outlined" />
        </div>
        <div className="w-full flex justify-around">
        <Input value={val.lastName} onChange={(e)=>setVal({firstName:val.firstName,lastName:e.target.value,age:val.age})} placeholder="Lastname…" variant="outlined" />
        </div>
       <div className="w-full flex justify-between">
       <Button onClick={()=>{if(itemsID){
        return itemput()
       }else{
        return  additems()
       }}} size="md" variant="contained" color="primary">
          +
        </Button>
        <Button onClick={()=>breakk()} size="md" variant="contained" color="primary">
          -
        </Button>
       </div>
      </form>
    </div>
  )
}

export default Addteachers
