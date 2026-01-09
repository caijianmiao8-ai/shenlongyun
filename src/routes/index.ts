import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/filings',
    name: 'filings',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('@/views/home/newWeb.vue'),
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/pay/index.vue'),
  },
  {
    path: '/renew',
    name: 'renew',
    component: () => import('@/views/renew/index.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/agreement/privacy.vue'),
  },
  {
    path: '/user_agreement',
    name: 'user_agreement',
    component: () => import('@/views/agreement/userAgreement.vue'),
  },
  {
    path: '/delete_agreement',
    name: 'delete_agreement',
    component: () => import('@/views/agreement/deleteAgreement.vue'),
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: () => import('@/views/agreement/disclaimer.vue'),
  },
  {
    path: '/AuthorizationAgreement',
    name: 'authorizationAgreement',
    component: () => import('@/views/agreement/authorizationAgreement.vue'),
  },
  {
    path: '/AutoRenewalAgreement',
    name: 'autoRenewalAgreement',
    component: () => import('@/views/agreement/autoRenewalAgreement.vue'),
  },
  {
    path: '/PurchaseAgreement',
    name: 'purchaseAgreement',
    component: () => import('@/views/agreement/purchaseAgreement.vue'),
  },
  {
    path: '/code',
    name: 'queryCode',
    component: () => import('@/views/queryCode/index.vue'),
  },
  {
    path: '/slyAuthorizationAgreement',
    name: 'slyAuthorizationAgreement',
    component: () => import('@/views/agreement/slyAuthorizationAgreement.vue'),
  },
  {
    path: '/slyDeleteAgreement',
    name: 'slyDeleteAgreement',
    component: () => import('@/views/agreement/slyDeleteAgreement.vue'),
  },
  //{
  //配置404页面
  //path: '/:catchAll(.*)',
  //name: '404',
  //component: () => import(''),
  //}
];
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出
export default router;
