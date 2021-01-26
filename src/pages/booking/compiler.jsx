/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react'
import SetDate from './component/setDate'
import SetTime from './component/setTime'
import SetType from './component/setType'
import UserInfo from './component/userInfo'
import ChooseTeam from './component/chooseTeam'
import FillPosition from './component/fillPosition'

const steps = [
  { component: <SetDate /> },
  { component: <SetTime /> },
  { component: <SetType /> },
  { component: <UserInfo /> },
  { component: <ChooseTeam /> },
  { component: <FillPosition /> },
  
]

const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

const App = () => (
  <div className='container'>
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
    <div className='container app-footer'>
      <h6>Press 'Enter' or click on progress bar for next step.</h6>
      Code is on{' '}
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
