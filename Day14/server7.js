vdb.createRole({ role: "myCustomRole", privileges: [ { resource: { db: "myDatabase", collection: "" }, actions: [ "find", "update", "insert", "remove" ] } ], roles: [] });var fs = require('fs');
fs.appendFile('apple.txt','yes,white crows are flying',function(err) {
	if(err) {
		throw err;
	}
	console.log('Saved!');
});