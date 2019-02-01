'use strict';
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const ret = await app.model.models.Test.findAll();
      const { ctx } = this;
      ctx.body = ret;
    }
  };
};
