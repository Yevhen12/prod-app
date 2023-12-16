import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import cls from './AddCommentForm.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text?: string) => void
  text?: string
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm: FC<AddCommentFormProps> = ({ className = '', onSendComment }) => {
  const text = useSelector(getAddCommentFormText)
  // const error = useSelector(getAddCommentFormError)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onCommentTextChange('')
    onSendComment(text)
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('enterTextComment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
