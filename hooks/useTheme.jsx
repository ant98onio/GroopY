import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";


export default function useTheme(){
    
    const [isDarkTheme, setIsDark] = useState(false);
    const theme = useColorScheme();

    const changeTheme = () => {
        setIsDark(!isDarkTheme);
        
    };
    useEffect(() => {
        isDarkTheme ? theme === "dark" : theme === "white";
    }, [isDarkTheme]);
    
    return {
        isDarkTheme,
        changeTheme
    };
}