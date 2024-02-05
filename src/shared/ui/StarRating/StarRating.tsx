import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, useState } from 'react'
import StarRatingIcon from '../../assets/icons/star-20-20.svg'
import Icon from '../Icon/Icon'
import cls from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (starsNumber: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

const StarRating: FC<StarRatingProps> = ({
  className = '',
  size = 30,
  selectedStars = 0,
  onSelect
}) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starCount: number) => {
    if (!isSelected) {
      setCurrentStarsCount(starCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (star: number) => {
    if (!isSelected) {
      onSelect?.(star)
      setCurrentStarsCount(star)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          Svg={StarRatingIcon}
          key={star}
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [currentStarsCount >= star ? cls.hovered : cls.normal])}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={() => onHover(star)}
          onClick={() => onClick(star)}
          data-testid={`StarRating.${star}`}
          data-selected={currentStarsCount >= star}
        />
      ))}
    </div>
  )
}

export default StarRating
