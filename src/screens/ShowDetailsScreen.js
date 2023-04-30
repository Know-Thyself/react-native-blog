import { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BologContext'
import { MaterialIcons } from '@expo/vector-icons'

const ShowDetailsScreen = ({ navigation, route }) => {
  const { state } = useContext(Context)
  const blogToShow = state.find(blog => blog.id === route.params.id)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: blogToShow.title,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: blogToShow.id })}
        >
          <MaterialIcons name='edit' size={24} color='black' />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>{blogToShow.title}</Text>
      <Text style={styles.textContent}>{blogToShow.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    margin: 10,
  },
  textContent: {
    fontSize: 16,
    marginLeft: 10,
  },
})

export default ShowDetailsScreen
