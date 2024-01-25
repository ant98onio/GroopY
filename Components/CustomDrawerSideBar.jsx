import React from "react";
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import AppStartContext from "../Contexts/AppStartContext";
import globalStyle from "../Styles/globalStyle";
import SetTheme from "./SetTheme";
import { Divider } from "@rneui/themed";
import { Dialog, ListItem, Avatar } from "@rneui/themed";
import { useState } from "react";

export default function CustomDrawerSideBar(props) {
    const pressableTextStyle = {
        fontSize: 24,
        padding: 8,
    };

    const { isDarkTheme, changeTheme } = useContext(AppStartContext);
    const [Bannervisible, setBannervisible] = useState(false);

    const showBanner = () => {
        console.log("cliccato");
        setBannervisible(!Bannervisible);
    };

    const userlist = [
        {
            name: "Amy Farha",
            avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
            subtitle: "amy.farha@gmail.com",
        },
        {
            name: "Chris Jackson",
            avatar_url: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
            subtitle: "cjackson@gmail.com",
        },
        {
            name: "Amanda Martin",
            avatar_url:
                "https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40",
            subtitle: "amandam@gmail.com",
        },
    ];
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/* <ImageBackground
                // source={require('../assets/sidbarBackground.jpg')}
                ></ImageBackground> */}

                <View style={{ padding: 22 }}>
                    <Pressable onLongPress={showBanner}>
                        <Image
                            source={require("../assets/profileExample.png")}
                            style={{
                                height: 80,
                                width: 80,
                                borderRadius: 40,
                                marginBottom: 10,
                            }}
                            onPress={showBanner}
                        />
                    </Pressable>
                    <Text
                        style={[
                            isDarkTheme
                                ? {
                                      color: globalStyle.darkTheme.color,
                                      padding: 7,
                                      fontSize: "110%",
                                      textDecorationStyle: "solid",
                                  }
                                : {
                                      color: globalStyle.lightTheme.color,
                                      padding: 7,
                                      fontSize: "110%",
                                      textDecorationStyle: "solid",
                                  },
                        ]}
                    >
                        @Username_123
                    </Text>
                    <br></br>
                    <Divider style={{ backgroundColor: "grey" }} />
                </View>
                <Dialog isVisible={Bannervisible} onBackdropPress={showBanner}>
                    <Dialog.Title title="Choose Account" />
                    {userlist.map((l, i) => (
                        <ListItem
                            key={i}
                            containerStyle={{
                                marginHorizontal: -10,
                                borderRadius: 8,
                            }}
                            onPress={showBanner}
                        >
                            <Avatar rounded source={{ uri: l.avatar_url }} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontWeight: "700" }}>
                                    {l.name}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {l.subtitle}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </Dialog>
                <View style={{ padding: 12 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ marginBottom: 40, marginLeft: 5 }}>
                <SetTheme></SetTheme>
            </View>
        </View>
    );
}
