import React, { useContext, useEffect } from 'react'
import { ListCards } from '../components/ListCards'
import { Container, Content } from 'native-base'
import LoadingScreen from '../components/LoadingScreen'
import { useAblyChannel } from '../hooks/ably.hooks'
import AppContext from '../context/context'

export default DepartureScreen = props => {
  const [isConnecting, isLoading, displayMessage, channelData] = useAblyChannel(
    'depatures',
    []
  )

  useEffect(() => {
    console.log('Depature mounted')
  }, [])

  const Departures = channelData
    ? channelData.map((item, index) => {
        // console.log(channelData)
        return (
          <ListCards
            key={index}
            text={`${item.origin} - ${item.destination} (${item.iataId})`}
            icon="ios-airplane"
            action={() =>
              props.navigation.navigate('PopModal', {
                iataId: item.iataId,
                action: 'departure'
              })
            }
          />
        )
      })
    : []

  return (
    <Container>
      {isLoading ? (
        <LoadingScreen message={displayMessage} />
      ) : (
        <Content>{Departures}</Content>
      )}
    </Container>
  )
}

DepartureScreen.navigationOptions = {
  title: 'Departures from London'
}
