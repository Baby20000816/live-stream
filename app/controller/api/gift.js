/* eslint-disable no-unused-vars */
'use strict';

const await = require('await-stream-ready/lib/await');

const Controller = require('egg').Controller;
class GiftController extends Controller {
  async list() {
    const { ctx, app } = this;
    const list = await app.model.Gift.findAll();
    ctx.apiSuccess(list);
  }

}
module.exports = GiftController;
