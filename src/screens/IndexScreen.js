import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/BologContext'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { FontAwesome5, Entypo } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlog } = useContext(Context)

  useEffect(() => {
    getBlogPosts()
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })
    //cleaning up when index screen is removed
    return () => {
      listener.remove()
    }
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
          <Entypo name='plus' style={styles.plusIcon} />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blog => blog.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Pressable onPress={() => deleteBlog(item.id)}>
                <FontAwesome5 name='trash' size={24} color='#444' />
              </Pressable>
            </View>
          </TouchableOpacity>
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
    borderTopColor: '#999',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  plusIcon: {
    fontSize: 30,
    color: '#444',
  },
})

export default IndexScreen
