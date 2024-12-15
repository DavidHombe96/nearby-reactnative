import { View, Text , Image} from 'react-native'
import { s } from './styles'

export const Welcome = () => {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />
      <Text  style={s.title}>Boas vindas ao NearBy!</Text>
      <Text  style={s.subtitle}>Tenha cupons de vantagens para usar em seus  estabelecimentos favoritos.</Text>
    </View>
  )
}
 