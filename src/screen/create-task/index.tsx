import useGlobalStore from "@/store"
import { Box, Text } from "@/utils/theme"
import { Picker } from "@react-native-picker/picker"
import { useNavigation } from "@react-navigation/native"
import { nanoid } from "nanoid/non-secure"
import React, { useState } from "react"
import { Pressable, StyleSheet, TextInput, View } from "react-native"

const CreateTask = () => {
  const { categories, selectedCategory, addTask } = useGlobalStore()
  const navigation = useNavigation()

  const [newTask, setNewTask] = useState<ITask>({
    id: `task_${nanoid()}`,
    name: "",
    category_id: selectedCategory?.id ?? "",
    completed: false,
  })

  const handleCreateTask = () => {
    addTask(newTask)
    navigation.navigate("Home")
  }

  return (
    <Box flex={1} bg="gray100" p="4" pb="10">
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          width={"100%"}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            width={"100%"}
            bg="white"
            borderRadius="roundedXl"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <TextInput
              style={{
                fontSize: 20,
                width: "100%",
              }}
              placeholder="Create new task"
              value={newTask.name}
              onChangeText={(text) => {
                setNewTask((prev) => {
                  return {
                    ...prev,
                    name: text,
                  }
                })
              }}
            />
          </Box>
          <Box height={20} />
          <Box width={"100%"}>
            <Picker
              style={{
                backgroundColor: "white",
                borderRadius: 16,
              }}
              selectedValue={newTask.category_id}
              onValueChange={(itemValue) => {
                const currentCategory = categories.find(
                  (categoryItem) => categoryItem.id === itemValue
                )
                if (currentCategory) {
                  setNewTask((task) => {
                    return {
                      ...task,
                      category_id: currentCategory.id,
                    }
                  })
                }
              }}
            >
              {categories.map((category) => {
                return (
                  <Picker.Item
                    style={{
                      backgroundColor: "white",
                      borderRadius: 16,
                    }}
                    key={category.id}
                    label={category.name}
                    value={category.id}
                  />
                )
              })}
            </Picker>
          </Box>
        </Box>
        <Box
          mx="4"
          bg="blu500"
          width={"100%"}
          borderRadius="roundedXl"
          p="4"
          alignItems="center"
          style={{
            marginTop: "100%",
          }}
        >
          <Pressable onPress={handleCreateTask}>
            <Text variant="textXl" color="blu200">
              Create
            </Text>
          </Pressable>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateTask

const styles = StyleSheet.create({})
