import { Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Pressable, StyleSheet, View } from "react-native"

const Home = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text variant="text2Xl">Home</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("CreateTask")
        }}
      >
        <Text variant="text4Xl" color="green500">
          Navigate to create task
        </Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
