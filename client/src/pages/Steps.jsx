import React from 'react'
import { Ux4iotContextProvider, useTelemetry } from "ux4iot-react";

const UX4IOT_ADMIN_CONNECTION_STRING = '{process.env.CONN_STR}';

const StepsCount = props => {
  const steps = useTelemetry('simulated-device', 'steps');
  return (<div>
    <div className="text-xl text-gray-800">Current Step Count: {steps}</div>
  </div>
  )
}

export default function Steps() {
  return (
    <div>
      <div className='text-center text-6xl font-base text-white'>Steps Count</div>

      <div className="grid place-items-center py-6">

        <div className="bg-white rounded-lg shadow-xl w-72">
          <div className="py-4 grid place-items-center">
            <StepsCount />
            <div className='flex flex-1 space-x-2'>
              <h1 className="text-xl text-gray-800">Enter New goal: </h1>
              <input placeholder='8' className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 w-12 p-1' />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Set Goal</button>
          </div>
        </div>
      </div>

      <h1 className='text-3xl pl-36 text-white text-left'>Recent Data:</h1>
    </div>
  )
}
