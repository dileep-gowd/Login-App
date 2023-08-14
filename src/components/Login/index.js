/* eslint-disable react/button-has-type */
// Write your code here

import './index.css'

const Login = props => {
  const {login} = props
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
