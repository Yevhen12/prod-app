import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'enteties/Article/model/selectors/articleDetails'
import { getUserAuthData } from 'enteties/User'

export const getUserCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetailsData,
  (user, article) => {
    if (!user || !article) {
      return false
    }

    return article.user.id === user.id
  }
)
