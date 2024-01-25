import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { useContext } from "react";
import AppStartContext from "../Contexts/AppStartContext";
import { NavigationContainer } from "@react-navigation/native";
import globalStyle from "../Styles/globalStyle";
import { View, Image, Text, Pressable } from "react-native";
import Profile from "../Pages/Profile";
import NotificationPage from "../Pages/NotificationPage";
import CustomDrawerSideBar from "../Components/CustomDrawerSideBar";

export default function SideMenu() {
    const Drawer = createDrawerNavigator();
    const { isDarkTheme, changeTheme } = useContext(AppStartContext);

    return (
        <NavigationContainer
            theme={isDarkTheme ? globalStyle.darkTheme : globalStyle.lightTheme}
        >
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerSideBar {...props} />}
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen
                    name="Notifications"
                    component={NotificationPage}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
