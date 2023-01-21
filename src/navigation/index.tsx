import CreateCategory from "@/screen/create-category"
import CreateTask from "@/screen/create-task"
import EditTask from "@/screen/edit-task"
import Home from "@/screen/home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="CreateCategory" component={CreateCategory} />
    </Stack.Navigator>
  )
}

export default Navigation
