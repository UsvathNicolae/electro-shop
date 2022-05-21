import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { px } from "./hooks/utils";

function style<T extends ViewStyle | TextStyle | ImageStyle>(style: T) {
    return style;
}

export const textStyle = style({
    color: "#293452",
    fontSize: px(14)
})

export const globalStyle = StyleSheet.create({
    header: {
        ...textStyle,
        fontWeight: 'bold',
        fontSize: px(32),
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf: "stretch"
    }
})