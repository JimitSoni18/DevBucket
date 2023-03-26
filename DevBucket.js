let quickLinks = [
	{
		title: "GitHub",
		href: "https://github.com/",
		icon: "fa-brands fa-github",
	},
	{
		title: "ChatGPT",
		href: "https://chat.openai.com",
		svg: "/public/images/svg/icons8-chatgpt20.svg",
	},
];

let quickLinksListElement = document.getElementById("quickLinks list-group");

function renderQuickLinks() {
	quickLinks.forEach((item) => {
		let li = document.createElement("li");
		let a = document.createElement("a");
		let i = document.createElement("i");
		let img = document.createElement("img");

		if (item.icon) {
			i.className = item.icon;
		} else {
			const url = new URL(item.href);
			img.src = url.protocol + "//" + url.hostname + "/favicon.ico";
			img.style.height = '20px';
			img.style.width = '20px';
		}

		a.className = "text-decoration-none fs-5 text-snow-storm-2";
		a.href = item.href;
		if (item.icon) {
			a.appendChild(i)
		} else {
			a.appendChild(img)
		}
		a.insertAdjacentHTML("beforeend", " " + item.title);

		li.className = "list-group-item p-3 border-bottom border-polar-night-0 fw-bold";
		li.appendChild(a);
		quickLinksListElement.appendChild(li);
	});
}

function addQuickLink() {
	console.log('functionality pending');
}

renderQuickLinks();

let currentDate;
setInterval(() => {
	currentDate = new Date();
	document.getElementById("time").innerText = currentDate.toLocaleTimeString(
		"en-US",
		{ hour12: false }
	);
}, 1000);
