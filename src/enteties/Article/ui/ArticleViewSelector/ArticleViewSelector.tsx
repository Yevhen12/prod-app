import { ArticleView } from '../../model/consts/articleConsts'
import { FC } from 'react'
import ListIcon from '@/shared/assets/icons/articles-list.svg'
import ColumnIcon from '@/shared/assets/icons/articles-column.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import Icon from '@/shared/ui/Icon/Icon'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
  className?: string
  view?: ArticleView
  onChangeView?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: ListIcon
  },
  {
    view: ArticleView.SMALL,
    icon: ColumnIcon
  }
]

const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({ className = '', view, onChangeView }) => {
  return (
    <div>
      {viewTypes.map(viewType => (
        <Button
          className={cls.btn}
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={() => onChangeView?.(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames(cls.articleViewSelector, { [cls.selected]: viewType.view === view }, [className])}
          />
        </Button>
      ))}
    </div>
  )
}

export default ArticleViewSelector
