import './App.css';
import React from 'react';

class App extends React.Component {
  render () {
    let className = 'menu';
    if (this.props.isActive) {
      className += ' menu-active';
    }
  return (
    <>
    <span className={className}></span>
    <div className="App">
      <div className='log-form'>
<h2>Email:</h2><input type="email" name="email"  className='Login' placeholder='Write you Email'></input>
<h2>Password:</h2><input type="password" name="password"  className='password' placeholder='Write Password'></input>

<button type="submit" onClick={this.handleClick} className='button'><span>Login</span></button>
</div>
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
