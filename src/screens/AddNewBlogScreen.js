import { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import BlogContext from '../context/BologContext'

const AddNewBlogScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const { addBlogPost } = useContext(BlogContext)
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Enter title:</Text>
      <TextInput
        value={title}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={val => setTitle(val)}
      />
      <Button
        title='Submit'
        onPress={() => {
          addBlogPost({ title })
          navigation.navigate('Index')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textStyle: {
    marginLeft: 20,
    fontSize: 20,
  },
  input: {
    margin: 20,
    width: 240,
    borderColor: '#333',
    borderWidth: 1,
    fontSize: 16,
  },
})

export default AddNewBlogScreen
