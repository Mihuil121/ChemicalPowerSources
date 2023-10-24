import React, { Component } from 'react'
import sty from './head.css'
import { ArrowBigLeftDash, } from 'lucide-react';


export default class Head extends Component {

    
    render() {
        
        return (
            <div style={sty}>
                <div className="head">
                    <ArrowBigLeftDash className='ArrowBigLeftDash'  />
                 </div>
            </div>
        )
    }

}
