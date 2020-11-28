/* 
  Developed by: Mohammed SalmanKhan M A
  Developed date: 28/Nov/2020
  Styles.js: Holds the Styling for application
*/
import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        justifyContent: "flex-end"
    },
    value: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 40
    },
    text: {
        color: "#fff",
        fontSize: 25
    },
    textSecondary: {
        color: "#060606"
    },
    button: {
        backgroundColor: "#c4c3cb",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    }
});