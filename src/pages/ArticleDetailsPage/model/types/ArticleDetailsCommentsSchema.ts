import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/enteties/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading: boolean | undefined;
  error: string | undefined;
}
