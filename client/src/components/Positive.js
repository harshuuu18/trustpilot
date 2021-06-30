import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import copy from './img/verify.png'
import copied from './img/verify (1).png'
import reviews from './review'

function Positive() {
    
    return (
        <div className="positive">
            {
                reviews.map((i,id)=>{
                    return (
                        <CopyToClipboard text={i} key={id}>
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
