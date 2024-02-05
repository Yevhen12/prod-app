import { classNames } from '@/shared/lib/classNames/classNames'
import Card from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { FC, useCallback, useState } from 'react'
import Text from '@/shared/ui/Text/Text'
import cls from './RatingCard.module.scss'
import StarRating from '@/shared/ui/StarRating/StarRating'
import Modal from '@/shared/ui/Modal/Modal'
import Input from '@/shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import Drawer from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

const RatingCard: FC<RatingCardProps> = ({
  className = '',
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onAccept,
  rate = 0
}) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [startsCount, setStartsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStartsCount: number) => {
    setStartsCount(selectedStartsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStartsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = () => {
    setIsModalOpen(false)
    onAccept?.(startsCount, feedback)
  }

  const cancelHandler = () => {
    setIsModalOpen(false)
    onCancel?.(startsCount)
  }

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('yourFeedback')} data-testid={'RatingCard.Input'} />
    </>
  )

  return (
    <Card max className={classNames(cls.ratingCard, {}, [className])} data-testid='RatingCard'>
      <VStack align='center' justify='center' gap='8' max>
        <Text title={startsCount ? t('thanksForFeedback') : title} />
        <StarRating selectedStars={startsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap='16'>
            {modalContent}
            <HStack max gap='16' justify='end'>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler} data-testid="RatingCard.Close">
                {t('close')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={acceptHandler} data-testid="RatingCard.Send">
                {t('send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer lazy isOpen={isModalOpen} onClose={cancelHandler}>
          <VStack gap='32'>
            {modalContent}
            <Button fullwidth theme={ButtonTheme.OUTLINE} onClick={acceptHandler}>
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
}

export default RatingCard
