import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Appoinment Manager",
        }}
      />

      <Stack.Screen
        name="sign-up"
        options={{
          title: "Sign Up",
        }}
      />
      <Stack.Screen
        name="log-in"
        options={{
          title: "Log In",
        }}
      />
    </Stack>
  );
}
