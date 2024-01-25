import { useContext } from "react";
import {
    ImageBackground,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import globalStyle from "../Styles/globalStyle";
import AppStartContext from "../Contexts/AppStartContext";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../Components/Navbar";

export default function Home({ navigation }) {
    const { isDarkTheme } = useContext(AppStartContext);
    const { changeTheme } = useContext(AppStartContext);

    return (
        <SafeAreaView
            style={[
                globalStyle.componentContainer,
                isDarkTheme ? globalStyle.darkTheme : globalStyle.lightTheme,
            ]}
        >
            <Navbar navigation={navigation}></Navbar>
        </SafeAreaView>
    );
}
