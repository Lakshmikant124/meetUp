import Header from '../Header/index'
import Context from '../../ReactContext/index'

import './index.css'

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

const Form = props => {
  console.log(props)

  return (
    <Context.Consumer>
      {value => {
        const {
          name,
          nameChange,
          topicChange,
          homeShowChange,
          errorShow,
          ErrorShow,
        } = value

        const NameChange = event => {
          nameChange(event.target.value)
        }

        const TopicChange = event => {
          topicChange(event.target.value)
        }

        const Submission = event => {
          if (name === '') {
            ErrorShow()
          } else {
            event.preventDefault()
            console.log('ok')
            homeShowChange()
            const {history} = props
            history.replace('/')
          }
        }

        return (
          <>
            <Header />
            <div className="cont2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                className="image-cont"
                alt="website register"
              />
              <form className="form">
                <h1 className="h">Let us join</h1>
                <label className="label" htmlFor="user">
                  Name
                </label>

                <input
                  type="text"
                  id="user"
                  className="input"
                  placeholder="Your Name"
                  onChange={NameChange}
                />
                <label className="label" htmlFor="select">
                  TOPICS
                </label>

                <select
                  id="select"
                  onChange={TopicChange}
                  value="ARTS_AND_CULTURE"
                  className="input"
                >
                  {topicsList.map(eachItem => (
                    <option key={eachItem.id} value={eachItem.id}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button className="btn" onClick={Submission} type="submit">
                  Register Now
                </button>
                {errorShow && <p className="error">Please Enter Your Name</p>}
              </form>
            </div>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Form
