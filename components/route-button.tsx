import type { LinkProps } from "expo-router";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type RouteButtonProps = {
  href: LinkProps["href"];
  text: string;
};

export function RouteButton({ href, text }: RouteButtonProps) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
