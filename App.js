import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BologContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddNewBlogScreen from './src/screens/AddNewBlogScreen'
import EditBlogScreen from './src/screens/EditBlogScreen'
import ShowDetailsScreen from './src/screens/ShowDetailsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#BEBEBE',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={{ title: 'Blogs List' }}
          />
          <Stack.Screen
            name='Add'
            component={AddNewBlogScreen}
            options={{ title: 'Add New Blog' }}
          />
          <Stack.Screen
            name='Edit'
            component={EditBlogScreen}
            options={{ title: 'Edit Blog' }}
          />
          <Stack.Screen
            name='Show'
            component={ShowDetailsScreen}
            options={{ title: 'Blog Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
