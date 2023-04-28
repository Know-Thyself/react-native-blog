import { Text, View, StyleSheet, FlatList } from 'react-native'
import BlogContext from '../context/BologContext'
import { useContext } from 'react'

const IndexScreen = () => {
  const passedValue = useContext(BlogContext)
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={passedValue.data}
        keyExtractor={blog => blog.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
