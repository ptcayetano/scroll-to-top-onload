import React, { useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

export const ScrollToTopOnLoad: React.FunctionComponent = () => {
  const history = useHistory()

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
      console.log('Scroll to top', history)
    })
    return () => {
      unlisten()
    }
  }, [history])

  return null
}

export default withRouter(ScrollToTopOnLoad)
