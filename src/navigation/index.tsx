import CreateTask from "@/screen/create-task"
import Home from "@/screen/home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
    </Stack.Navigator>
  )
}

export default Navigation
