var headerHtml = require('../../views/common/header.html');
$(function(){
    $('header').html(headerHtml);
    $("#jqxMenu").jqxMenu({ width: '100%', height: '30px' });
});
