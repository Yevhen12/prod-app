import {
  FC,
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

const AppImage: FC<AppImageProps> = memo((props: AppImageProps) => {
  const {
    className = '',
    alt = 'image',
    src,
    fallback,
    errorFallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} alt={alt} className={className} {...otherProps} />;
});

AppImage.displayName = 'AppImage';

export default AppImage;
