import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Pressable,
} from 'react-native'
import BlogContext from '../context/BologContext'
import { useContext } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { data, deleteBlog } = useContext(BlogContext)
  return (
    <View>
      <Button title='Add Blog' onPress={() => navigation.navigate('Add')} />
      <FlatList
        data={data}
        keyExtractor={blog => blog.title}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.icons}>
              <Pressable
                onPress={() => navigation.navigate('Edit', { id: item.id })}
              >
                <MaterialIcons name='edit' size={24} color='black' />
              </Pressable>
              <Pressable onPress={() => deleteBlog(item.id)}>
                <FontAwesome5 name='trash' size={24} color='#444' />
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#999',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
})

export default IndexScreen
