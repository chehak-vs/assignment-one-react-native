import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotificationsNone from './screens/NotificationsNone'
import Notifications from './screens/Notifications'
import DActive from './screens/DActive'


export default function App() {
  return (
    <View>
      {/* <NotificationsNone /> */}
      <Notifications/>
      {/* <DActive /> */}
    </View>
  )
}

const styles = StyleSheet.create({})