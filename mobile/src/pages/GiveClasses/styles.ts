import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257e5',
    flex: 1,
    padding: 32
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 212
  },
  description: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 26,
    marginTop: 24,
    maxWidth: 240
  },
  btnTudoBem: {
    alignItems: 'center',
    backgroundColor: '#04d351',
    borderRadius: 8,
    height: 58,
    justifyContent: 'center',
    marginVertical: 40,
  },
  txtTudoBem: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  }
})

export default styles
