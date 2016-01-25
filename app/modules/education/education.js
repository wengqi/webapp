var html = require('./education.html');

function render(){
    $('#main').html(html);
    $('#education').emapdatatable('doSomething');
}

module.exports = {
    render: render
};