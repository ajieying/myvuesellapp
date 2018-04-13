import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Goods from '@/components/goods/goods';
import Ratings from '@/components/ratings/ratings';
import Sellers from '@/components/sellers/sellers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/goods'
    },{
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    }
  ],
  linkActiveClass:'active'
});
