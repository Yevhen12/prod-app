import { getAddCommentFormText } from './model/selectors/addCommentFormSelectors';
import { AddCommentFormSchema } from './model/types/addCommentForm';
import { AddCommentFormAsync } from './ui/AddCommentForm/AddCommentForm.async';

export {
  type AddCommentFormSchema,
  AddCommentFormAsync as AddCommentForm,
  getAddCommentFormText,
};
