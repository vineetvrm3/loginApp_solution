// Write your code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    return (
      <button className="button" onClick={this.onLogin} type="button">
        Login
      </button>
    )
  }
}

export default Login
