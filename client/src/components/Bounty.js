import React from "react"

function Bounty(props){
    const { firstname, lastname, living, bounty, type, _id } = props
    return(
        <div style={{
            border: "2px solid #000", 
            display: "inline-block", 
            margin: "0px 5px", 
            padding: "10px"
        }}>
            <h1>{firstname} {lastname}</h1>
            <h2>Living: { living }</h2>
            <h2>Bounty: { bounty }</h2>
            <h2>Type: { type }</h2>
        </div>
    )
}

export default Bounty