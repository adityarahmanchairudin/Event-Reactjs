import React from 'react';
import './style.css';

const Materi = (props)=> {

        return (
            <div className="wrapper">
                <div className="content">
                    <div className="gambarpaket">
                        <img src={props.img} className="imageslider"/>
                    </div>
        <p className="des">{props.des}</p>
        <p className="des">{props.harga}</p>
                </div>
            </div>
        );
    }


export default Materi;