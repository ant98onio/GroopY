import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStartContext from "./Contexts/AppStartContext";
import useTheme from "./hooks/useTheme";
import "react-native-gesture-handler";
import SideMenu from "./Components/SideMenu";
import Home from "./Pages/Home";

export default function App() {
    const themeData = useTheme();
    return (
        <AppStartContext.Provider value={themeData}>
            <SafeAreaProvider>
                <SideMenu></SideMenu>
            </SafeAreaProvider>
        </AppStartContext.Provider>
    );
}
