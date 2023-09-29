import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/index'

import './index.css'

class Register extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="cont">
          <h1 className="h">Welcome to Meetup</h1>
          <p className="p">Please register for the topic</p>
          <Link to="/register">
            <button className="btn" type="button">
              Register
            </button>
          </Link>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="meetup"
            className="image"
          />
        </div>
      </>
    )
  }
}

export default Register
