var headerHtml = require('../../views/common/header.html');
$(function(){
    $('header').html(headerHtml);
    $("#jqxMenu").jqxMenu({ width: '100%', height: '30px' });
});

exports.sayName = function(){
    console.log("my name is header");
}

exports.sayName2 = function(){
    console.log("my name is header too");
}
