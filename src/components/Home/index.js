// Write your code here
import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onLogin = () => {
    this.setState({isLogin: true})
  }

  onLogout = () => {
    this.setState({isLogin: false})
  }

  render() {
    const {isLogin} = this.state
    const message = isLogin ? 'Welcome User' : 'Please Login'
    return (
      <div className="home">
        <Message message={message} />
        {isLogin ? <Logout /> : <Login />}
      </div>
    )
  }
}

export default Home
