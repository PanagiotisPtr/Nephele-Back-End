const Creator = require('../Models/CreatorModel');
const { DefaultController } = require('./DefaultController');

class CreatorController extends DefaultController {
  constructor() {
    super(Creator);
  }
}

module.exports = {
  CreatorController
};
