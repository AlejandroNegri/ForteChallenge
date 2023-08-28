import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    marginBottom: '5%',
    alignItems: 'center',
  },
  shootButton: {
    borderWidth: 5,
    borderColor: 'white',
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});

export default styles;
