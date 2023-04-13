import React, { useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

  const ShareButton = () => {
    const [liked, setLiked] = useState(false);

    return (
      <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
        <Ionicons
          name={liked ? "share" : "share-outline"}
          size={20}
          color={liked ? "red" : "#858b96"}
        />
      </Pressable>
    );
  };

export default ShareButton;