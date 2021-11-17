import React from 'react'

import { useEffect,useState } from 'react'

import {Table,Button} from 'react-bootstrap'

import {Link} from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';

import Countdown from 'react-countdown';

export default function RestaurentList(props) {

console.log("props",props.data)
    const [flag,setflag]=useState(2);

    const [time, settime] = useState({time:2})
    const [id, setid] = useState(0)
const [state,setstate]=useState([{}]);

function edit(){
    
}



function delet(id){
    setflag(3)

    setid(id)
    
    
    

}




function idtake(){


    fetch('http://localhost:3005/event/'+id,{
        method:'DELETE',
        data: {time: "time"},
        dataType: 'json',
        
    },).then((data)=>{


        data.json().then((resp)=>{

            

            alert(" data is  deleted",resp);
            console.log("state id is",id);
            console.log("time",time)
            
        })
    })
    

}

console.log("this is before return")
useEffect(() => {
    fetch(' http://localhost:3005/event').then((data)=>{
        data.json().then((resp)=>{
            console.log("this is useeffect",resp);
            setstate(resp)
            console.log("is this data of state ",state[0].name,state[0].num)
        })
    })
}, [])

return (
        
        <div>
            
            <Countdown date={Date.now() + 10000} />

            {
                state ? 

                <Table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">Time in second</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Operation</th>

    </tr>
  </thead>
  <tbody>
      {
          state.map((data)=>{
              return(
                <tr>
                <th scope="row">{data.num}sec</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>

                <td><Link to={"/update/"+data._id}><Button
                
                onClick={()=>edit()}
                className='btn btn primary' style={{"width":"70px"}}>edit  
                </Button>
                </Link>
                 
                

                          
                </td>
                

              </tr>
              
              )
          })
      }
    
    
  </tbody>
</Table> : ""
            }
            {
                flag===3 ?
               ( <div style={{"textAlign":"center"}}>

<input type='text' placeholder='time in second' onChange={(e)=>{settime({time:e.target.value})}} />
<br/>
<button className='btn btn-danger'

onClick={()=>idtake()}
>DELETE</button>
                </div>):""
            }

                    </div>
    )
}
