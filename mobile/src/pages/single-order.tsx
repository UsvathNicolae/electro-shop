import React, { useRef } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { px } from "../hooks/utils";
import Carousel from "pinar";

function Order() {

  return <View style={{ flex: 1, backgroundColor: "white", }}>
    <View style={{ flexGrow: 0.1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity>
        <Image source={require("../../assets/phone.jpg")} style={{ width: px(300), height: px(300) }} />
      </TouchableOpacity>
    </View>
    <View style={{ flexGrow: 1, backgroundColor: "#f3f9fe", borderTopEndRadius: px(50), borderTopLeftRadius: px(50) }}>
      <View style={{ flex: 1, margin: px(80), flexDirection: "column" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: px(18) }}>Product Name</Text>
        </View>
        <Text style={{ marginTop: px(10), fontSize: px(14), color: "gray" }}>Product Description</Text>
        <View style={{ marginTop: px(25), flexDirection: "row", borderStyle: "solid", justifyContent: "space-between", padding: px(20), borderWidth: 1, borderColor: "lightgray", borderRadius: px(10) }}>
          <Text>Price</Text>
          <Text style={{ fontWeight: "bold" }}>89$</Text>
        </View>
      </View>
    </View>
  </View>
}

export function SingleOrder() {
  const carouselRef = useRef<Carousel>(null);
  const orders = [1, 1, 1]
  // @ts-ignore
  return <Carousel
    autoplay={false}
    loop={false}
    key={Math.random()}
    ref={carouselRef}
    dotStyle={{ backgroundColor: "#e3e3f0", width: px(10), height: px(10), borderRadius: px(5), margin: px(5) }}
    activeDotStyle={{ backgroundColor: "#2981ff", width: px(10), height: px(10), borderRadius: px(5), margin: px(5) }}
  >
    {orders.map((item, index) => <Order key={index} />)}
  </Carousel>
}
