function run()
{
	const path = require('path');
	const matchersPath = path.join(__dirname, '.github');
	console.log(`##[add-matcher]${path.join(matchersPath, 'pylinters.json')}`);
}
run();
