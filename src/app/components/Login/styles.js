import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loginWrapper: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 273,
    left: 30,
    right: 30,
    top: 163,
  },

  titleWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29367C',
    height: 64,
    top: -42,
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

  textButton: {
    color: 'white',
  },

  registerButton: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },

  registerButtonText: {
    color: '#1469BE',
  },
});
