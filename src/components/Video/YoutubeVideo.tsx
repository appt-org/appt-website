import YouTube, { YouTubeEvent } from "react-youtube";

export type YoutubeVideoProps = {
  className?: string;
  title: string;
  videoId: string;
  locale: string;
  onReady?: () => void;
};

export function YoutubeVideo({
  className,
  videoId,
  title,
  onReady,
  locale,
}: YoutubeVideoProps) {
  async function handleReady(e: YouTubeEvent) {
    onReady?.();
    const iframeEl = await e.target.getIframe();
    iframeEl.focus();
  }

  return (
    <YouTube
      className={className}
      iframeClassName="w-full h-full"
      videoId={videoId}
      title={title}
      onReady={handleReady}
      opts={{
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          disablekb: 1,
          cc_lang_pref: locale,
          hl: locale,
          rel: 0,
          modestbranding: 1,
        },
      }}
    />
  );
}
