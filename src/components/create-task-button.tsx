import { Box } from "@/utils/theme"
import React from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const CreateTaskButton = () => {
  const insets = useSafeAreaInsets()

  const navigation = useNavigation()

  const isAndroid = Platform.OS === "android"

  const navigateToCreateTask = () => {
    navigation.navigate("CreateTask")
  }

  return (
    <Box
      position="absolute"
      bottom={insets.bottom + (isAndroid ? 100 : 40)}
      right={20}
      bg="white"
      width={64}
      height={20}
    >
      <Pressable onPress={navigateToCreateTask}>
        <Box
          bg="gray200"
          width={64}
          height={64}
          alignItems="center"
          justifyContent="center"
          borderRadius="roundedXl"
        >
          <MaterialCommunityIcons name="plus" size={40} color="black" />
        </Box>
      </Pressable>
    </Box>
  )
}

export default CreateTaskButton

const styles = StyleSheet.create({})
