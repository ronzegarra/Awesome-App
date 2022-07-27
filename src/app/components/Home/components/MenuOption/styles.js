import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    flex: 3,
    display: 'flex',
    alignItems: 'center',
  },

  itemWrapper: {
    width: 68,
    height: 68,
    borderRadius: 68 / 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 48,
    width: 48,
    resizeMode: 'stretch',
  },
});
