import useGlobalStore from "@/store"
import { Box } from "@/utils/theme"
import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Task from "./task"

const Tasks = () => {
  const { tasks, selectedCategory } = useGlobalStore()

  if (!selectedCategory) {
    return null
  }

  const tasksInCurrentCategory = tasks.filter(
    (task) => task.category_id === selectedCategory.id
  )

  return (
    <Box flex={1}>
      <FlatList
        data={tasksInCurrentCategory}
        renderItem={({ item }) => <Task task={item} />}
        keyExtractor={(item) => {
          return item.id
        }}
      />
    </Box>
  )
}

export default Tasks

const styles = StyleSheet.create({})
