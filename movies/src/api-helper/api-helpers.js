import axios from 'axios';
export const getAllMovies=async()=>{
const resp=await axios.get("http://localhost:5000/movies")
.catch(err=> console.log(err))

if (resp.status!== 200)
{
    return console.log("No Data")
}

const data=await resp.data;
return data;

}