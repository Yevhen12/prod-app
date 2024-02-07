import { FC } from 'react';
import Flex, { FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

const VStack: FC<VStackProps> = (props) => {
  return <Flex direction="column" {...props} />;
};

export default VStack;
