import React, { useEffect, useState } from 'react';
import { Actions } from '../components';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Actions2 from '../components/Actions2';
import axios from 'axios';
import Addteachers from '../components/addteachers';


import {techdataerr,techdataxios,techsucces} from '../redux/teach/teachersAction'
import { useDispatch, useSelector } from 'react-redux';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];







const Teachers = () => {
  // const dispatch = useDispatch();
  // const { loading, users, error } = useSelector((state) => state.user);

  let [y,setY]=useState(0)
  let [rows,setRows] = useState([]) ;
  let [addtech,setadd]=useState(true)
  let [addoredit,setaddoredit]=useState(true)
  let[itemsID,setItemsId]=useState('')

  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  // let axiosteachers=async ()=>{
  //   try {
  //    let res=await axios.get('http://localhost:3000/teachers')
  //    let datas=await res.data
  //    setRows(datas)
  //   } catch (error) {
  //    console.log(error);
  //   }
  //  }
  // ..................................

  const fetchUsers = async () => {
    dispatch(techdataxios());
    try {
      const res = await axios.get('http://localhost:3000/teachers');
      const data = await res.data;
      setY(y+100)
      dispatch(techsucces(data));
    } catch (error) {
      dispatch(techdataerr(error.message));
    }
  };

 


  // ..................................
   let editetitemsID=(id)=>{
    setItemsId(id)
    

    
  }
  let daletItimest=async (id)=>{
    if (confirm('rostan shu iteemni uchirishni xohlaysizmi')) {
      axios.delete(`http://localhost:3000/teachers/${id}`)
    // fetchStudents();
    setY(y+100)
    // alert('item uchirildi')
    }
  }
  // setRows(state)
  useEffect(()=>{
    // setRows(state)
    // fetchUsers()
  },[])
 
   useEffect(()=>{
    // axiosteachers()
    setRows(state)

    fetchUsers()
  },[y])

  

const mappedRows = rows.map((row) => ({ ...row, actions: <Actions2 /> }));
  return (
    <div>
      <h1>Teachers</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedRows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Actions2 editetitemsID={editetitemsID} setaddoredit={setaddoredit} daletItimest={daletItimest} id={row.id} />
                </TableCell>
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button sx={{marginTop:'40px'}}  size="md" variant='outlined' color="primary">
          ADD
        </Button> */}
        {addtech?<Addteachers itemsID={itemsID} setaddoredit={setaddoredit} addoredit={addoredit} setY={setY} y={y}/>:''}
    </div>
  );
};

export default Teachers;
