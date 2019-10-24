import React, { useState } from 'react'
import Context from './context'
import { ably } from '../env'

const HUB_STREAM = '[product:ably-flightradar24/heathrow-flights]flights:plane'

export default ApplicationContext = ({ children }) => {
  const [arrivals, setArrivalsData] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  const [departures, setDeparturesData] = useState(null)

  const departureListener = message => {
    console.log('Still Listening Departure', message.data)
    if (message.data) {
      console.log('Current Departure  State', departures)
      setIsLoading(false)
      setDeparturesData(message.data)
    }
  }

  const arrivalListener = message => {
    console.log('Still Listening', message.data)
    if (message.data) {
      console.log('Current Arrival State', arrivals)
      setIsLoading(false)
      setArrivalsData(message.data)
    }
  }

  const setArrivals = (iATA, action) => {
    const useChannel = ably.channels.get(`${HUB_STREAM}:${iATA}`)
    if (action === 'reset') {
      console.log(`${iATA} unmounting`)
      useChannel.off()
      useChannel.unsubscribe()
      setArrivalsData(null)
     // setIsLoading(true)
    } else {
      console.log(`This ${iATA} was clicked`)
      useChannel.subscribe(arrivalListener)
    }
  }

  const setDepartures = (iATA, action) => {
    const useChannel = ably.channels.get(`${HUB_STREAM}:${iATA}`)
    if (action === 'reset') {
      console.log(`${iATA} unmounting`)
      useChannel.off()
      useChannel.unsubscribe()
      setDeparturesData(null)
      setIsLoading(true)
    } else {
      console.log(`This ${iATA} was clicked`)
      useChannel.subscribe(departureListener)
    }
  }

  return (
    <Context.Provider
      value={{
        arrivals,
        departures,
        isLoading,
        setIsLoading,
        setArrivals: setArrivals,
        setDepartures: setDepartures
      }}
    >
      {children}
    </Context.Provider>
  )
}
