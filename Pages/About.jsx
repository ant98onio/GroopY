import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import globalStyle from "../Styles/globalStyle";
import AppStartContext from "../Contexts/AppStartContext";
import SideMenu from "../Components/SideMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../Components/Navbar";


export default function About({navigation}) {
    const genericTextStyle = {
        fontSize: 26,
    };

    const { isDarkTheme } = useContext(AppStartContext);

    return (
        <SafeAreaView
            style={[
                globalStyle.componentContainer,
                isDarkTheme ? globalStyle.darkTheme : globalStyle.lightTheme,
            ]}
        >
            <Navbar navigation={navigation}></Navbar>
            <Text
                style={[
                    isDarkTheme
                        ? { color: globalStyle.darkTheme.color }
                        : { color: globalStyle.lightTheme.color },
                    ,
                    globalStyle.genericTextStyle,
                ]}
            >
                A B O U T
            </Text>
            <Text style={globalStyle.genericTextStyle}>📰 </Text>
        </SafeAreaView>
    );
}
