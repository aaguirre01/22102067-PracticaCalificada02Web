import LoginPage from '../components/Login.vue'
import DigimonList from '../components/DigimonList.vue'

const routes = [
  {
    path: '/',
    component: LoginPage   // 👉 Carga tu login como página principal
  },
  {
    path: '/digimons',
    component: DigimonList // 👉 Carga la lista de Digimons
  },

  // Ruta para errores o páginas inexistentes
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  }
]

export default routes
