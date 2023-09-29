import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Context from './ReactContext/index'

import Form from './components/Form'
import Home from './components/Home'
import NotFound from './components/NotFound'

import Register from './components/Register'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here

class App extends Component {
  state = {name: '', topic: '', homeShow: false, errorShow: false}

  nameChange = value => {
    this.setState({
      name: value,
    })
  }

  topicChange = value => {
    this.setState({
      topic: value,
    })
  }

  homeShowChange = () => {
    this.setState({
      homeShow: true,
    })
  }

  ErrorShow = () => {
    this.setState({
      errorShow: true,
    })
  }

  render() {
    const {name, topic, homeShow, errorShow} = this.state
    const comp = homeShow ? Home : Register
    console.log(comp)
    console.log(homeShow)

    return (
      <Context.Provider
        value={{
          name,
          topic,
          errorShow,

          homeShowChange: this.homeShowChange,
          nameChange: this.nameChange,
          topicChange: this.topicChange,
          ErrorShow: this.ErrorShow,
        }}
      >
        <Switch>
          <Route exact path="/" component={comp} />
          <Route exact path="/register" component={Form} />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
