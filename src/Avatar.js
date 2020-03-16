import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';


    class Avatar extends Component{
       
        constructor(){
            super();
            this.state={
                name:"Avatar"
            }
        
        }
       
       nameChange(){
           this.setState({
               name:"Saru Manandhar"
           })
       }
       nameChangeDbl(){
        this.setState({
            name:"Avatar"
        })
    }
    
        render(){
            const AvatarListArray=[
                {
                    id:"1" ,
                    name:"A",
                    work:"developer"
                },
                {
                    id:"2" ,
                    name:"B",
                    work:"designer"
                },
                {
                    id:"3",
                    name:"C",
                    work:"designer"
                },
                {
                    id:"4",
                    name:"D",
                    work:"developer"
                },
        
               
            ]
        
            const arrayAvatar=AvatarListArray.map((avatarcard,i)=>{
                return(
                    <AvatarList id={AvatarListArray[i].id} name={AvatarListArray[i].name} work={AvatarListArray[i].work}/>
                )
            })
        
        
        
    
        return (
            <div className="mainpage">
            <h1>{this.state.name}</h1>
                {arrayAvatar}
            <button onClick={()=>{this.nameChange()}} onDoubleClick={()=>{this.nameChangeDbl()}}>Subscribe</button>
            </div>
    
        )
        }
    }
    
    


export default Avatar
