import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Loginpage=()=>{

    const Gedentail=[{
        id:1,
        userName:"rahul",
        password:"rahul01"
    },
    {
        id:2,
        userName:"santhosh",
        password:"siva0118"
    },
    {
        id:3,
        userName:"virat",
        password:"virat18"
    },
    {
        id:4,
        userName:"rohit",
        password:"rohit45"
    },
    {
        id:5,
        userName:"dhoni",
        password:"dhoni07"
    },
]

const[name,setName]=useState("")
const[password,setPassword]=useState("")
const[boolean,setBoolean]=useState(false)
const[arrObj,setObj]=useState(Gedentail)
const[boolean2,setBoolean2]=useState(false)


const handle=(e)=>{
    if(e.target.name==="Uname"){
        setName(e.target.value)
    }
    else if(e.target.name==="password"){
        setPassword(e.target.value)
    }
}


let nav=useNavigate()
const Check=(e)=>{
    e.preventDefault()
    
    if(name==""  || password==""){
        setBoolean(true)
    }
    else{
        let x=false;
        let y=false;
    
    let filter=arrObj.some((e)=>{
        console.log(e);
        return e.userName===name?e.password===password ? x=true:y=true:""
      })
      if(x===false && y===false){
        alert("Wrong UserName")
      }
      else if(y===true){
        alert("Wrong Password")
      }
      else{
        alert("Success")
        nav('/homepage')
        
      }


    }
  
}

    return <div className="section" >
        <div style={{textAlign:"center",paddingTop:"100px"}}>
            <h1 style={{color:"blue",fontSize:"35px"}}>Login</h1>
        <form onSubmit={Check}>
            <label style={{fontSize:"20px"}}>UserName:</label>&nbsp;&nbsp;
            <input type="text" name="Uname" onChange={handle} style={{padding:"5px 30px"}}></input><br></br><br></br>
            {name=="" && boolean?
                <p>Enter UserName</p>
            :""}
           
            <label style={{fontSize:"20px"}}>Password:</label>&nbsp;&nbsp;&nbsp;
            <input type="password" name="password" onChange={handle} style={{padding:"5px 30px"}}></input><br></br><br></br>
            {password=="" && boolean ?
                <p>Enter Password</p>
            :""}
            <button style={{padding:"8px 20px", color:"white",backgroundColor:"blue",border:"none",borderRadius:"5px"}}>Login</button>
        </form>
        </div>
    </div>
}

export default Loginpage