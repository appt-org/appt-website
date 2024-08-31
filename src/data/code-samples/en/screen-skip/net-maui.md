# Skip content - .NET MAUI

In MAUI, skipping content is mostly relevant to [`TalkBack`](https://appt.org/en/docs/android/features/talkback) and [`VoiceOver`](https://appt.org/en/docs/ios/features/voiceover) users. Both screen readers include shortcuts that allow users to jump to content types. MAUI offers a built-in [`heading levels`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#heading-levels) feature that can be used to set up which elements and their position to read. You can also set [`AutomationProperties.IsInAccessibleTree`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#isinaccessibletree) to `false` if you want to make a UI element not available to the screen reader.

Usage (C#)

```csharp
var headerLabel = new Label
{
    Text = "Hello"
};
SemanticProperties.SetHeadingLevel(headerLabel, SemanticHeadingLevel.None);
AutomationProperties.SetIsInAccessibleTree(headerLabel, false);
```

Usage (XAML)

```xml
<Label
    SemanticProperties.HeadingLevel="None"
    AutomationProperties.IsInAccessibleTree="False"
    Text="Hello" />
```
