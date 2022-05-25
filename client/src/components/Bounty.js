import React from "react"

function Bounty(props){
    console.log(props.living)
    const { firstname, lastname, living, bounty, type, _id } = props
    return(
        <div className="bounty">
    
                <h1>First name: { firstname }</h1>
                <h1>Last name: { lastname }</h1>
                <h1>Living: { living }</h1>
                <h1>Bounty: { bounty }</h1>
                <h1>Type: { type }</h1>
                
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                
        </div>
    )
}

export default Bounty