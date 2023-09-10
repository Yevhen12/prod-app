import { fetchProfileData, profileReducer, ProfileCard } from 'enteties/Profile'
import { FC, memo, useEffect } from 'react'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
