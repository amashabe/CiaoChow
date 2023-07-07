import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView } from "react-native"
import { calculateSize } from '../utils/scale';
import { Color } from '../GlobalStyles';
const { width, height } = Dimensions.get('window')

const CarouselCardItem = ({ item, index }) => {
    const { Title, Description } = item.attributes;
    return (
        <View key={index} style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <Image source={{ uri: `https://ciaochow.plusnarrative.biz${item.attributes.Image.data[0].attributes.url}` }} style={styles.image} />
            </View>
            <View style={{ flex: 4, borderTopRightRadius: calculateSize(30), borderTopLeftRadius: calculateSize(30), backgroundColor: '#FFF', padding: calculateSize(21) }}>
                <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: "#333", fontSize: calculateSize(24), fontWeight: '600' }}>{Title}</Text>
                    <View style={{ height: calculateSize(31), width: calculateSize(31), borderRadius: 9, backgroundColor: 'rgba(0, 0, 0, 0.56)', justifyContent: "center", alignItems: 'center' }}>
                        <Image source={require("../../assets/layer-11.png")} />
                    </View>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ borderBottomColor: Color.brandColorGreen, borderBottomWidth: calculateSize(5), marginBottom: calculateSize(35) }} >
                        <Text style={{ paddingLeft: calculateSize(39), paddingRight: calculateSize(37), color: Color.brandColorGreen, }}>Description</Text>
                    </View>
                    <Text style={{ paddingLeft: calculateSize(39), paddingRight: calculateSize(37), paddingBottom: calculateSize(21) }}>Nutrition facts</Text>
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ color: '#828282', fontSize: calculateSize(13), letterSpacing: calculateSize(0.26), fontWeight: '400' }}>{Description}</Text>
                </View>
            </View>
        </View>
    )
}

export default CarouselCardItem;

const styles = StyleSheet.create({
    image: {
        height: height * 0.40,
        width: width,
        resizeMode: 'cover'
    }
})


{/* <View style={styles.container} key={index}>
            <Image source={{ uri: `https://ciaochow.plusnarrative.biz${item.attributes.Image.data[0].attributes.url}` }} style={styles.image} />
            <View style={{ backgroundColor: '#fff', flex: 1, height: height * 0.7 }}>
                <Text style={{color:'#000'}}>
                    {item.attributes.Description}
                </Text>
            </View>
        </View> */}