import React from 'react'
import { Ux4iotContextProvider, useTelemetry } from "ux4iot-react";

const UX4IOT_ADMIN_CONNECTION_STRING = '{process.env.CONN_STR}';

const ENVView = props => {
  const temperature = useTelemetry('simulated-device', 'temperature');
  const humidity = useTelemetry('simulated-device', 'humidity');
  const pressure = useTelemetry('simulated-device', 'pressure');
  return (<div>
    <div className="text-xl text-gray-800">Temperature(in C): {temperature}</div>
    <div className="text-xl text-gray-800">Humidity: {humidity}</div>
    <div className="text-xl text-gray-800">Pressure: {pressure}</div>
  </div>
  )
    ;
}

export default function ENVTab() {
  return (
    <div>
      <div className='text-center text-6xl font-base text-white'>Environment Info</div>

      <div className="grid place-items-center py-6">

        <div className="bg-white rounded-lg shadow-xl w-72">
          <div className="py-4 text-center">
            <Ux4iotContextProvider
              options={{ adminConnectionString: UX4IOT_ADMIN_CONNECTION_STRING }}
            >
              <ENVView />
            </Ux4iotContextProvider>
          </div>
        </div>
      </div>

      <div className='text-center text-2xl py-4 font-base text-white'>Amount of water required for plants(in ml): 320</div>

      <h1 className='text-3xl pl-36 text-white text-left'>Recent Data:</h1>

    </div >
  )
}
