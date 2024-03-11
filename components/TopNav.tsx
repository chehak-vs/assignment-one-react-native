import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './TopNav-styles'

export default function TopNav(props: any) {
  return (
    <View style={styles.container}>
        <Image source={props.imageLeft} style={[styles.containerImage, { marginLeft: 24 }]} />
        <Text style={styles.containerText}>{props.title}</Text>
        <Image source={props.imageRight}style={[styles.containerImage, { marginRight: 24}]}/>
    </View>
  )
}
