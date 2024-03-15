import React from 'react'
// import {Link} from 'react-router-dom'









export default function Navbar(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color : "black",
  //   backgroundColor : "aliceblue",
  // })
  // const [btnText, setBtnText] = useState("Light")

  
  
  // Function for changing Background color
 /* let changeBackground = () => {
  if(myStyle.color === "blue"){
    setMyStyle({
      color : "black",
      backgroundColor : "aliceblue"
    })
    document.body.style.backgroundColor = "aliceblue";
    document.body.style.color = "black";
    setBtnText("Light");
  }
  else{
    setMyStyle({
      color : "blue",
      backgroundColor : "black",
    })
    document.body.style.backgroundColor = "#2c0f4a";
    document.body.style.color = "blue";
    setBtnText("Dark");

  }
  }*/




  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-tabs" style={props.mode}>
            <div class="container-fluid" style={props.mode}>
              <a style={props.mode} class="navbar-brand" href="/">{props.title}</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav text-uppercase ml-auto">
                  <a style={props.mode} class="nav-link" aria-current="page" href="/">Home</a>
                  <a style={props.mode} class="nav-link" href="/about">About</a>
                  <li class="nav-item dropdown">
                    <a style={props.mode} class="nav-link dropdown-toggle" href="blogs.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Blogs
                    </a>
                    <ul class="dropdown-menu " data-bs-theme="dark">
                      <li><a style={props.mode} class="dropdown-item rounded-2 active" href="blogs.html">Technology</a></li>
                      <li><a style={props.mode} class="dropdown-item rounded-2" href="blogs.html">Web development</a></li>
                      <li><a style={props.mode} class="dropdown-item rounded-2" href="blogs.html">Programming</a></li>
                    </ul>
                  </li>
                  <a  style={props.mode} class="nav-link" aria-disabled="true" href="/textform">TextForm</a>
                  <a  style={props.mode} class="nav-link" aria-disabled="true" href="#Interests">{props.interest}</a>
                  <a style={props.mode} class="nav-link" aria-disabled="true" href="../myImages/myCV.pdf" download>Resume</a>
                </div>
              </div>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" /*onClick={changeBackground}*/ onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label"/*onClick={changeBackground}*/  onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
            </div>
            
      </nav>
    </div>
  )
}


//Setting Default Props
Navbar.defaultProps = {
    title : "Set Title",
    interest : "Your Interest"
}


