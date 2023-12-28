import { FC, memo } from 'react'
import Page from '@/widgets/Page/ui/Page'
import VStack from '@/shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import Text from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

export interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  if (!id) {
    return <Text text={t('profileNotFound')} />
  }

  return (
    <Page>
      <VStack gap='16' max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
