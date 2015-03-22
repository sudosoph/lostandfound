Template.postEdit.created = function() {
  Session.set('postEditErrors', {});
}

Template.postEdit.helpers({
  errorMessage: function(field) {
    return Session.get('postEditErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
  }
});

Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      itemtitle: $(e.target).find('[name=itemtitle]').val(),
      itemdescription: $(e.target).find('[name=itemdescription]').val(),
      locationtags: $(e.target).find('[name=locationtags]').val(),
      name: $(e.target).find('[name=name]').val(),
      phone: $(e.target).find('[name=phone]').val(),
      email: $(e.target).find('[name=email]').val(),
    }

    var errors = validatePost(postProperties);
    if (errors.title || errors.url)
      return Session.set('postEditErrors', errors);

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});