const globalStyle = {
    componentContainer: {
        flex: 2,
        // alignItems: "center",
        // justifyContent: "center",
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    darkTheme: {
        backgroundColor: "rgba(17,17,17,255)",
        color: "white",
        colors: {
            primary: "rgb(255, 45, 85)",
            background: "rgb(242, 242, 242)",
            card: "rgb(22, 22, 22)",
            text: "rgb(242, 242, 242)",
            border: "rgb(199, 199, 204)",
            notification: "rgb(255, 69, 58)",
        },
    },
    lightTheme: {
        backgroundColor: "white",
        color: "black",
        colors: {
            primary: "rgb(255, 45, 85)",
            background: "rgb(242, 242, 242)",
            card: "rgb(255, 255, 255)",
            text: "rgb(28, 28, 30)",
            border: "rgb(199, 199, 204)",
            notification: "rgb(255, 69, 58)",
        },
    },
    genericTextStyle:{
        fontSize: 26,
        textAlign: "center"
    }
};

export default globalStyle;
