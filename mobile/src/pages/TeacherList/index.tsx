import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import Header from '../../components/Header'
import TeacherItem, { Teacher as Proffy } from '../../components/TeacherItem'
import api from '../../services/api'

import styles from './styles'

const TeacherList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [proffys, setProffys] = useState([])
  const [filtersVisible, setFiltersVisible] = useState(false)

  async function searchFavorites() {
    const response = await AsyncStorage.getItem('proffysFavorites')

    if (response) {
      const saveFavorites = JSON.parse(response)
      const saveFavoritesIds = saveFavorites.map((proffy: Proffy) => proffy.id)
      setFavorites(saveFavoritesIds)
    }
  }

  function handleToggleFiltersVisible() {
    setFiltersVisible(!filtersVisible)
  }


  async function searchProffys() {
    searchFavorites()

    const { data } = await api.get('classes', { params: { subject, week_day, time } })

    setFiltersVisible(false)
    setProffys(data)
  }

  return (
    <View style={styles.container}>
      <Header title="Proffys dispiníveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#fff" />
        </BorderlessButton>
      )}>
        {filtersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput style={styles.input} placeholder="Qual a matéria?" placeholderTextColor="#c1bccc"
              value={subject} onChangeText={txtSubject => setSubject(txtSubject)} />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1bccc"
                  value={week_day} onChangeText={day => setWeek_day(day)} />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput style={styles.input} placeholder="Qual o horário?" placeholderTextColor="#c1bccc"
                  value={time} onChangeText={txtTime => setTime(txtTime)} />
              </View>
            </View>

            <RectButton style={styles.btnSubmit} onPress={searchProffys}>
              <Text style={styles.txtBtnSubmit}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </Header>

      <ScrollView style={styles.scrollTeacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        {proffys.map((proffy: Proffy) => (
          <TeacherItem key={proffy.id} dataProffy={proffy} favorited={favorites.includes(proffy.id)} />
        ))}
      </ScrollView>
    </View>
  )
}

export default TeacherList