import { StateSchema } from 'app/providers/StoreProvider'
import { getScrollPosition } from 'features/ScrollRestoration'
import { scrollActions } from 'features/ScrollRestoration/model/slice/slice'
import { FC, LegacyRef, MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

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
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef as LegacyRef<HTMLDivElement> | undefined} /> : null}
    </section>
  )
}

export default Page
