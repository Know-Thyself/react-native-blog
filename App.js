import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import IndexScreen from './src/screens/IndexScreen'
import { BlogProvider } from './src/context/BologContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddNewBlogScreen from './src/screens/AddNewBlogScreen'
import EditBlogScreen from './src/screens/EditBlogScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog Posts' }}>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={{ title: 'This is title', headerTitle: 'All Blog Posts' }}
          />
          <Stack.Screen
            name='Add'
            component={AddNewBlogScreen}
            options={{ title: 'This is title', headerTitle: 'Add New Blog' }}
          />
          <Stack.Screen
            name='Edit'
            component={EditBlogScreen}
            options={{ title: 'This is title', headerTitle: 'Edit Blog' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  )
}
