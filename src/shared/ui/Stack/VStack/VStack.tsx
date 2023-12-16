import { FC } from 'react'
import Flex, { FlexAlign, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

const VStack: FC<VStackProps> = (props) => {
  const align: FlexAlign = 'start'
  return (
    <Flex direction='column' {...props} align = {align} />
  )
}

export default VStack
