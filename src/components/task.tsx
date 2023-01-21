import { Box, Text, Theme } from "@/utils/theme"
import { useTheme } from "@shopify/restyle"
import React from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

type TaskProps = {
  task: ITask
}

const Task = ({ task }: TaskProps) => {
  const theme = useTheme<Theme>()
  return (
    <Box bg="white" borderRadius="rounded2Xl" flex={1}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p="4"
      >
        <Pressable>
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <FontAwesome
              name="square"
              size={24}
              color={task.completed ? theme.colors.green500 : "#FEECEF"}
            />
            <Text variant="textXl" ml="4">
              {task.name}
            </Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  )
}

export default Task

const styles = StyleSheet.create({})
