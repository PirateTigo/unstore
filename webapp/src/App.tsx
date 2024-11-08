import { TrpcProvider } from '@share/component'
import { type FC } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

import './styles/global.scss'

export const App: FC = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App
