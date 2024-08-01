var fs = require('fs');
	fs.writefile('apple.txt', 'could you understand or not!',function(err){
		if(err) {
			
				throw err;
		}
				
		console.log('saved!');
	});