import React from "react";
import  ReactDOM  from "react-dom/client";

// React element
const heading = (<h1 className="test">
    Hi Jsx element</h1>);



const Title = () => <h1 className="test"> Hi Jsx Title</h1>;


// React functional component
const number = 10000;

const HeadingComponent = () =>{
return ( <>
            <Title/>
                {heading}
            <h1>{number}</h1>
            <h1>Hi Functional  component </h1>
        </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);