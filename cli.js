const main = require('./index');

async function task() {
	const argv = [...process.argv];
	const port = process.argv.pop();
	const command = process.argv.pop();

	switch (command) {
		case "kill":
			await main.killAllProcessesOnPort(port);
			break;
		case "list":
			await main.listProcessesOnPort(port);
			break;
		default:
			console.error("Command not found");
	}
}
task();
