import React from "react";
import { Steps, Step } from "react-step-builder"
import UserInfo from './component/userInfo'
import SetDateTime from './component/setDateTime'
import Confirm from './component/confirm'
import Success from './component/success'

function App() {
  return (
    <div className="multistep">
      <Steps>
        <Step component={UserInfo} />
        <Step component={SetDateTime} />
        <Step component={Confirm} />
        <Step component={Success} />
      </Steps>
    </div>
  );
}

export default App;