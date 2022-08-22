import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getRemoteConfig, getValue, fetchAndActivate } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-remote-config.js";


async function teste() {

	const firebaseConfig = {
	  apiKey: "AIzaSyDtHKWGhEZIMQD55qFAFsYjosTJ6QAgqkY",
	  authDomain: "ipigetsemani-2019.firebaseapp.com",
	  databaseURL: "https://ipigetsemani-2019.firebaseio.com",
	  projectId: "ipigetsemani-2019",
	  storageBucket: "ipigetsemani-2019.appspot.com",
	  messagingSenderId: "839738835930",
	  appId: "1:839738835930:web:836536083efd6f28ca36e3",
	  measurementId: "G-P9XQMGDBN8"
	};

	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	const remoteConfig = getRemoteConfig();
	remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
	remoteConfig.defaultConfig = {
	  "helloword": "meu anus"
	};

	let helloword = getValue(remoteConfig, "helloword");
	console.log(helloword);


	fetchAndActivate(remoteConfig)
	  .then(() => {
	    let helloword = getValue(remoteConfig, "helloword").asString();
		console.log(helloword);

		const loadEl = document.querySelector('#load');
		loadEl.textContent = helloword
	  })
	  .catch((err) => {
	    console.log(err);
	  });
}

teste()