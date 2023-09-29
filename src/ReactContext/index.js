import React from 'react'

const Context = React.createContext({
  name: '',
  topic: '',
  ErrorShow: () => {},
  errorShow: '',

  nameChange: () => {},
  topicChange: () => {},
  homeShowChange: () => {},
})

export default Context
