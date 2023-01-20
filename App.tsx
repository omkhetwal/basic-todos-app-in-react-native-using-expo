import Navigation from "@/navigation"
import theme from "@/utils/theme"
import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "@shopify/restyle"

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}
