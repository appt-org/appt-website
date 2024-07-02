# Audio description - SwiftUI

In SwiftUI, you can integrate [`AVPlayer`](https://developer.apple.com/documentation/avfoundation/avplayer) which has support of [adding audio description](https://developer.apple.com/documentation/avfoundation/media_playback_and_selection/adding_subtitles_and_alternative_audio_tracks). Users can [enable audio description automatically](https://support.apple.com/en-us/HT205796) through System Preferences. Turning on audio description works automatically if you add the [`public.accessibility.describes-video`](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/1389809-describesvideoforaccessibility) property to the audio description track.

The code example below shows a basic implementation of enabling audio description embedded inside a video.

```swift
let composition = AVMutableComposition()

guard let videoUrl = Bundle.main.url(
    forResource: "Appt", 
    withExtension: "mp4"
) else { 
    return 
}

let videoAsset = AVURLAsset.init(url: videoUrl)

// Add video track to composition
if let videoTrack = try await videoAsset.loadTracks(withMediaType: .video).first,
   let videoCompositionTrack = composition.addMutableTrack(
        withMediaType: .video,
        preferredTrackID: kCMPersistentTrackID_Invalid
   ) {
    do {
        try await videoCompositionTrack.insertTimeRange(
            CMTimeRange(start: .zero, duration: videoAsset.load(.duration)),
            of: videoTrack,
            at: .zero
        )
    } catch { }
}

// Find and add the audio description track
for track in try await videoAsset.load(.tracks) {
    if try await track.load(.mediaCharacteristics).contains(.describesVideoForAccessibility) {
        if let audioCompositionTrack = composition.addMutableTrack(
                withMediaType: track.mediaType,
                preferredTrackID: kCMPersistentTrackID_Invalid
            ) {
            do {
                try await audioCompositionTrack.insertTimeRange(
                    CMTimeRange(start: .zero, duration: videoAsset.load(.duration)),
                    of: track,
                    at: .zero
                )
            } catch { }
            break
        }
    }
}
```
