import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useStatePractice/CounterApp'
// import { CounterWithCustomHook } from './useStatePractice/CounterWithCustomHook'
// import { SimpleForm } from './useEffectPractice/SimpleForm'
// import { FormWithCustomHook } from './useEffectPractice/FormWithCustomHook'
// import { MultipleCustomHooks } from './exampleCustomHooks.jsx/MultipleCustomHooks'
// import { FocusSreen } from './useRefPractice/FocusSreen'
// import { Layout } from './useLayoutEffectPractice/Layout'
import { Memorize } from './memoPractice/Memorize'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Memorize />
  // </React.StrictMode>,
)
