import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { CustomTextInput } from "../components/custom-text-input";
import { px, useAppNavigation } from "../hooks/utils";

type RegInfo<T> = {
    username: T,
    password: T
}

export function Login() {
    const nav = useAppNavigation();
    const [regInfo, setRegInfo] = useState<RegInfo<string>>();
    const [error, setError] = useState(false);

    const onChangeUsername = (val: string) => {
        setRegInfo({ ...regInfo!, username: val });
    }

    const onChangePassword = (val: string) => {
        setRegInfo({ ...regInfo!, password: val });
    }

    const login = async (regInfo: RegInfo<string>) => {
        try {
            nav.navigate("OrderList");
        } catch (e) {
            setError(true);
            console.log(e);
        }
    }

    return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center", marginTop: 50, fontSize: 24, fontWeight: "bold" }}>Login</Text>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ marginTop: 20 }}></View>
                <CustomTextInput
                    value={regInfo?.username}
                    onChangeText={onChangeUsername}
                    placeholderText="Enter your username"
                    key={0}
                />
                <CustomTextInput
                    value={regInfo?.password}
                    onChangeText={onChangePassword}
                    placeholderText="Enter your password"
                    key={1}
                />
                {error && <Text style={{ fontWeight: "bold", fontSize: 14, color: "darkred", textAlign: "center", marginTop: px(30) }}>Your credentials are incorrect!</Text>}
                <View style={{ flexGrow: 1 }}></View>
                <TouchableOpacity style={{ backgroundColor: "darkblue", borderRadius: px(50), alignItems: "center", alignSelf: "center", width: "70%", padding: 5, marginBottom: px(20) }} onPress={() => login(regInfo!)}>
                    <Text style={{ fontSize: 14, color: "#E6E6E6", marginLeft: px(10), marginRight: px(10), marginBottom: px(8), marginTop: px(8), fontWeight: "bold" }}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
}
