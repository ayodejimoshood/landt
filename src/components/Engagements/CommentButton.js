import React, { useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

  const Comment = () => {
    const [comment, setComment] = useState(false);

    return (
      <Pressable onPress={() => setComment((isComment) => !isComment)}>
        <Ionicons
          name={comment ? "chatbubble" : "chatbubble-outline"}
          size={20}
          color={comment ? "red" : "#858b96"}
        />
      </Pressable>
    );
  };

export default Comment;