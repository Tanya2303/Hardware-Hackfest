import React from 'react'
import { Ux4iotContextProvider, useTelemetry } from "ux4iot-react";

const UX4IOT_ADMIN_CONNECTION_STRING = '{process.env.CONN_STR}';

const IntruderCount = props => {
  const steps = useTelemetry('simulated-device', 'steps');
  return (<div>
    <div className="text-xl text-gray-800">Current Step Count: {steps}</div>
  </div>
  )
}
export default function IRTab() {
  return (
    <div>
      <div className='text-center text-6xl font-base text-white'>Home Security System</div>

      <div className="grid place-items-center py-6">

        <div className="bg-white rounded-lg shadow-xl w-72">
          <div className="py-4 text-center">
            <h1 className="text-xl text-gray-800">Alarm is <b>Armed</b></h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Disarm alarm</button>
          </div>
        </div>
      </div>

      <h1 className='text-3xl pl-36 text-white text-left'>Recent Data:</h1>

    </div>
  )
}
