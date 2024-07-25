import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'

import StudentListView from '@/views/StudentListView.vue'
import nProgress from 'nprogress'
import { useEventStore } from '@/stores/event'
import EventService from '@/services/EventService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
    },
      {
        path: '/event/:id',
        name: 'event-layout-view',
        component: EventLayoutView,
        props: true,
        beforeEnter: (to) => {
          const id = parseInt(to.params.id as string)
          const eventStore = useEventStore()
          return EventService.getEvent(id)
          .then((Response) => {
            eventStore.setEvent(Response.data)
          })
          .catch((error) => {
            if (error.Response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'event' }
              }
            }else {
              return { name: 'network-error-view'}
            }
          })
      },
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/Student',
      name: 'student',
      component: StudentListView
    }
  ]
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done
})

export default router
