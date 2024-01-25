import { useContext, useEffect } from "react";
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
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView, Image, Dimensions } from "react-native";

export default function Navbar({ navigation }) {
    const { isDarkTheme } = useContext(AppStartContext);
    const { changeTheme } = useContext(AppStartContext);

    return (
        <SafeAreaView
            style={[
                globalStyle.componentContainer,
                isDarkTheme ? globalStyle.darkTheme : globalStyle.lightTheme,
            ]}
        >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 20,
                        alignItems: "center",
                        padding: 20
                    }}
                    resizeMode="stretch"
                >
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require("../assets/profileExample.png")}
                            style={{ width: 55, height: 55 }}
                            imageStyle={{ borderRadius: 25 }}
                        ></ImageBackground>
                    </Pressable>
                    <SafeAreaView>
                        {isDarkTheme ? (
                            <View>
                                <ImageBackground
                                    source={require("../assets/blackLogo.png")}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        opacity: 0.8,
                                    }}
                                ></ImageBackground>
                            </View>
                        ) : (
                            <View>
                                <ImageBackground
                                    source={require("../assets/whiteLogo.png")}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        opacity: 0.8,
                                    }}
                                ></ImageBackground>
                            </View>
                        )}
                    </SafeAreaView>

                    <Text style={{ fontSize: 28 }}> 🔔 </Text>
                </View>
        </SafeAreaView>
    );
}
