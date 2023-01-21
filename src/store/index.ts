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
  addTask: (task: ITask) => void
  addCategory: (category: ICategory) => void
  updateTasks: (tasks: ITask[]) => void
  selectedCategory: null | ICategory
  updateSelectedCategory: (category: ICategory) => void
  toggleTaskStatus: (task: ITask) => void
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      categories: [],
      tasks: [],
      selectedCategory: null,
      addTask: (task) => {
        const { tasks } = get()
        const updatedTasks = [...tasks, task]
        set({
          tasks: updatedTasks,
        })
      },
      updateTasks: (updatedTasks) => {
        set({
          tasks: updatedTasks,
        })
      },
      updateSelectedCategory: (category) => {
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
      toggleTaskStatus: (task: ITask) => {
        const { tasks } = get()
        const updatedTasks = tasks.map((taskItem) => {
          if (taskItem.id === task.id) {
            return {
              ...task,
              completed: !task.completed,
            }
          } else {
            return taskItem
          }
        })
        set({
          tasks: updatedTasks,
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
