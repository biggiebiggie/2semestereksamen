let jsonUrl = "http://mixel.dk/kea/vincents/wordpress/wp-json/wp/v2/produkter/";
let products = [];
let display = document.querySelector("#side_products");
let template = document.querySelector("template");

let mq = window.matchMedia('all and (max-width: 900px)');

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

		klon.querySelector("[data-product]").setAttribute
		klon.querySelector("[data-name]").textContent = product.title.rendered;

		klon.querySelector("[data-image]").src = product.acf.thumbnail.url;

		klon.querySelector("[data-image]").alt = product.title.rendered;


		if (mq.matches) {
			console.log("singleview");
			klon.querySelector("article").addEventListener("click", () => {
				if (product.acf)
					location.href = "single.html?id=" + product.id;
			});
		} else {
			console.log("modal");
			klon.querySelector("[data-product]").setAttribute("data-id", product.id);
			klon.querySelector("[data-product]").addEventListener("click", openModal);
		}

		display.appendChild(klon);
	});
}


function openModal() {
	let myId = this.getAttribute("data-id");
	let single = products.find(product => {
		// hvis myId = ret.id så vis indhold
		if (myId == product.id) {
			//             document.querySelector("#popup").style.visibility = "visible";

			document.querySelector("[data-singleTitle]").textContent = product.title.rendered;

			document.querySelector("[data-singleImageTop]").src = product.acf.presentation_picture.url;

			document.querySelector("[data-singleImageTop]").alt = product.acf.presentation_picture.alt;

			document.querySelector("[data-description]").innerHTML = product.content.rendered;

			document.querySelector("[data-vedligeholdelse]").innerHTML = product.acf.maintainence;
		}

	});
}



//	function toggleMenu() {
//		document.querySelector(".burger_menu").classList.toggle("change");
//		document.querySelector("#hovedmenu").classList.toggle("show");
//	}
//
//	document.querySelector(".burger_menu").addEventListener("click", toggleMenu);
//	document.querySelector("#hovedmenu").addEventListener("click", toggleMenu);
