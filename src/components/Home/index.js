import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/index'
import Context from '../../ReactContext/index'
import './index.css'

class Register extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {name, topic} = value
          return (
            <>
              <Header />
              <div className="cont">
                <h1 className="h">Hello {name}</h1>
                <p className="p">{topic}</p>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="image"
                />
              </div>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Register
