# Captions - SwiftUI

In SwiftUI, [`AVPlayer`](https://developer.apple.com/documentation/avfoundation/avplayer) offers support to [add captions](https://developer.apple.com/documentation/avfoundation/media_playback_and_selection/adding_subtitles_and_alternative_audio_tracks). Users can [automatically turn on subtitles](https://support.apple.com/nl-nl/guide/iphone/iph3e2e23d1/ios) via System Preferences.

The code example below shows a basic implementation of adding captions.

```swift
// Create a mutable composition
let videoComposition = AVMutableComposition()

// Add video track
guard let videoTrack = videoComposition.addMutableTrack(
    withMediaType: .video,
    preferredTrackID: kCMPersistentTrackID_Invalid
) else {
    return
}

guard let videoUrl = Bundle.main.url(forResource: "Appt", withExtension: "mp4") else {
    return
}

let videoAsset = AVURLAsset.init(url: videoUrl)
try await videoTrack.insertTimeRange(
    CMTimeRangeMake(start: .zero, duration: videoAsset.load(.duration)),
    of: videoAsset.loadTracks(withMediaType: .video)[0],
    at: .zero
)

// Add captions track
guard let captionsUrl = Bundle.main.url(
    forResource: "Appt",
    withExtension: ".vtt"
) else {
    return
}
guard let captionsTrack = videoComposition.addMutableTrack(
    withMediaType: .text,
    preferredTrackID: kCMPersistentTrackID_Invalid
) else {
    return
}

let captionsAsset = AVURLAsset(url: captionsUrl)
try? await captionsTrack.insertTimeRange(
    CMTimeRangeMake(start: .zero, duration: videoAsset.load(.duration)),
    of: captionsAsset.loadTracks(withMediaType: .text)[0],
    at: .zero
)
```
