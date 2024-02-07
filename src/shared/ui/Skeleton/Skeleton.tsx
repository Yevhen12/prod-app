import { CSSProperties, FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = memo(
  ({ className = '', height, width, border }: SkeletonProps) => {
    const styles: CSSProperties = {
      width,
      height,
      borderRadius: border,
    };
    return (
      <div
        style={styles}
        className={classNames(cls.skeleton, {}, [className])}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
