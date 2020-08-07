import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/Header'
import TeacherItem, { Teacher as Proffy } from '../../components/TeacherItem'

import styles from './styles'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      searchFavorites()
    }, [])
  )

  async function searchFavorites() {
    const response = await AsyncStorage.getItem('proffysFavorites')

    if (response) {
      setFavorites(JSON.parse(response))
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Meus proffys favoritos" />

      <ScrollView style={styles.scrollTeacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        {favorites.map((proffy: Proffy) => (
          <TeacherItem key={proffy.id} dataProffy={proffy} favorited />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites