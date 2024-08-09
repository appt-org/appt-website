# Live captions - .NET MAUI

On MAUI, you can use [`MediaElement`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/views/mediaelement) to embed videos. Unfortunately, there is no built-in there is no built-in support for live captions,
in this case a custom control will be require to support it, you can see the next options:

- [`Custom Handler`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/handlers/create) to create a control from the scratch.
- [`Platform Behavior`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/behaviors#platform-behaviors) to extend the MediaElement component.
- Create a Native Binding to expose any native third party library that support this feature via [Native Library Interop for .NET MAUI](https://github.com/CommunityToolkit/Maui.NativeLibraryInterop?tab=readme-ov-file)

```xml
Not available, contribute!
```
