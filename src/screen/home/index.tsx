import useGlobalStore from "@/store"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React, { useMemo, useRef } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { BottomSheetModal } from "@gorhom/bottom-sheet"

import { FontAwesome, Ionicons } from "@expo/vector-icons"

const Home = () => {
  const navigation = useNavigation()
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const snapPoints = useMemo(() => ["60%"], [])

  const { tasks, categories, updateSelectedCategory, selectedCategory } =
    useGlobalStore()

  const onUpdateSelectedCategory = (category: ICategory) => {
    updateSelectedCategory(category)
    bottomSheetRef.current?.close()
  }

  return (
    <Box flex={1} bg="gray100">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mt="4"
        px="4"
      >
        <Box flexDirection="row" alignItems="center">
          <FontAwesome
            name="square-o"
            size={24}
            color={selectedCategory?.color.code}
          />
          <Text variant="text2Xl" ml="4">
            {selectedCategory?.name}
          </Text>
        </Box>
        <Pressable
          onPress={() => {
            bottomSheetRef.current?.present()
          }}
        >
          <Ionicons size={32} name="ios-filter" />
        </Pressable>
      </Box>

      <BottomSheetModal ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <Box flex={1} mx="4">
          {categories.map((category) => (
            <Pressable onPress={() => onUpdateSelectedCategory(category)}>
              <Box
                p="4"
                bg="gray100"
                key={category.id}
                borderRadius="roundedXl"
                flexDirection="row"
                alignItems="center"
              >
                <FontAwesome
                  name="square-o"
                  size={24}
                  color={category.color.code}
                />
                <Text variant="textXl" ml="4">
                  {category.name}
                </Text>
              </Box>
            </Pressable>
          ))}
        </Box>
      </BottomSheetModal>

      <Pressable
        onPress={() => {
          navigation.navigate("CreateCategory")
        }}
      >
        <Text variant="text4Xl" color="green500">
          Navigate to create category
        </Text>
      </Pressable>
    </Box>
  )
}

export default Home

const styles = StyleSheet.create({})
