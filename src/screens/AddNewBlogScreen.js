import { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../context/BologContext'

const AddNewBlogScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context)

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
      <Text style={styles.textStyle}>Enter content:</Text>
      <TextInput
        value={content}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={val => setContent(val)}
      />
      <Button
        title='Save'
        onPress={() => {
          if (title) {
            addBlogPost(title, content)
          }
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
    padding: 10,
    width: 240,
    borderColor: '#333',
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 4,
  },
})

export default AddNewBlogScreen
