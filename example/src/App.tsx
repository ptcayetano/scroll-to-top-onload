import React from 'react'
import { useHistory } from 'react-router-dom'
import { ScrollToTopOnLoad } from 'scroll-to-top-onload'
import 'scroll-to-top-onload/dist/index.css'

const App = () => {
  const history = useHistory()

  return <ScrollToTopOnLoad history={history} />
}

export default App
