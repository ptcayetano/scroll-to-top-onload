import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

interface Props {
  history: any
}

export const ScrollToTopOnLoad: React.FunctionComponent<Props> = ({
  history
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)

    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })

    return () => {
      unlisten()
    }
  }, [history])

  return null
}

export default withRouter(ScrollToTopOnLoad)
