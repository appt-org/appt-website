# Live captions - SwiftUI

In SwiftUI, [`AVPlayer`](https://developer.apple.com/documentation/avfoundation/avplayer) has built-in support for [live video](https://developer.apple.com/documentation/avfoundation/media_playback_and_selection/using_avfoundation_to_play_and_persist_http_live_streams) with [captions](https://developer.apple.com/documentation/avfoundation/media_playback_and_selection/adding_subtitles_and_alternative_audio_tracks). Users can [automatically turn on captions](https://support.apple.com/guide/iphone/subtitles-and-captions-iph3e2e23d1/ios) via System Preferences. The easiest way to stream a live video is through [`VideoPlayer`](https://developer.apple.com/documentation/avkit/videoplayer) view.

```swift
guard let url = URL(string: "https://appt.org/live-video") else { 
    return 
}

let player = AVPlayer(url: url)

VideoPlayer(player: player)
    // for a player on fullscreen
    .edgesIgnoringSafeArea(.all)
    .onAppear {
        player.play()
    }
```
