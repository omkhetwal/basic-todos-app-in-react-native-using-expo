import useGlobalStore from "@/store"
import { getColors } from "@/utils/helpers"
import { Box, Text, Theme } from "@/utils/theme"
import { Picker } from "@react-native-picker/picker"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "@shopify/restyle"
import { nanoid } from "nanoid/non-secure"
import React, { useState } from "react"
import { Pressable, TextInput } from "react-native"

const COLORS = getColors()

const CreateCategory = () => {
  const navigation = useNavigation()

  const [newCategory, setNewCategory] = useState<ICategory>({
    name: "",
    id: `category_${nanoid()}`,
    color: {
      code: "",
      id: "",
      name: "",
    },
  })

  const { addCategory } = useGlobalStore()

  const theme = useTheme<Theme>()

  const handleCreateCategory = () => {
    addCategory(newCategory)

    setNewCategory({
      name: "",
      id: `category_${nanoid()}`,
      color: {
        code: "",
        id: "",
        name: "",
      },
    })

    navigation.navigate("Home")
  }

  return (
    <Box flex={1} bg="gray200" pb="10">
      <Box
        flex={1}
        flexDirection="column"
        justifyContent="space-between"
        mx="3"
      >
        <Box flexDirection="column" width={"100%"}>
          <Box bg="white" borderRadius="rounded2Xl" mt="5">
            <TextInput
              placeholder="Create new task"
              value={newCategory.name}
              onChangeText={(text) => {
                setNewCategory((prev) => {
                  return {
                    ...prev,
                    name: text,
                  }
                })
              }}
              style={{
                padding: 16,
                fontSize: 20,
                width: "100%",
              }}
            />
          </Box>
          <Box height={20} />
          <Picker
            selectedValue={newCategory.color.id}
            onValueChange={(itemValue, itemIndex) => {
              const currentColor = COLORS.find(
                (color) => color.id === itemValue
              )
              if (currentColor) {
                setNewCategory((prev) => {
                  return {
                    ...prev,
                    color: currentColor,
                  }
                })
              } else {
                console.log("within else")
              }
            }}
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: 16,
            }}
          >
            {COLORS.map((colorItem) => {
              return (
                <Picker.Item
                  style={{
                    borderWidth: 2,
                    borderRadius: 40,
                  }}
                  key={colorItem.id}
                  label={colorItem.name}
                  value={colorItem.id}
                />
              )
            })}
          </Picker>
        </Box>
        <Pressable onPress={handleCreateCategory}>
          <Box bg="blu500" py="4" borderRadius="rounded2Xl" alignItems="center">
            <Text color="blu200" variant="textXl">
              Create
            </Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  )
}

export default CreateCategory
