import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.main}>
      <View>
        <View style={styles.messageContainer}>
          <Text style={styles.individualMessage}>Plan.</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.individualMessage}>Book.</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.individualMessage}>Manage.</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Link href="/sign-up" asChild>
          <Button title="Sign up" />
        </Link>
        <Link href="/log-in" asChild>
          <Button title="Log in" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageContainer: {
    paddingTop: 50,
    width: "100%",
  },
  individualMessage: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 150,
  },
});
