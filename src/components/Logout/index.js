/* eslint-disable react/button-has-type */
// Write your code here

import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout
