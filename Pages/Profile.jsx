import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import globalStyle from "../Styles/globalStyle";
import AppStartContext from "../Contexts/AppStartContext";
import SideMenu from "../Components/SideMenu";
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
                P R O F I L E P A G E
            </Text>
            <Text style={globalStyle.genericTextStyle}> 👤 </Text>
        </SafeAreaView>
    );
}
