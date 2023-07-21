import React from 'react'
import Navbart from './Navbart'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "../store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
    <h1><Navbart /></h1>
    <main>
        <Outlet />
    </main>
    </Provider>
    
  )
}

export default RootLayout