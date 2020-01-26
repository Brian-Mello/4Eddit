import React, { Fragment } from "react";
import { Loading, Triangle } from "../../style/styled";

function Loader ( ) {
    return (
        <Fragment>   
            <svg width="150" height="150" viewBox="0 0 40 60">
                <Triangle 
                    fill="none" 
                    stroke="black" 
                    stroke-width="1"
                    points="16,1 32,32 1,32"
                />
                <Loading x="0" y="45" fill="black">Loading...</Loading>
            </svg>
        </Fragment>
    )
}

export default Loader;