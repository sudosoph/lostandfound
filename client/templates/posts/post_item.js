Template.postItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  itemtitle: function() {
    return this.itemtitle;
  },
  itemdescription: function() {
    return this.itemdescription;
  },
  locationtags: function() {
    return this.locationtags;
  },
  phone: function() {
    return this.phone;
  },
  email: function() {
    return this.email;
  }

});