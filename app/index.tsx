import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Index = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Index Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/second')}
      >
        <Text style={styles.buttonText}>Go to Second Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/third')}
      >
        <Text style={styles.buttonText}>Go to Third Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/fifth/sixth')}
      >
        <Text style={styles.buttonText}>Go to Deeply Nested Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})