var chalk = require('chalk');
function Mouse(name) {
	this.name=name;
}
Mouse.prototype.sayhi = function() {
	console.log('My name is'+ chalk.red(this.name));
};
module.exports=Mouse;