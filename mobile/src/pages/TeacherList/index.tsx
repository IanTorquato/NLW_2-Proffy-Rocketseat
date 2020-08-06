import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import Header from '../../components/Header'

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys dispiníveis" />
    </View>
  )
}

export default TeacherList