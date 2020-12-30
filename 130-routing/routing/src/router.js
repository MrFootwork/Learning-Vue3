import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true
        }
      ]
    }, // our-domain.com/teams => ...
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('beforeEnter on "/users"');
        console.log(to, from);
        next();
      }
    }, // our-domain.com/users => ...
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'team-members') next();
  // else next({ name: 'team-members', params: { teamId: 't2' } });
  next();
});

router.afterEach((to, from, failure) => {
  if (failure) {
    console.log('failed navigation', failure);
  }
  console.log('Global AfterEach');
  console.log(to, from);
});

export default router;
