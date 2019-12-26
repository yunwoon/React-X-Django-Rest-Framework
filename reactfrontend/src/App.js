import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav id="home" className="nav">
        <a className="nav_con" href="#home">Home</a>
        <a className="nav_con" href="#">Portfolio</a>
        <a className="nav_con" href="#">Process</a>
        <a className="nav_con" href="#">Curriculum</a>
        <a className="nav_con" href="#">Board</a>
        <a className="nav_con" href="#library">Library</a>
        <a className="nav_con" href="#contact">Contact</a>
      </nav>

      <header  className="App-header">
        <img className="fix_img3" src="./logo3.png"></img>
        <img className="fix_img2" src="./logo.png"></img>
      </header>

      <div>
        <img className="little_img" src = "./library.png"/>
        <h1 id="library" className="defont">Library</h1>
      </div>

      <div>
        <img className="fix_img" src="./intro1.jpg"></img>
        <img className="fix_img" src="./intro2.jpg"></img>
        <img className="fix_img" src="./intro3.jpg"></img>
      </div>
      <div>
          <img className="fix_img" src="./intro4.jpg"></img>
          <img className="fix_img" src="./intro5.jpg"></img>
          <img className="fix_img" src="./intro6.jpg"></img>
      </div>

      <div>
        <img className="little_img" src = "./contact.png"/>
        <h1 id="contact" className="defont">Contact</h1>
      </div>

      <div>
        <h4>그 외 상세한 커리큘럼은 페이스북 [멋쟁이사자처럼 at 한국산업기술대] 로 <br/>
        문의주시길 바랍니다
        </h4>
      </div>

    </div>
  );
}

export default App;