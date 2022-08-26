"use strict";

var maincontent1 = document.createElement("section");
var contentBlock = document.createElement("div");

maincontent1.className = `maincontent`;
document.body.appendChild(maincontent1);

var createContent = function (amount) {
  var currentContentBlock = document.createElement("div");
  maincontent1.className = `contentblock`;
  document.maincontent.appendChild(maincontent1);
};

createContent();
