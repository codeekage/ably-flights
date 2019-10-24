import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Card, CardItem, Body, Button, Container, Content } from 'native-base'
import context from '../context/context'

import FlightDashboard from '../components/FlightDashboard'

export default FlightMapScreen = ({ navigation }) => {
  const {
    arrivals,
    departures,
    setArrivals,
    setDepartures,
    setIsLoading
  } = useContext(context)
  let data = arrivals || departures

  const handleClose = () => {
    arrivals
      ? navigation.navigate('Arrivals')
      : navigation.navigate('Departure')
  }

  useEffect(() => {
    return () => {
      console.log('unmounted!')
      arrivals
        ? setArrivals(arrivals.iataId, 'reset')
        : setDepartures(departures.iataId, 'reset')
      //setIsLoading(true)
    }
  }, [])

  return (
    <>
      {arrivals ? (
        <FlightDashboard data={arrivals} handleClose={() => handleClose()} />
      ) : (
        <FlightDashboard data={departures} handleClose={() => handleClose()} />
      )}
    </>
  )
}

FlightMapScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map_view: {
    ...StyleSheet.absoluteFillObject
  }
})
