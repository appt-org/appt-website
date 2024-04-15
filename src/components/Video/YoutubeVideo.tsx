import YouTube, { YouTubeEvent } from 'react-youtube';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export type YoutubeVideoProps = {
  className?: string;
  title: string;
  youTubeId: string;
  onReady?: () => void;
};

export function YoutubeVideo({ className, youTubeId, title, onReady }: YoutubeVideoProps) {
  const { i18n } = useDocusaurusContext();

  async function handleReady(e: YouTubeEvent) {
    onReady?.();
    const iframeEl = await e.target.getIframe();
    iframeEl.focus();
  }

  return (
    <YouTube
      className={className}
      iframeClassName="w-full h-full"
      videoId={youTubeId}
      title={title}
      onReady={handleReady}
      opts={{
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          autoplay: 1,
          disablekb: 1,
          cc_lang_pref: i18n.currentLocale,
          hl: i18n.currentLocale,
          rel: 0,
          modestbranding: 1,
        },
      }}
    />
  );
}
