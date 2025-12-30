// Singleton v1
export const Singleton = (function () {
	let pManager;

	function ProcessManager() {
		/*...*/
	}

	function createProcessManager() {
		pManager = new ProcessManager();
		return pManager;
	}

	return {
		getProcessManager: () => {
			if (!pManager) pManager = createProcessManager();
			return pManager;
		}
	};
})();

// Singleton v2
class SingletonV2 {
	static instance = null;
	constructor() {
		if (!SingletonV2.instance) {
			this.logs = [];
			SingletonV2.instance = this;
		}

		return SingletonV2.instance;
	}

	log(message) {
		this.logs.push(message);
		console.log(`Log message: ${message}`);
	}

	printLogCount() {
		console.log(`${this.logs.length} Logs`);
	}
}

const singletonv2 = new SingletonV2();
Object.freeze(singletonv2);
export default singletonv2;
