import React, { useState } from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { Pressable, View, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


  // const LikeButton = () => {
  //   const [liked, setLiked] = useState(false);
  // const [active, setActive] = useState(false);

  //   return (
  //     // <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
  // <Pressable onPress={() => setActive((isActive) => !isActive)}>
  //     //   <Ionicons
  //     //     name={liked ? "ios-heart" : "heart-outline"}
  //     //     size={20}
  //     //     color={liked ? "red" : "#858b96"}
  //     //   />
  //     // </Pressable>
  //     <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
  //       <Animated.View
  //         style={[
  //           styles.absoluteFillObject,
  //           { transform: [{ scale: liked ? 0 : 1 }] },
  //         ]}
  //       >
  //         <MaterialCommunityIcons name={"heart-outline"} size={32} color={"black"} />
  //       </Animated.View>

  //       <Animated.View style={[{ transform: [{ scale: liked ? 1 : 0 }] }]}>
  //         <MaterialCommunityIcons name={"heart"} size={32} color={"red"} />
  //       </Animated.View>
  //     </Pressable>
  //   );
  // };

  const LikeButton = () => {
    const liked = useSharedValue(0);

    const outlineStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
          },
        ],
      };
    });

    const fillStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: liked.value,
          },
        ],
        opacity: liked.value,
      };
    });

  return (
    <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <Ionicons
          name={"heart-outline"}
          size={20}
          color={"#858b96"}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <Ionicons name={"heart"} size={20} color={"red"} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  card: {
    padding: 0,
    margin: 0,
  },
  tweet: {
    position: "absolute",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    // left: 0,
    bottom: 80,
  },
});

// export default LikeButton;
export default function AnimatedStyle(props) {
  return (
    <View
      style={{
        // flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <LikeButton />
    </View>
  );
}