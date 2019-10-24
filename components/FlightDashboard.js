import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import ListIcons from './ListIcons'
import { Button } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = 0.0421

const coordinates = []
let map
export default FlightDashboard = ({ handleClose, data }) => {
  const handleOnLayout = () => {
    map.fitToSuppliedMarkers('flight', {
      edgePadding: {
        bottom: 200,
        right: 50,
        top: 150,
        left: 50
      },
      animated: true
    })
  }
  useEffect(() => {
    console.log(coordinates)
    coordinates.push({ latitude: data.lat, longitude: data.long })
  }, [data])

  return (
    <View style={styles.container}>
      <MapView
        onLayout={() => handleOnLayout()}
        ref={ref => (map = ref)}
        provider={PROVIDER_GOOGLE}
        style={styles.map_view}
        initialRegion={{
          latitude: data.lat,
          longitude: data.long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
      >
        {coordinates.length > 0 && (
          <>
            <Marker
              identifier="flight"
              coordinate={{ latitude: data.lat, longitude: data.long }}
              pinColor="#FFF"
              tracksViewChanges={true}
            >
              <Ionicons name="ios-airplane" size={40}  style={{ transform: [{ rotateZ: '-50deg'}] }}/>
            </Marker>
            <Polyline
              coordinates={[...coordinates]}
              strokeColor="#000"
              strokeWidth={1}
            />
          </>
        )}
      </MapView>
      <View style={styles.dashboarWrap}>
        <View style={styles.dashboard}>
          <ListIcons icon="ios-airplane" text={data.airline} />
          <ListIcons icon="ios-trending-up" text={data.long} />
          <ListIcons icon="ios-speedometer" text={data.speed} />
          <ListIcons icon="ios-trending-down" text={data.lat} />
          <ListIcons icon="ios-flash" text={data.iataId} />
        </View>
        <Button
          onPress={() => handleClose()}
          style={styles.endButton}
          bordered
          dark
        >
          <Text style={{ textAlign: 'center' }}>End</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map_view: {
    ...StyleSheet.absoluteFillObject
  },
  dashboard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row'
  },
  dashboarWrap: {
    position: 'absolute',
    backgroundColor: '#FFF',
    left: 0,
    right: 0,
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    bottom: 0
  },
  endButton: {
    position: 'absolute',
    bottom: 10,
    borderWidth: 1,
    color: '#000',
    width: 100,
    justifyContent: 'center',
    padding: 10
  }
})
