var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
  app.get('/users',function (req, res){
	User.findAll()
	.exec(function (error, users) {
		if(error){
			res.status(500).send(err);
		}else{
			res.json(users);
		}
});

module.exports = { 
  app: app,
  User: User
};
