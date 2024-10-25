// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{title: "Home"}} />
//       <Stack.Screen name="about" options={{title: "About"}} />
//     </Stack>
//   );
// }

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>

      {/* @tutinfo This is how a tab navigator is nested inside a stack navigator,
      especially when the Root layout is composed of a parent stack navigator.
      We're also setting the headerShown option to false
      to hide the header for the tab navigator. Otherwise, there will be two
      headers displayed on each screen. */}

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
