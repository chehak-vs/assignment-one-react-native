import { StyleSheet , StyleProp, ViewStyle, TextStyle, ImageStyle  } from "react-native"

interface Styles {
    listCardContainer: StyleProp<ViewStyle>;
    listContainer: StyleProp<ViewStyle>;
    listImage: StyleProp<ImageStyle>;
    listText: StyleProp<TextStyle>;
    listTimeContainer: StyleProp<ViewStyle>;
    listTime: StyleProp<TextStyle>;
    separator: StyleProp<ViewStyle>;
  }

const styles: Styles= StyleSheet.create({
    listCardContainer:{
        backgroundColor: '#F1FCFA'
    },

    listContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 17,
    },
    listImage: {
        height: 48,
        width: 48,
    },
    listText: {
        marginLeft: 20,
        marginRight: 8,
        fontSize: 14,
        fontWeight: '500',
    },
    listTimeContainer: {
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 76,
        marginBottom: 17
    },
    listTime: {

    },
    separator: {
        height: 1, // Adjust the height of the separator as needed
        backgroundColor: '#E2E8EB', // Change the color as needed
      },
    
})

export default styles;