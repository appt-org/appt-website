# Accessibility role - Jetpack Compose

With Jetpack Compose you can use [`role`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role) to set the role of an element.

Note: there is no role defined for a modal or a link

```kotlin
modifier = Modifier.semantics {
    role = Role.Button
}
```