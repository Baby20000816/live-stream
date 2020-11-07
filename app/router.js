/* eslint-disable no-unused-vars */
'use strict';

const manager = require('./model/manager');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // 用户注册
  router.post('/api/reg', controller.api.user.reg);
  // 用户登录
  router.post('/api/login', controller.api.user.login);
  // 退出登录
  router.post('/api/logout', controller.api.user.logout);
  // 获取当前用户信息
  router.get('/api/user/info', controller.api.user.info);
  // 创建直播间
  router.post('/api/live/create', controller.api.live.save);
  // 修改直播间状态
  router.post('/api/live/changestatus', controller.api.live.changeStatus);
  // 直播间列表
  router.get('/api/live/list/:page', controller.api.live.list);
  // 查看指定直播间
  router.get('/api/live/read/:id', controller.api.live.read);
  // 微信登录
  router.post('/api/wxLogin', controller.api.user.wxLogin);
  // 手机验证码登录
  router.post('/api/phoneLogin', controller.api.user.phoneLogin);
  // 发送手机验证码
  router.post('/api/sendcode', controller.api.sms.sendCode);
  router.get('/api/gift/list', controller.api.gift.list);
  router.get('/test', controller.admin.test.page);
  // dashbord首页
  router.get('/admin', controller.admin.home.index);
  // 管理员登录路由
  router.get('/admin/login', controller.admin.home.login);
  // 登出路由
  router.get('/admin/logout', controller.admin.home.logout);
  // 登录登出接口
  router.post('/admin/loginevent', controller.admin.home.loginevent);
  // 管理员模块列表路由
  router.get('/admin/manager', controller.admin.manager.index);
  // 创建管理员页面路由
  router.get('/admin/manager/create', controller.admin.manager.create);
  // 新增管理员接口
  router.post('/admin/manager', controller.admin.manager.save);
  // 编辑管理员
  router.get('/admin/manager/edit/:id', controller.admin.manager.edit);
  // 删除管理员
  router.get('/admin/manager/delete/:id', controller.admin.manager.delete);
  // 更新接口（编辑和删除公用）
  router.get('/admin/manager/:id', controller.admin.manager.update);
  // 上传为文件接口
  router.post('/admin/upload', controller.admin.common.upload);
  // 用户模块
  router.get('/admin/user', controller.admin.user.index);
  // 新增用户路由
  router.get('/admin/user/create', controller.admin.user.create);
  // 新增用户接口
  router.post('/admin/user', controller.admin.user.save);
  // 编辑用户路由
  router.get('/admin/user/edit/:id', controller.admin.user.edit);
  // 删除用户路由
  router.get('/admin/user/delete/:id', controller.admin.user.delete);
  // 更新用户数据接口
  router.post('/admin/user/:id', controller.admin.user.update);
  // socket路由配置测试
  // io.of('/').route('test', io.controller.nsp.test);
  io.of('/').route('joinLive', io.controller.live.joinLive);
  io.of('/').route('leaveLive', io.controller.live.leaveLive);
  io.of('/').route('comment', io.controller.live.comment);
  io.of('/').route('gift', io.controller.live.gift);
};
