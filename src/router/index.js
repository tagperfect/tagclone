import {createRouter, createWebHistory} from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'
import McvRegister from '@/views/Register'
import McvLogin from '@/views/Login'
import McvArticle from '@/views/Article'
import McvCreateArticle from '@/views/CreateArticle'
import McvEditArticle from '@/views/EditArticle'
import McvSettings from '@/views/Settings'
import UserProfile from '@/views/UserProfile'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: McvRegister,
  },
  {
    path: '/login',
    name: 'login',
    component: McvLogin,
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: McvCreateArticle,
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: McvArticle,
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: McvEditArticle,
  },
  {
    path: '/settings',
    name: 'settings',
    component: McvSettings,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: UserProfile,
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: UserProfile,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
