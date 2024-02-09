import axios from "axios";
import {teacherdata,teachersucces,teachererror} from './techersType'

let techdataxios=()=>{
    return{
        type:teacherdata
    }
}   
let techsucces=(techs)=>{
    return{
        type:teachersucces,
        payload:techs
    }
}
let techdataerr=(err)=>{
    return{
        type:teachererror,
        payload:err
    }
}
export {techdataxios,techdataerr,techsucces}