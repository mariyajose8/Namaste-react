import React from "react";
import  ReactDOM  from "react-dom/client";

{/* <div>Parent
    <div>child
        <h1>Grand child1</h1>
        <h2>Grand child2</h2>
    </div> 
</div> */}



const parent = 
React.createElement("div",{id:"Parent"},
React.createElement("div",{id:"Child"},
[React.createElement("h1",{id:"GrandChild1"}, "Hi Iam Grand child1 :)"),
React.createElement("h2",{id:"GrandChild2"}, "Hi Iam Grand child2")],
"I am child"),
"Hi I am Parent");




const header = React.createElement("h1",{
    id:"test"
},"I am in");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);