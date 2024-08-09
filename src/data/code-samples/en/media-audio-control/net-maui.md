# Audio control - .NET MAUI

On MAUI there no built-in audio control, but you can use the [`MediaElement`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/views/mediaelement) from the [`MAUI Community Toolkit`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui) which sufaces the next natives components:

- Exoplayer, [`Android`](https://developer.android.com/media/media3/exoplayer)
- AVPlayer, [`iOS`](https://learn.microsoft.com/en-us/dotnet/api/avfoundation.avplayer)

Usage (C#)

```csharp

var mediaElement = new MediaElement
{
    ShouldAutoPlay = true,
    Source = "TheUrlOrPathForYouAudio.mp3"
};

```

Usage (XAML)

```xml

xmlns:toolkit="http://schemas.microsoft.com/dotnet/2022/maui/toolkit"
<toolkit:MediaElement 
    Source="TheUrlOrPathForYouAudio.mp3"
    ShouldAutoPlay="True" />

```
