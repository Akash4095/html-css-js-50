import React, { useState } from 'react'
import './style.css'

const ExpandingCards = () => {

    const [p1, setP1] = useState(false)
    const [p2, setP2] = useState(false)
    const [p3, setP3] = useState(false)
    const [p4, setP4] = useState(false)

    const callp1Func=()=>{
        setP1(!p1)
        setP2(false)
        setP3(false)
        setP4(false)
    }
    const callp2Func=()=>{
        setP1(false)
        setP2(!p2)
        setP3(false)
        setP4(false)
        
    }
    const callp3Func=()=>{
        setP1(false)
        setP2(false)
        setP3(!p3)
        setP4(false)
        
    }
    const callp4Func=()=>{
        setP1(false)
        setP2(false)
        setP3(false)
        setP4(!p4)
        
    }

    return (
        <div className='container'>
            <div className='panel1' style={{ width: p1 ? "500px" : "" , transition: p1 ? "0.7s" : "0.7s" }}  onClick={()=> callp1Func()}>
                <h3 style={{marginLeft: "20px" }}>Explore The World</h3>
            </div>
            <div className='panel2' style={{ width: "" }} style={{ width: p2 ? "500px" : "" , transition: p2 ? "0.7s" : "0.7s" }}  onClick={()=>callp2Func()}>
                <h3 style={{marginLeft: "20px" }}>Explore The World</h3>
            </div>
            <div className='panel3' style={{ width: "" }} style={{ width: p3 ? "500px" : "" , transition: p3 ? "0.7s" : "0.7s" }}  onClick={()=>callp3Func()}>
                <h3 style={{marginLeft: "20px" }}>Explore The World</h3>
            </div>
            <div className='panel4' style={{ width: "" }} style={{ width: p4 ? "500px" : "" , transition: p4 ? "0.7s" : "0.7s" }}  onClick={()=>callp4Func()}>
                <h3 style={{marginLeft: "20px" }}>Explore The World</h3>
            </div>
        </div>
    )
}

export default ExpandingCards;