import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/BologContext'
import { useContext, useLayoutEffect } from 'react'
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlog } = useContext(Context)

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
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
  plusIcon: {
    fontSize: 30,
    color: '#444',
  },
})

export default IndexScreen
