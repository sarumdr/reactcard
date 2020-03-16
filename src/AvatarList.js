import React from 'react'

const AvatarList = (props) => {
    return (
       
        <div className="avatarstyle ma2 bg-light-purple dib pa4 grow z-1">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
        <h1 className="">{props.name}</h1>
        <p>{props.work}</p>
    
        </div>
    )
}

export default AvatarList
