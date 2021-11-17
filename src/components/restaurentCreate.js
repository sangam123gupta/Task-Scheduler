import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
export default function RestaurentCreate(props) {

    console.log("hello from the Before useEffect")
    const [state, setstate] = useState({
       num:'',
        name:"",
        email:"",
        address:"",}

    )

    useEffect(() => {
        console.log("hello from the useEffect")

    }, [])
    function submitHandler(){

        fetch('http://localhost:3005/event',{
            method:"Post",
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(state)
        }).then((data)=>{
            data.json().then((resp)=>{
                console.log("post response is ", resp)
                props.history.push("/list")

            })
        })
        alert("hello from tyhe other side")
    }
    return (
        <div className='container' style={{"textAlign":"center"}}>
           {console.log("hello from the return")}
           <label style={{"width":"200px"}}>Time in second</label>
           <input type='text' 

           onChange={(e)=>setstate({...state,num:e.target.value})}
            
            placeholder="set timer in second"
            
            style={{"width":"400px"}}
            />
            <br/>
            <br/>
            <label style={{"width":"200px"}}>type  name</label>
            <input type='text'

            onChange={(e)=>setstate({...state,name:e.target.value})}
            placeholder="Name"
            style={{"width":"400px"}}
             />

            <br/>

            <br/>
            <label style={{"width":"200px"}}>type  email</label>
            
            <input type='text'

            onChange={(e)=>setstate({...state,email:e.target.value})}
             placeholder="Email" 
            style={{"width":"400px"}}
            />

            <br/>
            <br/>
            <label style={{"width":"200px"}}>type  address</label>

            <input type='text'

            

             onChange={(e)=>setstate({...state,address:e.target.value})}

            placeholder="Address"
            style={{"width":"400px"}}
            />
            <br/>
            <br/>
            <Link to='/list'>
            <button 
            onClick={()=>{submitHandler()}}
            className="btn btn-success"
            style={{"width":"400px","marginLeft":"203px"}}
            >Submit</button>
            </Link>
            <br/><br/>
            <Link to='/list'>
            <button 

            

            style={{"width":"350px","marginLeft":"203px"}}
            className="btn btn-success">Go Back</button>
            </Link>


        </div>
    )
}
