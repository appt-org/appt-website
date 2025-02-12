# Scale text - Flutter

Flutter automatically scales the text on the screen to the text size set by the user. We recommend using [`ThemeData`](https://api.flutter.dev/flutter/material/ThemeData-class.html) to use the same text sizes and fonts everywhere.

Try to avoid using the setter of `textScaler` property because it overrides the text scale factor preferred by the user. The default factor is `1.0`, but can go as high as `4.0` for some users. Restricting the number means that some users might not be able to read the text.

There are valid use cases to restrict the text scale to a certain number. You can use [`MediaQuery`](https://api.flutter.dev/flutter/widgets/MediaQuery-class.html) to override the value globally. You can also override it for a single use case by using the property inside a [`Text`](https://api.flutter.dev/flutter/widgets/Text-class.html) widget.

```dart
// Override scale for all widgets
MediaQuery(
  data: MediaQuery.of(context).copyWith(
    textScaler: const TextScaler.linear(1.0)
    // or
    textScaler:  TextScaler.noScaling, 
  ),
  child: ...,
);
//or even shorter
MediaQuery.withNoTextScaling(
  child: ...,
)

// Override scale for a single widget
Text(
  'Appt', 
  textScaler: TextScaler.noScaling, 
);
```

