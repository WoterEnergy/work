import './App.css';
import React from 'react';

class App extends React.Component {
  render () {
  return (
    <>
    <div className="App">
<input className='Login' placeholder='Write you Email'></input>
<input className='pswrd' placeholder='Write Password'></input>
<button onClick={this.handleClick} className='Btn'>Login</button>
    </div>
<div></div>
  </>
  );
  }
  handleClick () {
    console.log('click')
  }
}

export default App;
