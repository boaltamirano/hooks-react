import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useStatePractice/CounterApp'
// import { CounterWithCustomHook } from './useStatePractice/CounterWithCustomHook'
// import { SimpleForm } from './useEffectPractice/SimpleForm'
import { FormWithCustomHook } from './useEffectPractice/FormWithCustomHook'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomHook />
  // </React.StrictMode>,
)
