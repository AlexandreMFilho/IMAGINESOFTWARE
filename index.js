sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "MyApp.Home"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});


