import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BologContext'

const ShowDetailsScreen = ({ navigation, route }) => {
  const { state } = useContext(Context)
  const blogToShow = state.find(blog => blog.id === route.params.id)
  navigation.setOptions({ title: blogToShow.title })
  return (
    <View>
      <Text style={styles.title}>{blogToShow.title}</Text>
      <Text style={styles.textContent}>
        {blogToShow.content}
      </Text>
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
