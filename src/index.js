import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);


function App11() {
    return (
        <>
           
        <center>
          <footer>
             <div class="text-center p-2 fixed-bottom" >
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            </footer>
          </center>
            
        </>
        // {/* <h1>hello</h1> */ }
        




        );
}
ReactDOM.render(<App11 />, document.getElementById('footer'));
ReactDOM.render(<div><nav class="navbar navbar-light bg-light">
    {/* JSX هي لو حطيتي كود css مش رح تقبلو  بقدرش احكي div style="color:red  
    لهيك بنستخدم ال style={color:'red'}" */}
    <div class="container-fluid">
        {/* {{ console.log("this is a test "); }} */}
        {/* why this part not work */}
        <a class="navbar-brand">LOGO</a>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav></div>, document.getElementById('header'));
