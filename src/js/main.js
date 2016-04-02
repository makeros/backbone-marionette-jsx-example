require("./prototypal-helpers.js")();
Backbone = require('backbone'),
Marionette = require('backbone.marionette'),
$ = require("jquery"),
_ = require("underscore");
Chance = require("chance");

var chance = new Chance();

var SampleView = require("./test-view"),
    ChildeSampleView = require("./test-child-view")

var sampleView = new SampleView();

sampleView.on("poke-another-view", function () {
    var child = new ChildeSampleView({
        model: new Backbone.Model({
            name: chance.name()
        })
    });
    child.render();
    $("body").append(child.$el);
});

sampleView.render();

$(document).ready(function () {
    $("body").append(sampleView.$el);
});
