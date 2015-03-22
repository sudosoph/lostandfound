Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Posts.deny({
  update: function(userId, post, fieldNames, modifier) {
    var errors = validatePost(modifier.$set);
    return errors.itemtitle;
  }
});

validatePost = function (post) {
  var errors = {};

  if (!post.itemtitle)
    errors.itemtitle = "Please fill in an item title";

  return errors;
}

Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);
    check(postAttributes, {
      itemtitle: String,
      itemdescription: String,
      locationtags: String,
      name: String,
      phone: String,
      email: String
    });

    var errors = validatePost(postAttributes);
    if (errors.itemtitle || errors.itemdescription || errors.locationtags || errors.name || errors.phone || errors.email)
      throw new Meteor.Error('invalid-post', "You must submit the required fields for your post");

    var postWithSameLink = Posts.findOne({itemtitle: postAttributes.name});
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
