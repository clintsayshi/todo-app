import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Switch } from "react-native";

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, status } = this.props.todo;

    return (
      <View style={styles.card}>
        <Switch value={status} onValueChange={this.props.onToggle} />
        <Text style={styles.text}>{text}</Text>
        <Button title="Remove" onPress={this.props.onDelete} />
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  text: {
    flex: 1,
    fontSize: 16,
    textTransform: "capitalize",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
