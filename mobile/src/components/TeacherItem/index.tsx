import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import iconFavorite from '../../assets/images/icons/heart-outline.png'
import iconUnFavorite from '../../assets/images/icons/unfavorite.png'
import iconWhatsapp from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://github.com/IanTorquato.png' }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ian da Conceição da Silva</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>Estou interessado em trabalhar com JavaScript em qualquer parte da aplicação. {'\n'}{'\n'}
        Já tenho uma base de conhecimento com React, React Native e Node. 💻📚
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 50,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.btnFavorite, styles.favorited]}>
            {/* <Image source={iconFavorite} /> */}
            <Image source={iconUnFavorite} />
          </RectButton>

          <RectButton style={styles.btnContact}>
            <Image source={iconWhatsapp} />
            <Text style={styles.txtBtnContact}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem