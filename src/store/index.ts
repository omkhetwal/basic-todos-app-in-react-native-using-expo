import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
/**
 * 1. Interface IGlobalStore
 * 2. create
 * 3. persist with async from react-native-async-storage
 */

interface IGlobalStore {
  categories: ICategory[]
  tasks: ITask[]
  addCategory: (category: ICategory) => void
  selectedCategory: null | ICategory
  updateSelectedCategory: (category: ICategory) => void
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      categories: [],
      tasks: [],
      selectedCategory: null,
      updateSelectedCategory(category) {
        set({
          selectedCategory: category,
        })
      },
      addCategory: (category) => {
        const { categories } = get()
        const updatedCategories = [...categories, category]
        set({
          categories: updatedCategories,
        })
      },
    }),
    {
      name: "todos-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useGlobalStore
