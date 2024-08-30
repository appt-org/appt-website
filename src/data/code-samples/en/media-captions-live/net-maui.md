# Live captions - .NET MAUI

In MAUI, you can use [`MediaElement`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/views/mediaelement) to embed videos. Unfortunately, there is no built-in support for live captions. In this case, a custom control will be required to support it. You can consider the following options:

- Use a [`Custom Handler`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/handlers/create) to create a control from scratch.
- Use a [`Platform Behavior`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/behaviors#platform-behaviors) to extend the `MediaElement` component.
- Create a native binding to expose any native third-party library that supports this feature via [Native Library Interop for .NET MAUI](https://github.com/CommunityToolkit/Maui.NativeLibraryInterop?tab=readme-ov-file).

```xml
Not available, contribute!
```
