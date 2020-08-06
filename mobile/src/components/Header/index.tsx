import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import styles from './styles'
import iconGoBack from '../../assets/images/icons/back.png'
import imgLogo from '../../assets/images/logo.png'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={iconGoBack} resizeMode="contain" />
        </BorderlessButton>

        <Image source={imgLogo} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header