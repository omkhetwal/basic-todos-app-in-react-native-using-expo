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
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      categories: [],
      tasks: [],
    }),
    {
      name: "todos-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useGlobalStore
