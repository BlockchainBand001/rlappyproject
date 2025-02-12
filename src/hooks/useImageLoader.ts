import { useState, useEffect } from 'react';

type ImageCache = {
  [key: string]: {
    url: string;
    version: string;
    timestamp: number;
  };
};

const IMAGE_CACHE_VERSION = '1.0.0';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const imageCache: ImageCache = {};

export const useImageLoader = (imageUrl: string) => {
  const [loadedUrl, setLoadedUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Check cache first
        const cached = imageCache[imageUrl];
        if (
          cached &&
          cached.version === IMAGE_CACHE_VERSION &&
          Date.now() - cached.timestamp < CACHE_DURATION
        ) {
          setLoadedUrl(cached.url);
          return;
        }

        // Load and cache image
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        // Update cache
        imageCache[imageUrl] = {
          url: objectUrl,
          version: IMAGE_CACHE_VERSION,
          timestamp: Date.now(),
        };

        setLoadedUrl(objectUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load image');
        // Use fallback image
        setLoadedUrl('/fallback-image.jpg');
      }
    };

    loadImage();

    // Cleanup
    return () => {
      if (loadedUrl) {
        URL.revokeObjectURL(loadedUrl);
      }
    };
  }, [imageUrl]);

  return { url: loadedUrl, error };
};
