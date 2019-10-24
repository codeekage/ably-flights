import React from 'react'
import { StyleSheet } from 'react-native'
import { ListCards } from '../components/ListCards'
import { Container, Content } from 'native-base'
import { useAblyChannel } from '../hooks/ably.hooks'

export default ArrivalScreen = props => {
  const [
    isConnecting,
    isLoading,
    displayMessqage,
    channelData
  ] = useAblyChannel('arrivals', [])

  const Arrivals = channelData
    ? channelData.map((item, index) => {
        // console.log(channelData)
        return (
          <ListCards
            key={index}
            text={`${item.origin} - ${item.destination} (${item.iataId})`}
            icon="ios-airplane"
            //action={() => setArrivals(`${item.iataId}`)}
            action={() =>
              props.navigation.navigate('PopModal', {
                iataId: item.iataId,
                action: 'arrival'
              })
            }
            rotate
          />
        )
      })
    : []

  return (
    <Container>
      {isLoading ? (
        <LoadingScreen message={displayMessqage} />
      ) : (
        <Content>{Arrivals}</Content>
      )}
    </Container>
  )
}

ArrivalScreen.navigationOptions = {
  title: 'Arrivals to London',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
