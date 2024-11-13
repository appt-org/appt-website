# Accessibility announcement - .NET MAUI

In MAUI, there is built-in support for posting accessibility announcements to the `TalkBack` or `VoiceOver` engine.

```csharp
SemanticScreenReader.Default.Announce("Appt announcement");
```

If you want to use attributed strings or add a delay, you can create your own service, such as `IA11yService`.

IA11YService interface:

```csharp
public interface IA11YService
{
  bool IsInVoiceOverMode { get; }
  Task Speak(string? text, int pauseInMs = 0);
}
```

IA11YService for Android:

```csharp
private static AccessibilityManager? AccessibilityManager => Android.App.Application.Context.GetSystemService(Android.Content.Context.AccessibilityService) as AccessibilityManager;

public bool IsInVoiceOverMode => AccessibilityManager is { IsEnabled: true, IsTouchExplorationEnabled: true };

public async Task Speak(string? text, int pauseInMs = 0)
{
  if (IsInVoiceOverMode && !string.IsNullOrEmpty(text))
  {
    if (pauseInMs > 0)
      await Task.Delay(pauseInMs);
    try
    {
      SemanticScreenReader.Announce(text);
    }
    catch (Exception e)
    {
      // Sometimes we get an exception: MauiContext must be set on parent
      System.Diagnostics.Debug.WriteLine($"A11YService.Android.Speak exception: {e.Message}");
    }
  }
}
```

IA11YService for iOS:

```csharp
public bool IsInVoiceOverMode => UIAccessibility.IsVoiceOverRunning;

public Task Speak(string? text, int pauseInMs = 0)
{
  if (IsInVoiceOverMode && !string.IsNullOrEmpty(text))
  {
    if (pauseInMs > 0)
    {
      var dict = new NSMutableDictionary
      {
        { UIView.SpeechAttributeQueueAnnouncement, new NSString("Yes") }
      };
      UIAccessibility.PostNotification(UIAccessibilityPostNotification.Announcement, new NSAttributedString(str: text, attributes: dict));
    }
    else
      UIAccessibility.PostNotification(UIAccessibilityPostNotification.Announcement, new NSString(text));
  }
  return Task.CompletedTask;
}
```
