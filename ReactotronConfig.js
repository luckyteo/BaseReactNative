import DeviceInfo from 'react-native-device-info'
import Reactotron, { networking } from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reactotronRedux } from 'reactotron-redux'

const configure = DeviceInfo.isEmulator()
  ? {
      name: 'App',
    }
  : {
      name: 'App',
      host: '127.0.0.1',
    }

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure(configure) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) //  <- here i am!
  .use(networking())
  .connect() // let's connect!
reactotron.clear() // Clear the logs.

export default reactotron
