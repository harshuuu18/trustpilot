import React,{useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import copy from './img/verify.png'
import copied from './img/verify (1).png'
import reviews from './review'

function Positive() {
    const [img,setImg] = useState(copy)
    return (
        <div className="positive">
            {
                reviews.map((i)=>{
                    return (
                        <CopyToClipboard text={i}>
                                <div className="container"  >
                                
                                    <img src={copy} onClick={(e)=>{
                                        e.target.src = copied
                                    }} alt="" />
                                </div>
                        </CopyToClipboard>
                    )
                })
            }
              

        </div>
    )
}

export default Positive
