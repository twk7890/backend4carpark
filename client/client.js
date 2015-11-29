Template.logout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});


 Template.infoList.events({
    'click li': function(event){
      var listName = event.currentTarget.innerHTML;
      Session.set('listName', listName);
      var list = Session.get('listName');
      console.log(list);
    }

 });

