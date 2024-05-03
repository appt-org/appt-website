import { useState } from 'react';
import clsx from 'clsx';
import { PlayIcon } from '@site/src/icons';
import { Spinner, YoutubeVideo } from '@site/src/components';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Image } from '@site/src/components';

export type VideoProps = {
  youTubeId: string;
  title: string;
  image?: string;
  imageDark?: string;
  alt?: string;
};

export function Video({ youTubeId, title, image, imageDark, alt }: VideoProps) {
  const { i18n } = useDocusaurusContext();
  const youtubeThumbnailUrl = `https://img.youtube.com/vi/${youTubeId}/maxresdefault.jpg`;
  const fallbackYoutubeThumbnailUrl = `https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`;

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [thumbnailUrl, setThumbnailUrl] = useState(youtubeThumbnailUrl);

  const wrapperClasses = clsx('pb-[56.25%] relative w-full');
  const videoClasses = clsx('absolute left-0 top-0 w-full h-full');
  const videoLoaderClasses = clsx('bg-surface', videoClasses);

  const videoLoadingText = i18n.currentLocale === 'en' ? 'Loading video' : 'Video wordt geladen';
  const playWithThumbnailText =
    i18n.currentLocale === 'en'
      ? `Play video: ${title}. Contains image: ${alt}`
      : `Video afspelen: ${title}. Bevat afbeelding: ${alt}`;
  const playText = i18n.currentLocale === 'en' ? `Play video: ${title}` : `Video afspelen: ${title}`;
  const playButtonAriaLabel = alt ? playWithThumbnailText : playText;

  async function onReady() {
    setLoading(false);
  }

  return (
    <div className={wrapperClasses}>
      {playing && <YoutubeVideo className={videoClasses} youTubeId={youTubeId} title={title} onReady={onReady} />}
      {loading && (
        <div className={videoLoaderClasses}>
          <div className="relative w-full h-full">
            {image
         ? (
              <Image
                src={image
              
                }
                dark={imageDark}
                alt={alt ?? title}
                className="object-cover w-full h-full"
              />
            ) : (
              <Image
                src={thumbnailUrl}
                alt={title}
                onLoad={result => {
                  const target = result.target as HTMLImageElement;
                  // Youtube's maxresdefault.jpg thumbnails might not exist because it depends on the upload source of the video itself.
                  // It does return a 404, but also a small fallback thumbnail 120x90, which kind of ruins our way to easily catch the error
                  // to show a fallback thumbnail of hqdefault.jpg (which should always exist). We can however check the natural width and use that
                  // to determine if a fallback must be showed
                  target.naturalWidth <= 120 && setThumbnailUrl(fallbackYoutubeThumbnailUrl);
                }}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <button
            className="flex items-center justify-center absolute top-0 left-0 w-full h-full group"
            onClick={() => setPlaying(true)}
            aria-label={playButtonAriaLabel}>
            <span className="rounded-full flex items-center justify-center text-white transition-colors duration-300 ease-out-quint w-16 h-16 bg-dark-overlay backdrop-blur-sm group-hover:bg-accent md:w-24 md:h-24">
              {!playing ? (
                <PlayIcon className="w-10 h-10 md:w-16 md:h-16" />
              ) : (
                <Spinner className="md:w-10 md:h-10" loadingText={videoLoadingText} />
              )}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
