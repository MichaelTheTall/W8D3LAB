const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('ItemView:item-delete-clicked', (evt) => {
    this.deleteItem(evt.detail);
  });

  PubSub.subscribe('ItemView:item-submitted', (evt) => {
    this.postItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function (item) {
  this.request.post(item)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.deleteItem = function (itemId) {
  this.request.delete(itemId)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

module.exports = BucketList;
