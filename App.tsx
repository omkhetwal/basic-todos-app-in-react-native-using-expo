import Button from "@/components/button"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

/**
 *
 * import Button from '../../components/Button.tsx'
 * import Button from '@components/Button.tsx'
 *
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Button />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
