'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/list", controller.home.list); 
  router.get('/api/user/info', controller.api.user.info);
  router.get('/api/live/list/:page', controller.api.live.list);
  router.get('/api/live/read/:id', controller.api.live.read);
    // 用户注册
    router.post('/api/reg', controller.api.user.reg);
    // 用户登录
  router.post('/api/login', controller.api.user.login);
  router.post('/api/logout', controller.api.user.logout);
  router.post('/api/sendcode', controller.api.sms.sendCode);
  router.post('/api/phoneLogin', controller.api.user.phoneLogin);
  router.post('/api/wxLogin', controller.api.user.wxLogin);
  router.post('/api/live/create', controller.api.live.save);
  router.post('/api/live/changestatus',controller.api.live.changeStatus);
};
