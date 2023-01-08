import addToFavoritesApi from '@/api/addToFavorites'

export const mutationTypes = {
  addToFavotitesStart: '[addToFavorites] addToFavoritesStart',
  addToFavotitesSuccess: '[addToFavorites] addToFavoritesSuccess',
  addToFavotitesFailed: '[addToFavorites] addToFavoritesFailed',
}

export const actionTypes = {
  addToFavorites: '[addToFavorites] addToFavorites',
}

const mutations = {
  [mutationTypes.addToFavotitesStart]() {},
  [mutationTypes.addToFavotitesSuccess]() {},
  [mutationTypes.addToFavotitesFailed]() {},
}

const actions = {
  [actionTypes.addToFavorites](context, {slug, isFavorited}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.addToFavotitesStart)
      const promise = isFavorited
        ? addToFavoritesApi.removeFromFavorites(slug)
        : addToFavoritesApi.addToFavorites(slug)
      promise
        .then((article) => {
          context.commit(mutationTypes.addToFavotitesSuccess, article)
          resolve(article)
        })
        .catch(() => {
          context.commit(actionTypes.addToFavotitesFailed)
        })
    })
  },
}

export default {
  actions,
  mutations,
}
