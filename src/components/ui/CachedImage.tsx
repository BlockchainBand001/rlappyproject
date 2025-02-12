'use client';

import Image from 'next/image';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Skeleton } from '@mui/material';

interface CachedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function CachedImage({ src, alt, width, height, className }: CachedImageProps) {
  const { url, error } = useImageLoader(src);

  if (!url) {
    return <Skeleton variant="rectangular" width={width} height={height} />;
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '/fallback-image.jpg';
      }}
    />
  );
}