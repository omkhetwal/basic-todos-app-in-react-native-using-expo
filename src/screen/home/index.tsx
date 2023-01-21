import useGlobalStore from "@/store"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React, { useMemo, useRef } from "react"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { BottomSheetModal } from "@gorhom/bottom-sheet"

import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import Category from "@/components/category"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import CreateTaskButton from "@/components/create-task-button"
import Tasks from "@/components/tasks"

const Home = () => {
  const navigation = useNavigation()

  const insets = useSafeAreaInsets()
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const snapPoints = useMemo(() => ["60%"], [])

  const { tasks, categories, updateSelectedCategory, selectedCategory } =
    useGlobalStore()

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
      <Box height={20} />
      <Tasks />
      <BottomSheetModal ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <Box flex={1} mx="4">
          <FlatList
            data={categories}
            renderItem={({ item, index }) => (
              <Category
                key={item.id}
                index={index}
                category={item}
                bottomSheetRef={bottomSheetRef}
              />
            )}
          />
          <Box position="absolute" right={20} bottom={insets.bottom}>
            <Pressable
              onPress={() => {
                bottomSheetRef.current?.close()
                navigation.navigate("CreateCategory")
              }}
            >
              <Box
                bg="gray100"
                width={64}
                height={64}
                borderRadius="roundedXl"
                alignItems="center"
                justifyContent="center"
              >
                <MaterialCommunityIcons name="plus" size={40} color="black" />
              </Box>
            </Pressable>
          </Box>
        </Box>
      </BottomSheetModal>
      <CreateTaskButton />
    </Box>
  )
}

export default Home

const styles = StyleSheet.create({})
