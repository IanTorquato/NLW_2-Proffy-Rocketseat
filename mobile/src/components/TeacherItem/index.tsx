import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import iconFavorite from '../../assets/images/icons/heart-outline.png'
import iconUnFavorite from '../../assets/images/icons/unfavorite.png'
import iconWhatsapp from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import api from '../../services/api'

export interface Teacher {
  avatar: string
  bio: string
  cost: number
  id: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  dataProffy: Teacher,
  favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ dataProffy, favorited }) => {
  const [isFavorite, setIsFavorite] = useState(favorited)

  function handleLinkToWhatsapp() {
    api.post('connections', { user_id: dataProffy.id })

    Linking.openURL(`whatsapp://send?phone=${dataProffy.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('proffysFavorites')

    let arrayFavorites = []

    if (favorites) {
      arrayFavorites = JSON.parse(favorites)
    }

    if (isFavorite) {
      const favoritesIndex = arrayFavorites.findIndex((teacherItem: Teacher) => teacherItem.id === dataProffy.id)

      arrayFavorites.splice(favoritesIndex, 1)

      setIsFavorite(false)
    } else {
      arrayFavorites.push(dataProffy)

      setIsFavorite(true)
    }

    await AsyncStorage.setItem('proffysFavorites', JSON.stringify(arrayFavorites))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: dataProffy.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{dataProffy.name}</Text>
          <Text style={styles.subject}>{dataProffy.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{dataProffy.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {dataProffy.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.btnFavorite, isFavorite ? styles.favorited : {}]} onPress={handleToggleFavorite}>
            {isFavorite ? <Image source={iconUnFavorite} /> : <Image source={iconFavorite} />}
          </RectButton>

          <RectButton style={styles.btnContact} onPress={handleLinkToWhatsapp}>
            <Image source={iconWhatsapp} />
            <Text style={styles.txtBtnContact}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
