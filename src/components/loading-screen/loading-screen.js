import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"

const LoadingScreen = () => {
  return (
    <Backdrop open>
      <CircularProgress size={100} />
    </Backdrop>
  )
}

export default LoadingScreen
