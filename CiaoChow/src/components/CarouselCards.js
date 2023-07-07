import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem from './CarouselCardItem'
import { Color, Border } from "../GlobalStyles";
import { calculateSize } from '../utils/scale';

const { width } = Dimensions.get('window')

const CarouselCards = ({ data_food }) => {
  let isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const goToNext = () => {
    isCarousel.snapToNext();
  }

  const goToPrev = () => {
    isCarousel.snapToPrev();
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 9 }}>
        <Carousel
          ref={(c) => { isCarousel = c }}
          onSnapToItem={index => setIndex(index)}
          loop={false}
          layout="tinder"
          data={data_food}
          renderItem={CarouselCardItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { index % 2 ? goToNext() : goToPrev() }} style={styles.findNextBtn}>
          <Text style={{ color: '#FFFFFF', fontSize: calculateSize(16), fontWeight: '600' }}>Nah! Find something else.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  findNextBtn: {
    height: calculateSize(54),
    width: width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_3xs,
    backgroundColor: Color.brandColorGreen
  }
})

export default CarouselCards