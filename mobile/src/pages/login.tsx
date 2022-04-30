import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { px } from "../hooks/utils";
import { globalStyle } from "../styles";

export function Login() {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={globalStyle.header}>Login</Text>
        <TextInput
            style={{ height: 50, backgroundColor: 'lightgray', fontSize: 20, width: 300, marginTop: 20 }}
            placeholder="email"
        // onChangeText={() => {})}
        />
        <TextInput
            style={{ height: 50, backgroundColor: 'lightgray', fontSize: 20, width: 300, marginTop: 20 }}
            placeholder="password"
        // onChangeText={() => {})}  
        />
        <View style={{ marginTop: 50 }}></View>
        <View style={{ flexGrow: 1 }}></View>
        <TouchableOpacity style={{ backgroundColor: "lightblue", width: "80%", height: px(40), borderRadius: 5, marginBottom: 20 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 10 }}>LOGIN</Text>
        </TouchableOpacity>
    </View>
}
