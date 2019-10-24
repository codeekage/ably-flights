import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default ListIcons = ({icon, text}) => {
  return (
    <View style={{ padding: 15 }}>
      <Ionicons name={icon} style={{ alignSelf: 'center' }} size={23} />
      <Text>{text}</Text>
    </View>
  )
}

