import { StyleSheet , StyleProp, ViewStyle, TextStyle} from "react-native";

interface Styles {
  listContainer: StyleProp<ViewStyle>;
  bgImage: StyleProp<ViewStyle>;
  innerContainer: StyleProp<ViewStyle>;
  textContainer: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
  buttonContainer: StyleProp<ViewStyle>;
  button: StyleProp<ViewStyle>;
  buttonText: StyleProp<TextStyle>;
}

const styles: Styles = StyleSheet.create({
    listContainer: {
      borderRadius: 16,

    },
    bgImage: {
      //width: 335,
      height: 148,
      margin: 20,
    },
    innerContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1
    },
    textContainer: {
      height: 41,
    },
    text: {
      fontSize: 18,
      fontFamily: 'Fraunces Regular',
      fontWeight: '700',
      // color: '#D72B6A',
      lineHeight: 25.2
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end' ,
      height: 60,
      width: '100%'
    },
    button: {
      height: 36,
      width: 93,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
      // paddingVertical: 10,
      // paddingHorizontal: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 16,
      elevation: 3,
      shadowColor: '#4B4B4B',
      shadowOpacity: 6,
      gap: 8,
      textAlign: 'center'
    },
    buttonText: {
      fontSize: 12,
      fontWeight: '700',
      lineHeight: 18,
      color: '#292F36',
    }
  });

export default styles;