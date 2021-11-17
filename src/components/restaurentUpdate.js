import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'

import {Link} from 'react-router-dom'

import List from './restaurentList'

export default function RestaurentUpdate(props) {

        const params=useParams();

        const [state, setstate] = useState({
            num:'',
            name:'',
            email:'',
            address:'',
            id:params.id

        })
    
    
    console.warn("hi this is params",params)
    useEffect(() => {
        
        
        takeapi();

    }, [])

   function  takeapi(){
        fetch(`http://localhost:3005/event`).then((data)=>{
            data.json().then((resp)=>{
                console.warn("update fetch data",resp,params);

                const len=resp.length;

                
                console.log('length ios',len);

                for(let i=0;i<len;i++)
                {
                    if(resp[i]._id===params.id)
                    {
                        var a=i;
                    }
                    
                }

                const b=resp[a]

               console.log("object data",b)


                setstate({...state,num:b.num,
                name:b.name,
                email:b.email,
                address:b.address,
                id:params.id
                })

                console.log("state data is ",state);

               })
            .catch((err)=>{
                console.warn("data is not availabel",err)
            })
        })
     }

   ///               Update
    function update(id){

        console.log("state is is ",id,state.name,state)

        fetch(`http://localhost:3005/ticket/${id}`,{
            method:"PUT",
            redirected: true
        ,
        
            headers:{'content-type':'application/json'}
        
        ,
           body:JSON.stringify(state)}

        ).then((data)=>{
            console.log("hello from update button",data)
        })
        .catch((err)=>{
            console.log("phasing error",err)
        })

     }
    return (
        <div className="container mt-4" style={{"textAlign":"center",}}>
            
            
           <label style={{"width":"200px"}}>Time in second</label> <input type='text' 
            value={state.num}
            style={{"width":"350px"}}

            onChange={(e)=>setstate({...state,num:e.target.value})}
            placeholder='No'/>
            <br/><br/>



            <label style={{"width":"200px"}}>type  name</label><input type='text' 

            onChange={(e)=>setstate({...state,name:e.target.value})}

            value={state.name}
            style={{"width":"350px"}}
            placeholder='name'/>
            <br/><br/>


            <label style={{"width":"200px"}}>type  email</label> <input type='text'

            onChange={(e)=>setstate({...state,email:e.target.value})}
            value={state.email}
            style={{"width":"350px"}}
            placeholder='email' />
            <br/><br/>


            <label style={{"width":"200px"}}>type  address</label> <input type='text'

            onChange={(e)=>setstate({...state,address:e.target.value})}
            value={state.address}
            style={{"width":"350px"}}
            placeholder='address' />

            <br/><br/>
            {console.log("this is return wala state",state.id)}
            <Link to='/list'>
            <button 

            onClick={()=>update(params.id)}

            style={{"width":"350px","marginLeft":"203px"}}
            className="btn btn-success">Update</button>
            </Link>

            <br/>
            <br/>
            <Link to='/list'>
            <button 

            

            style={{"width":"350px","marginLeft":"203px"}}
            className="btn btn-success">Go Back</button>
            </Link>
        </div>
    )
}
