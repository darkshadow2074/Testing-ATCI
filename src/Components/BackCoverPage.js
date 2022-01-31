import React from "react";

export default function BackCoverPage(){
    return(
        <div style={{backgroundColor:'#460074',height:'100vh',color:'#fff'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{width:'50%',}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{margin:10,padding:10, width:'33%'}}>
                <img src="/user2.png" style={{width:'100%', marginBottom:10}}></img>
                    <p style={{textAlign:'start'}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                    </p>
                </div>
                <div style={{margin:10,padding:10,width:'33%'}}>
                <img src="/user2.png" style={{width:'100%', marginBottom:10}}></img>
                    <p style={{textAlign:'start'}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                    </p>
                </div>
                <div style={{margin:10,padding:10,width:'33%'}}>
                    <img src="/user2.png" style={{width:'100%', marginBottom:10}}></img>
                    <p style={{textAlign:'start'}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                    </p>
                </div>
                </div>
            </div>
        </div>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center',margin:20}}>
            <div>
                <p style={{textAlign:'start', margin:20,lineHeight:1}}>
                    <span style={{fontSize:30,fontWeight:'bold'}}>The Book of</span> <br></br> <span style={{fontSize:60, fontWeight:'bolder'}}>BRILLIANCE</span>
                </p>
            </div>
            <div>
            <p style={{textAlign:'start', margin:20,lineHeight:1}}>
                BAR
            </p>
            </div>
        </div>
        </div>
    )
}