# Accessibility state - React Native

In React Native you can use the [`accessibilityState`](https://reactnative.dev/docs/accessibility#accessibilitystate) object to set the accessibility state of an element. Available states include `disabled`, `selected`, `checked`, `busy` and `expanded`, among others.

```jsx
<Pressable 
  accessibilityState="{{ expanded: true }}" />
```
