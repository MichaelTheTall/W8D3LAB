const FormView = require('./views/form_view.js')
const ItemListView = require('./views/item_list_view.js');
const BucketList = require('./model/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const itemsForm = document.querySelector('form#items-form');
  const itemsFormView = new FormView(itemsForm);
  itemsFormView.bindEvents();

  const itemsContainer = document.querySelector('div#list');
  const itemsListView = new ItemListView(itemsContainer);
  itemsListView.bindEvents();

  const items = new BucketList();
  items.bindEvents();
  items.getData();
});
