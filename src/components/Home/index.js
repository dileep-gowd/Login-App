// Write your code here
import {Component} from 'react'

import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  userLogin = () => {
    // const {isLoggedIn} = this.state
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-cont">
        <div className="cont">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.userLogin} />
          ) : (
            <Login login={this.userLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
