window.addEventListener("load", startPwa);

async function startPwa() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register("/sw.js")
		.then(registration => {
			console.log("Service Worker is registered", registration);
		})
		.catch(err => {
			console.error("Registration failed:", err);
		});
	}
}

