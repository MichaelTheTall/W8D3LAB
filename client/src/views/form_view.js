const PubSub = require('../helpers/pub_sub.js');

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newItem = {
    goal: evt.target.goal.value,
    description: evt.target.description.value
  };
  PubSub.publish('ItemView:item-submitted', newItem);
  this.form.reset();
};

module.exports = FormView;
