import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const BannerCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkHQrg5YTvT88WpkSZ-I3Q9PrkVed6mO8dg&s",
    "https://thumbs.dreamstime.com/b/different-gift-cards-many-brands-such-as-amazon-netflix-xbox-google-play-best-buy-spotify-montreal-canada-april-card-178512156.jpg",
    "https://news.seagm.com/wp-content/uploads/2021/03/pubgseason18featv2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCBQejRY4LxvMpH2iPZXvIuOcHcPRhgSt9A&s",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, banners.length]);

  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: "clamp",
    });
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[styles.bannerWrapper, { transform: [{ scale }], opacity }]}
      >
        <Image source={{ uri: item }} style={styles.bannerImage} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.bannerContainer}>
      <AnimatedFlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(newIndex);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  bannerWrapper: {
    width: width * 0.8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width * 0.1,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default BannerCarousel;
