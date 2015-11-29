
Template.loginForm.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
    if(error){
        window.alert("The username or the password are wrong.");
    } else {
        Router.go("Start");
    }
});
    }
});