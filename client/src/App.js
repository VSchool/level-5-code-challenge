import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"

export default function App(){
    const [bounties, setBounties] = useState([])
    
    function getBounties(){
        // 1. Make an axios request on the front end to get the list of bounties - frontend
        
    }

    useEffect(() => {
            getBounties()
        }, [])
    
    return(
        <div>
            <div className="bounty-container">
            
                { 
                    bounties.map( bounty => 
                        <Bounty 
                            {...bounty} 
                            key={bounty._id}
                            />) 
                }
            </div>
        </div>
    )
}
