import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { OrderItem } from "../components/order-component";
import { useAuthService } from "../contexts/auth-context";
import { px, useAppNavigation, useEffectAsync } from "../hooks/utils";

export interface OrderType {
    createdAt: string,
    id: number,
    title: string,
    totalPrice: number,
    updatedAt: string,
    userId: number
}

export function OrderList() {
    const nav = useAppNavigation();
    const { loginInfo, setLoginInfo } = useAuthService();
    const [orders, setOrders] = useState<OrderType[]>();
    useEffectAsync(async () => {
        // if it is not working please change localhost to your internal IPv4 address
        await fetch("http://localhost:8080/order/get", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loginInfo?.token}`
            }
        }).then((data) => {
            return data.json();
        }).then((result) => setOrders(result)).catch((error) => {
            console.log("error: ", error)
        })
    }, [])

    return <ScrollView>
        <TouchableOpacity onPress={() => {
            setLoginInfo(undefined);
            nav.navigate("Login");
        }} style={{ width: px(80), padding: px(5), position: "absolute", right: px(13), top: px(13), justifyContent: "flex-end", borderRadius: px(8), backgroundColor: "lightskyblue" }}>
            <Text style={{ textAlign: "center", }}>LOG OUT</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginTop: px(40) }}>
            {orders?.map(order => <OrderItem key={order.id} orderId={order.id} date={order.createdAt} price={order.totalPrice} />)}
        </View>
    </ScrollView>
}
