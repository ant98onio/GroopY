import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import globalStyle from "../Styles/globalStyle";
import AppStartContext from "../Contexts/AppStartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../Components/Navbar";

export default function Profile({navigation}) {
    const pressableTextStyle = {
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
                N O T I F I C A T I O N P A G E
            </Text>
            <Text style={globalStyle.genericTextStyle}> 🔔 </Text>
        </SafeAreaView>
    );
}
