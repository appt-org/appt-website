# Dark mode - Jetpack Compose

In Jetpack Compose, you can detect dark mode by using the [`isSystemInDarkTheme`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/package-summary#isSystemInDarkTheme()) composable.

By default, Android Studio generates a Compose project with light and dark color schemes, which automatically change depending on the device's dark mode state.

By adding `-night` resources to your project, you can let Android automatically pick the right resources. For example, you can create drawable `ic_logo.xml` in `drawable` and `drawable-night` and Compose will automatically pick the right one depending on the theme.
