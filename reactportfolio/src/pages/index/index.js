import React from "react";
import '../styles/index.css'
import history from "../../routes/history";

function Index(){
    return (
    <div className="indexBkg">
        <div className="indexBody">
            <div className="wrapper">
                <div className="typing-demo">
                    <h1>Hello World - My name is Melanie Ponce.</h1>
                </div>
            <button onClick={() => history.push("/Main")} className="noselect">Learn More!</button>

            </div>
        </div>
    </div>
    )
}

export default Index;