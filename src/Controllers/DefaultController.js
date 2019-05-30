const { ErrorHandler } = require('../Utility/errorHandler');

class DefaultController {
  constructor(model) {
    this.model = model;
    this.errorHandler = new ErrorHandler();
  }

  index(_, res) {
    this.model.get((err, instance) => {
      if(err) return this.errorHandler.res_error(res, err);
      res.json({
        status: 'success',
        data: instance
      });
    });
  }

  view(req, res) {
    this.model.findById(req.params.id, (err, instance) => {
      if(err) return this.errorHandler.res_error(res, err);
      res.json({
        status: 'success',
        data: instance
      });
    });
  }

  create(req, res) {
    this.model.create(req.body, (err, instance) => {
      if(err) return this.errorHandler.res_error(res, err);
      res.json({
        status: 'success',
        data: instance
      });
    });
  }

  makeChange(original, update) {
    for(let prop in original)
      if(update[prop])
        original[prop] = update[prop];
  }

  update(req, res) {
    this.model.findById(req.params.id, (err, instance) => {
      if(err) return this.errorHandler.res_error(res, err);
      this.makeChange(instance, req.body);
      instance.save(err => {
        if(err) return this.errorHandler.res_error(res, err);
        res.json({
          status: 'success',
          data: instance
        });
      });
    });
  }
  
  delete(req, res) {
    this.model.remove({_id: req.params.id}, (err, _) => {
      if(err) return this.errorHandler.res_error(res, err);
      res.json({
        status: 'success'
      });
    });
  }
}

module.exports = {
  DefaultController
};