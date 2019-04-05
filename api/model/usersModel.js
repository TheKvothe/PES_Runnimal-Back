'use strict';
var Users = require('../db/Users');


exports.getAll = function(req,res) {
    return Users.find();
};



exports.getOne = function(email) {
    email = email.trim();
    return Users.findOne({'email': email});
};

exports.createUser = function(alias, email, password) {
    alias = alias.trim();
    email = email.trim();
    password = password.trim();
    return this.getOne(email).then((user) => {
        if (user) {
            return {'error': 'User already exists'};
        }            
        else {
            var usr = new Users({
                alias: alias,
                email: email,
                password: password
            });
            return usr.save();
        }
    }).catch(err=>{
        return {'error':err};
    });        
};

exports.editAlias = function(email, alias){
    return this.getOne(email).then(user=>{
        user.alias = alias; 
        return user.save();
    }).catch(err=>{
        return {'error': err};
    });
}

exports.deleteOne = function(email) {
    return this.getAll(email).then(user=>{
        return Users.remove({_id:user._id}).then(res=>{
            if (res){
                console.log(res);
                if (res['ok'] == 1) return {'result':'OK'};
                else return {'result':'KO'};
            }
        });
    }).catch(err=>{
        return {'error':err};
    });
};