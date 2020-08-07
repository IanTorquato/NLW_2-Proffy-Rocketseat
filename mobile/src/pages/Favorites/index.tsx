import React from 'react'
import { View, ScrollView } from 'react-native'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Meus proffys favoritos" />

      <ScrollView style={styles.scrollTeacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default Favorites