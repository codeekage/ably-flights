import React, {useContext} from 'react'
import { Card, CardItem, Body, Text, Left, Right } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import AppContext from '../context/context'

export const ListCards = ({ text, rotate, icon, action }) => {
  const deg = rotate ? '45deg' : '-45deg'
  const color = rotate ? '#dbd81d' : '#7cbf80'


 //const context = useContext(AppContext);

  const handleActions = action => {
    action()
  }

  return (
    <Card noShadow>
      <CardItem button onPress={() => handleActions(action)}>
        <Left>
          <Ionicons
            name="ios-airplane"
            size={30}
            color={color}
            style={{ transform: [{ rotateZ: `${deg}` }] }}
          />
          <Body style={{ display: 'flex' }}>
            <Text>{text}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  )
}

// function handleActions(action) {
//   action()
// }

//#c27e7e
//#7cbf80
