let jsonUrl = "http://mixel.dk/kea/vincents/wordpress/wp-json/wp/v2/produkter/";
let products = [];
let display = document.querySelector("section");
let template = document.querySelector("template");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
	let dataJson = await fetch(jsonUrl);
	products = await dataJson.json();
	console.log(products);

	showProducts();
}

function showProducts()  {
	products.forEach(product => {
		let klon = template.cloneNode(true).content;

		klon.querySelector("[data-name]").textContent = product.title.rendered;

		klon.querySelector("[data-image]").src = product.acf.billede.url;

		klon.querySelector("[data-image]").alt = product.title.rendered;

		klon.querySelector("article").addEventListener("click", () => {
			if (product.acf)
				location.href = "single.html?id=" + product.id;
		});

		display.appendChild(klon);
	});
}
