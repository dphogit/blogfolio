import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"

const LoadingScreen = () => {
  return (
    <Backdrop open>
      <CircularProgress color="primary" size={150} />
    </Backdrop>
  )
}

export default LoadingScreen
