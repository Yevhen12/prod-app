import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderType } from '@/shared/types';
import Select, { LabelOption } from '@/shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/enteties/Article';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: OrderType;
  onChangeOrder: (newOrder: OrderType) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = ({
  className = '',
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}) => {
  const { t } = useTranslation();
  const orderOptions = useMemo<Array<LabelOption<OrderType>>>(() => {
    return [
      {
        value: 'asc',
        content: t('asc'),
      },
      {
        value: 'desc',
        content: t('desc'),
      },
    ];
  }, [t]);

  const sortFieldOptions = useMemo<Array<LabelOption<ArticleSortField>>>(() => {
    return [
      {
        value: ArticleSortField.CREATED,
        content: t('createdAt'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      },
    ];
  }, [t]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sortOn')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        className={cls.order}
        label={t('on')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};

export default ArticleSortSelector;
