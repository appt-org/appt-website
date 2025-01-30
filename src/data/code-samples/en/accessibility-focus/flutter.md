# Accessibility focus - Flutter

In Flutter, you can use a [`FocusSemanticEvent`](https://api.flutter.dev/flutter/semantics/FocusSemanticEvent-class.html) to move the accessibility focus.

This API is generally not recommended because it can disrupt users' expectations of accessibility focus.

It should be used carefully and only in specific cases, like replacing a focused rendering object with another, though such designs should generally be avoided.

Note: do not use `FocusNode` or `Semantics.focused`, these methods should only be used for keyboard or input focus.

```dart
class ApptWidget extends StatelessWidget {
  final GlobalKey _key = GlobalKey();

  @override
  Widget build(BuildContext context) {
    // Ensure focus change occurs after rendering.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _key.currentContext
          ?.findRenderObject()
          ?.sendSemanticsEvent(const FocusSemanticEvent());
    });

    return Text('FocusSemanticEvent', key: _key);
  }
}
```
