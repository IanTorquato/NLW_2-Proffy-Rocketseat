import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'

const TeacherList: React.FC = () => {
  const [filtersVisible, setFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setFiltersVisible(!filtersVisible)
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
            <TextInput style={styles.input} placeholder="Qual a matéria?" placeholderTextColor="#c1bccc" />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1bccc" />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput style={styles.input} placeholder="Qual o horário?" placeholderTextColor="#c1bccc" />
              </View>
            </View>

            <RectButton style={styles.btnSubmit}>
              <Text style={styles.txtBtnSubmit}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </Header>

      <ScrollView style={styles.scrollTeacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList