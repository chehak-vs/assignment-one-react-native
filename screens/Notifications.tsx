import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TopNav from '../components/TopNav';
import list from '../data.json';
import styles from './Notifications-styles';
const backButton = require('../images/back.png');
const settings = require('../images/icons.png');

const imagePaths: {[key: string]: string} = {
  "Reflection": require('../images/Reflection.png'),
  "Reminder": require('../images/Reminder.png'),
  'D-active': require('../images/D-active.png'),
};

export default function Notifications() {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (elapsedTime : number) => {
    if (elapsedTime < 60) {
      return `${elapsedTime}m ago`;
    } else {
      const hours = Math.floor(elapsedTime / 60);
      return `${hours}h ago`;
    }
  };

  return (
    <SafeAreaView>
      <TopNav
        title="Notifications"
        imageLeft={backButton}
        imageRight={settings}
      />
      <View>
        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (
              <View
                style={
                  item.id === 1 || item.id === 2
                    ? styles.listCardContainer
                    : null
                }>
                <View style={styles.listContainer}>
                  <Image
                    source={imagePaths[item.name]}
                    style={styles.listImage}
                  />
                  <View>
                    <Text style={styles.listText}>{item.text1}</Text>
                    <Text style={styles.listText}>{item.text2}</Text>
                  </View>
                </View>
                <View style={styles.listTimeContainer}>
                  <Text style={styles.listTime}>
                    {formatTimeAgo(elapsedTime)}
                  </Text>
                </View>
              </View>
            );
          }}
          ItemSeparatorComponent={<View style={styles.separator} />}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
