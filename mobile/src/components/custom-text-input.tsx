import React, { useRef } from "react";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";

const textInputStyles: StyleProp<ViewStyle> = {
    margin: 12,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    marginLeft: 50,
    marginRight: 50,
    borderColor: "darkblue",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
}

type CustomInputProps = {
    value: string | undefined,
    placeholderText: string,
    onChangeText: (val: string) => void,
    isPassword?: boolean
}

export function CustomTextInput(p: CustomInputProps) {
    const inputRef = useRef<TextInput>(null!);

    return <View style={textInputStyles} onTouchEnd={() => inputRef.current.focus()}>
        <TextInput
            placeholder={p.placeholderText}
            placeholderTextColor="gray"
            ref={inputRef}
            secureTextEntry={p.isPassword}
            onChangeText={p.onChangeText}
            style={{
                marginLeft: 10,
                width: "90%",
            }}
            value={p.value}
        />
    </View>
}
