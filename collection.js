UserTrans = new Mongo.Collection("usertrans");

UserRequest = new Mongo.Collection("userrequest");

Place = new Mongo.Collection("place");

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.UserTrans = new Tabular.Table({
  name: "UserTrans",
  collection: UserTrans,
  columns: [
    {data: "userId", title: "User"},
    {data: "sTime", title: "Start Time"},
    {data: "eTime", title: "End Time"},
    {data: "address", title: "Address"}
  ]
});

TabularTables.UserRequest = new Tabular.Table({
  name: "UserRequest",
  collection: UserRequest,
  columns: [
    {data: "userId", title: "User"},
    {data: "carId", title: "License Plate"},
    {data: "phonenum", title: "Phone Number"},
    {data: "sTime", title: "Start Time"},
    {data: "eTime", title: "End Time"},
    {data: "State", title: "State"}
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
  	{data: "userId", title: "Boss"},
  	{data: "region", title: "Region"},
    {data: "address", title: "Place"},
    {data: "state", title: "State"}
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
Router.route('/UserTrans');
Router.route('/Request');
Router.route('/Users');
Router.route('/Place');


/* 
Place.find({state: true},);
*/