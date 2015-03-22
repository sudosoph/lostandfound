// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sophId = Meteor.users.insert({
    profile: { name: 'Sophia' }
  });
  var soph = Meteor.users.findOne(sophId);

  var gracieId = Meteor.users.insert({
    profile: { name: 'Gracie' }
  });
  var gracie = Meteor.users.findOne(gracieId);

  var carolynId = Meteor.users.insert({
    profile: { name: 'Carolyn' }
  });
  var carolyn = Meteor.users.findOne(carolynId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    itemtitle: 'Coat',
    userId: sacha._id,
    author: sacha.profile.name,
    itemdescription: 'Big brown Calvin Klein coat',
    locationtags: 'Math Room C144',
    phone: '893-239-9231',
    email: 'sacha@gmail.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'I think I found your coat!'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'Thanks Tom!'
  });

  var telescopeId = Posts.insert({
    itemtitle: 'Bomber jacket',
    userId: gracie._id,
    author: gracie.profile.name,
    itemdescription: 'Black leather jacket',
    locationtags: 'Farrand Field',
    phone: '382-109-2931',
    email: 'gracie@gmail.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 3
  });

  Comments.insert({
    postId: telescopeId,
    userId: soph._id,
    author: soph.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'I also lost my jacket yesterday!'
  });

  Comments.insert({
    postId: telescopeId,
    userId: carolyn._id,
    author: carolyn.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'Did you leave it in the amphitheater by any chance?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: gracie._id,
    author: gracie.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'Found it! Sacha found it in the library.'
  });

  Posts.insert({
    itemtitle: 'Socks',
    userId: tom._id,
    author: tom.profile.name,
    itemdescription: 'Gray and blue striped socks',
    locationtags: 'Laundry Room, Sewall Hall',
    phone: '324-541-9889',
    email: 'tom@gmail.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    itemtitle: 'Lunchbox',
    userId: soph._id,
    author: soph.profile.name,
    itemdescription: 'Vintage 1950s lunchbox',
    locationtags: 'Libby dining hall',
    phone: '535-987-0129',
    email: 'soph@gmail.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 1
  });

  Comments.insert({
    postId: telescopeId,
    userId: soph._id,
    author: soph.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'I saw a superwoman lunchbox in the dining hall lost and found.'
  });

  Posts.insert({
    itemtitle: 'Biology notebook',
    userId: carolyn._id,
    author: carolyn.profile.name,
    itemdescription: 'Green engineering pad notebook',
    locationtags: 'Biology lab',
    phone: '394-281-4093',
    email: 'carolyn@gmail.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0
  });

  }