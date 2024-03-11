import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import TopNav from '../components/TopNav'
import styles from './NotificationsNone-styles';
const bell = require('../images/Component.png');
const backButton = require("../images/back.png");
const settings = require("../images/icons.png");

export default function NotificationsNone() {
  return (
    <View style={styles.container}>
      <TopNav title="Notifications" imageLeft={backButton} imageRight={settings}/>
      <View style={styles.card}>
        <Image source={bell} style={styles.cardImage}/>
        <View>
            <Text style={styles.cardHeading}>No Notifications Yet!</Text>
            <Text style={styles.cardText}>You have no notifications right now.</Text>
            <Text style={styles.cardText}>Come back later.</Text>
        </View>
      </View>
    </View>
  )
}

