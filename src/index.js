import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return(
    <div>
    <label htmlFor="name" className="label">Enter Email</label>
    <input id="name" type="text" />
    <button style={{backgroundColor:'red',color:'white'}}>Submit</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root')); // createRoot(container!) if you use TypeScript
root.render(  <App />);
