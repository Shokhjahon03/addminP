import { Button, Input } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Edit = ({itemsID,setEdit,edit,setX,x}) => {
    let[values,setValues]=useState({firstName:'',lastName:'',group:'',age:''})

    let idititemsValues=async ()=>{
        let res=await axios.get(`http://localhost:3000/students/${itemsID}`)
        let idetmal=await res.data
        setValues(idetmal)
    }

    useEffect(()=>{
        idititemsValues()
    },[])

    let itemput=async ()=>{
        axios.put(`http://localhost:3000/students/${itemsID}`,values)
        setEdit(false)
        setX(x+100)
    }


  return (
    <div className=' w-full h-full fixed top-0 left-0  flex justify-center items-center'>
      <form className=' text-black w-[500px] h-[600px]  bg-white rounded-lg pt-[20px] pl-[20px] border'>
      <Input value={values.firstName} onChange={(e)=>setValues({firstName:e.target.value,lastName:values.lastName,group:values.group,age:values.age})} sx={{width:'400px',marginBottom:'20px'}} placeholder="Firstname…" variant="soft" />
      <Input value={values.lastName} onChange={(e)=>setValues({firstName:values.firstName,lastName:e.target.value,group:values.group,age:values.age})} sx={{width:'400px',marginBottom:'20px'}} placeholder="lastName…" variant="soft" />
      <Input value={values.group} onChange={(e)=>setValues({firstName:values.firstName,lastName:values.lastName,group:e.target.value,age:values.age})} sx={{width:'400px',marginBottom:'20px'}} placeholder="group…" variant="soft" />
      <Input value={values.age} onChange={(e)=>setValues({firstName:values.firstName,lastName:values.lastName,group:values.group,age:e.target.value})} sx={{width:'400px',marginBottom:'20px'}} placeholder="age…" variant="soft" />
      {/* <Input sx={{width:'400px',marginBottom:'20px'}} placeholder="Firstname…" variant="soft" /> */}
      <div className='flex gap-5'>
      <Button onClick={()=>itemput()} size="md" variant='outlined' color="primary">
          save
        </Button>
        <Button onClick={()=>setEdit(false  )} size="md" variant='outlined' color="primary">
          -
        </Button>
      </div>
      </form>
    </div>
  )
}

export default Edit
