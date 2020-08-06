import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import imgLanding from '../../assets/images/landing.png'
import iconStudy from '../../assets/images/icons/study.png'
import iconGiveClasses from '../../assets/images/icons/give-classes.png'
import iconHeart from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
  const { navigate } = useNavigation()

  function handleNavigateToStudyTabs() {
    navigate('StudyTabs')
  }

  function handleNavigateToGiveClasses() {
    navigate('GiveClasses')
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.banner} source={imgLanding} />

        <Text style={styles.title} >
          Seja bem-vindo, {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToStudyTabs}>
            <Image source={iconStudy} />
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>

          <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToGiveClasses} >
            <Image source={iconGiveClasses} />
            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de 368 conexões já realizadas {' '}
          <Image source={iconHeart} />
        </Text>
      </ScrollView>
    </View>
  )
}

export default Landing