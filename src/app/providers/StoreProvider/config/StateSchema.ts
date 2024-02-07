import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ProfileSchema } from '@/features/EditableProfileCard';
import {
  ReducersMapObject,
  AnyAction,
  CombinedState,
  Reducer,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterShema } from '@/enteties/Counter';
import { UserSchema } from '@/enteties/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/enteties/Article';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ArticlePageSchema } from '@/pages/ArticlePage';
import { IScrollRestorationSchema } from '@/features/ScrollRestoration';

export interface StateSchema {
  counter: CounterShema;
  user: UserSchema;
  scroll: IScrollRestorationSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlePageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api?: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  // extra: ThunkExtraArg
  // Todo: figure out why extra: ThunkExtraArg is not working
  extra: any;
  state: StateSchema;
}
