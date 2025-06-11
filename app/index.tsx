import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.messageContainer}>
        <View>
          <Text style={styles.individualMessage}>Plan.</Text>
        </View>
        <View>
          <Text style={styles.individualMessage}>Book.</Text>
        </View>
        <View>
          <Text style={styles.individualMessage}>Manage.</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Link href="/sign-up" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </Link>
        <Link href="/log-in" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
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
    display: "flex",
    flexDirection: "column",
  },
  individualMessage: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 15,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 150,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
