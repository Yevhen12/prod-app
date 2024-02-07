import { ArticleImageBlock } from '@/enteties/Article';
import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import Text, { TextAlign } from '@/shared/ui/Text/Text';
// import { useTranslation } from 'react-i18next'

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
  ({ className = '', block }: ArticleImageBlockComponentProps) => {
    // const { t } = useTranslation()
    return (
      <div className={classNames(cls.articleImageBlock, {}, [className])}>
        <img alt={block.title} src={block.src} className={cls.img} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  },
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';

export default ArticleImageBlockComponent;
