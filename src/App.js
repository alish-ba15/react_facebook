import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="box">
        <div className="title-box">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" />
          <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="form-box">
          <form action="#">
            <input type="email" placeholder="Email address or phone number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log in</button>
            <div className="fog"><a href="#">Forgotten Password</a></div>

            <hr />

            <div className="Create">
              <button type="submit">Create new account</button>
            </div>
          </form>

          <div className="below-box">
            <p><a href="#">Create a page</a> for a celebrity, brand, or business.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
