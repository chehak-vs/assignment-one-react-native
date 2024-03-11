import { StyleSheet, StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface Styles {
  container: StyleProp<ViewStyle>;
  containerImage: StyleProp<ImageStyle>;
  containerText: StyleProp<TextStyle>;
}

const styles: Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerImage: {
    height: 24,
    width: 24,
    marginVertical: 16,
  },
  containerText: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    paddingVertical: 15.5,
  },
});

export default styles;
