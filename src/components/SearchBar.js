import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";

export default class App extends React.Component {
  // state = {
  //   search: "",
  // };

  // updateSearch = (search) => {
  //   this.setState({ search }, () => this.props.search(this.state.search));
  // };

  render() {
    // const { search } = this.state;

    return (
      <SearchBar
        round
        ref={search => this.search = search}
        placeholder="search wabbling"
        // onChangeText={this.updateSearch}
        platform={Platform.OS}
        containerStyle={{backgroundColor: 'transparent', widthx: '100%', alignSelf: 'center', height: 40, marginBottom: 0}}
        // leftIconContainerStyle={{width: 20}}
        // searchIcon={{ size: 24 }}
        searchIcon={{alignSelf: 'center', textAlign: 'center', alignItems: 'center'}}
        // platform="android"
        // value={search}
        // lightTheme={true}
        // cancelIconColor="red"
        inputContainerStyle={{
          marginLeft: 0,
          // marginRight: 0
        }}
        inputStyle={{ fontSize: 16, textAlignx: 'center' }}
      />
    );
  }
}
