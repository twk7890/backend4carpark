UserTrans = new Mongo.Collection("usertrans");

UserRequest = new Mongo.Collection("userrequest");

Place = new Mongo.Collection("place");

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.UserTrans = new Tabular.Table({
  name: "UserTrans",
  collection: UserTrans,
  columns: [
    {data: "carParkId", title: "CarParkId"},
    {data: "fee", title: "Fee per hour"},
    {data: "sDate", title: "Available Time"},
    {data: "state", title: "State"}
  ]
});

TabularTables.UserRequest = new Tabular.Table({
  name: "UserRequest",
  collection: UserRequest,
  columns: [
    {data: "TransId", title: "Transactions"},
    {data: "useId", title: "UsersId"},
    {data: "placeId", title: "PlaceId"},
    {data: "phonenum", title: "Phone Number"},
    {data: "comment", title: "Comment"},
    {data: "State", title: "State"},
    {data: "createdAt", title: "Created Time"}
  ]
});

TabularTables.Users = new Tabular.Table({
  name: "Users",
  collection: Meteor.users,
  columns: [
    {data: "emails[0].address", title: "User"},
    {data: "profile.role", title: "Role"}
  ]
});

TabularTables.Place = new Tabular.Table({
  name: "Place",
  collection: Place,
  columns: [
  	{data: "userId", title: "BossId"},
  	{data: "region", title: "Region"},
    {data: "activeTime", title: "Active Time"},
    {data: "address", title: "Place"},
    {data: "rendFee", title: "Rent per hour"},
    {data: "state", title: "State"},
    {data: "createdAt", title: "Created Time"}
  ]
});

Router.route('/', {
    name: 'Start',
    template: 'Start'
});

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/loginForm');
Router.route('/Charts');
Router.route('/UserTrans');
Router.route('/Request');
Router.route('/Users');
Router.route('/Place');


/* 
Place.find({state: true},);
*/