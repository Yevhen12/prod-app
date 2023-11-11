import { FC, LegacyRef, MutableRefObject, ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

const Page: FC<PageProps> = ({ className = '', children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLElement>

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  })

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
      {children}
      <div ref={triggerRef as LegacyRef<HTMLDivElement> | undefined} />
    </section>
  )
}

export default Page
