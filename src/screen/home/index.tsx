import useGlobalStore from "@/store"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Pressable, StyleSheet, View } from "react-native"

const Home = () => {
  const navigation = useNavigation()

  const { tasks, categories } = useGlobalStore()

  return (
    <View>
      <Text variant="text2Xl">Home</Text>
      {categories.map((category) => (
        <Box p="4" bg="blu200" key={category.id}>
          <Text color="blu500">{category.name}</Text>
        </Box>
      ))}
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
