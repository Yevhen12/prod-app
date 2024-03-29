import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '@/shared/ui/Input/Input';
import { Listbox } from '@/shared/ui/Popups';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/enteties/Rating';
import { AppRoutes } from '@/shared/const/router';
import { Counter } from '@/enteties/Counter';

// interface Props {}

const MainPage: React.FC = memo(() => {
  const { t } = useTranslation(AppRoutes.MAIN);
  const [value, setValue] = useState<string>();

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page data-testid="MainPage">
      {t('main')}
      <Input value={value} onChange={onChange} placeholder="Type text" />
      <div>This is test text</div>
      <div>twtttd</div>
      <div>twtttd</div>
      <Counter />
      <HStack>
        <div>twtttd</div>
        <Listbox
          defaultValue="some value"
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            { value: 'test1', content: 'test1' },
            { value: 'test2', content: 'test2', disabled: true },
            { value: 'test3', content: 'test3', disabled: false },
          ]}
        />
      </HStack>
      <RatingCard
        title="Your feedback"
        feedbackTitle="Leave your feedback"
        hasFeedback
      />
    </Page>
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
