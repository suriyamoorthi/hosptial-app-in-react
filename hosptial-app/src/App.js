import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../src/compoents/Routing";





import "./app.css";

function App() {
    return (
        <> 
           <Router>
            <Routing/> 
           </Router>
        </>
    );
}


export default App;