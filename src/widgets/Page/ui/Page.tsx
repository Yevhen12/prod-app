import { StateSchema } from '@/app/providers/StoreProvider'
import { getScrollPosition, scrollActions } from '@/features/ScrollRestoration'
import { FC, LegacyRef, MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID'

const Page: FC<PageProps> = ({ className = '', children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const scrollPosition = useSelector((state: StateSchema) => getScrollPosition(state, pathname))

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget) {
      dispatch(scrollActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop
      }))
    }
  }, 500)

  return (
    <main
      id={PAGE_ID}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef as LegacyRef<HTMLDivElement> | undefined} /> : null}
    </main>
  )
}

export default Page
