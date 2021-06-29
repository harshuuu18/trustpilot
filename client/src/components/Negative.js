import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import copy from './img/verify.png'
import copied from './img/verify (1).png'
import link from './img/link.png'

function Negative() {
    const [ndata,setNdata] = useState([])
    useEffect(async ()=>{
        const url = await fetch('/read')
        const data = await url.json()
        
        await setNdata(data.row);
    },[ndata])
    const UpdateStatus = async (id)=>{
        const url = await fetch('/update',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({id:id})
        })
        const data = await url.json()
        console.log(data)

    }
    return (
        <React.Fragment>
        <div className="positive">
        
            {
                ndata.filter((f)=>{
                    return !f.status
                }).map((i)=>{
                    var nam = `${i.name}`.split(" ")[0]
                    
                    return(
                        <div className="n-container">
                            <div className="n1">
                                <h1 style={{overflow: "hidden"}}>{nam} </h1>
                                <button
                                onClick={()=>{
                                    UpdateStatus(i.id)
                                }}
                                >
                                    Done
                                </button>
                            </div>
                            <CopyToClipboard text={`Hi ${nam},
        
${i.reply}

Thanks & regards,
Team Ubuy`} >
                                <div className="n2">
                                    <img src={copy} alt="" onClick={(e)=>{
                                        e.target.src = copied
                                    }} />
                                </div>
                            </CopyToClipboard>
                            <div className="n2" onClick={()=>{
                                window.open(i.link)
                            }}>
                                <img src={link} alt="" />
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        </React.Fragment>
    )
}

export default Negative
