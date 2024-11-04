import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/faculty',
  },
  {
    path: '/faculty',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/faculty/appointment' },
      {
        path: 'appointment',
        component: () => import('pages/faculty/AppointmentPage.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/faculty/ProfilePage.vue'),
      },
      {
        path: 'notification',
        component: () => import('pages/faculty/NotificationPage.vue'),
      },
      {
        path: 'history',
        component: () => import('pages/faculty/HistoryPage.vue'),
      },
    ],
  },
  {
    path: '/student',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/student/courses' },
      {
        path: 'courses',
        component: () => import('pages/student/CoursesPage.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/student/ProfilePage.vue'),
      },
      {
        path: 'notification',
        component: () => import('pages/student/NotificationPage.vue'),
      },
      {
        path: 'history',
        component: () => import('pages/student/HistoryPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
