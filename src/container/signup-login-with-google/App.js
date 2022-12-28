import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'
import { gapi } from 'gapi-script'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login'

import obj from '../../config'
const { clientId } = obj

const App = ({referredBy}) => {
  const dispatch = useDispatch()
  const state = useSelector(({ all: { loginData } }) => loginData)
  console.log({state})
  const {
    all: { login },
  } = action

  const onSuccess = () => {
    const token = gapi?.auth2
      ?.getAuthInstance()
      ?.currentUser?.get()
      ?.getAuthResponse()?.id_token
     dispatch(login({token,referredBy}))
    // console.log({ token }, 'success')
  }

  const onFailure = () => {
    const token = gapi?.auth2
      ?.getAuthInstance()
      ?.currentUser?.get()
      ?.getAuthResponse()?.id_token
     dispatch(login({token}))
    // console.log({ token }, 'failure')
  }

  
  //  useGoogleOneTapLogin({
  //    onError,onSuccess,
  //    googleAccountConfigs: {
  //      client_id: clientId,
  //    },
  //  })

 
  // if logged in or token saved in device
  // it call onSuccess
  // useEffect(() => {
  //   gapi.load('client:auth2', () => {
  //     gapi.auth2.init({ clientId })
  //   })
  //   console.log('use effect ,gapi')
  // }, [])

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="continue with google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </>
  )
}

export default App
