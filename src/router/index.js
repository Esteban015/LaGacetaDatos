import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/inicio'
import Graficos from '@/components/graficos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/graficos',
      name: 'graficos',
      component: Graficos
    }
  ]
})
