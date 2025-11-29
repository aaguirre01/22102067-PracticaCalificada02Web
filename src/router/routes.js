import LoginPage from '../components/Login.vue'
import DigimonList from '../components/DigimonList.vue'

const routes = [
  {
    path: '/',
    component: LoginPage   
  },
  {
    path: '/digimons',
    component: DigimonList 
  },

  // Ruta para errores o páginas inexistentes
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  }
]

export default routes
