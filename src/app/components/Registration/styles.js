import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  registerWrapper: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 423,
    left: 30,
    right: 30,
    top: 75
    ,
  },

  titleWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29367C',
    height: 64,
    top: -80,
  },

  titleText: {
    fontStyle: 'normal',
    fontSize: 24,
    color: '#FFFFFF',
  },

  buttonWrapper: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  button: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5CB85C',
    width: '80%',
    height: 28,
  },

  cancelButton: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },

  cancelText : {
    color: '#1469BE',
  }
});
