import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack 