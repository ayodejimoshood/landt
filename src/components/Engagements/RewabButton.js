import React, { useState } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";


  const Rewab = () => {
    const [liked, setLiked] = useState(false);

    return (
      <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
        <AntDesign
          name={liked ? "retweet" : "retweet"}
          size={20}
          color={liked ? "#8e7aea" : "#858b96"}
        />
      </Pressable>
    );
  };

export default Rewab;