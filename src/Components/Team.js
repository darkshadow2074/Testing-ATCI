import React from "react";

export default function Team(){
    const heigth = window.innerHeight
    const employees=(employeename, designation)=>{
        
        return (
            <div style={{margin:20,display:'inline-block', width:'20%'}}>
            <div >
                <img style={{width:100 , height: 100}} src='/user.png'></img>
            </div>
             <p>{employeename}</p>
            <p>{designation}</p> 
        </div>
        )
        
    }
    return(
        <div >
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                <div style={{width:'20%' ,  height:heigth*0.95}} >
                    <p style={{fontSize:'2em', textAlign:'left'}}>
                        Employees celebrating 20 years with Accenture
                    </p>
                    <img src="/20.png" style={{width:"20%", position:'absolute', bottom:0, left:0}}></img>
                </div>
                <div style={{width:'50%',  height:heigth*0.95, alignItems:'flex-start'}} >
                    <div style={{display:'flex'}}>
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    </div>
                    <div style={{display:'flex'}}>
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    </div>
                    <div style={{display:'flex'}}>
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    {employees("Employee Name","Designation")}
                    </div>
                </div>
            </div>
        </div>
    )
}