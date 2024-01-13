import React from "react";
import ReactDOM from "react-dom";

const Hello=()=>{
    let h1style = {textAlign:"center",border:"2px solid black"};
    return (
        <div className="hello">
            <h1 style={h1style}>Hello World</h1>
            <p>{2+3+4+5}</p>
            <p>How are you dear!</p>
        </div>
        
    )
    
}

{/* <Hello/> */}

ReactDOM.render(<Hello/>,document.getElementById("root"));