let menu = {
	"Pizzor klass 1": [
		{"name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
		{"name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
		{"name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
	],
	"Pizzor klass 2": [
		{"name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
		{"name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner" ], "price": 70 },
		{"name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "Räkor" ], "price": 70 },
		{"name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas" ], "price": 70 },
		{"name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs" ], "price": 70 },
		{"name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk" ], "price": 70 },
		{"name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök" ], "price": 70 },
		{"name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner" ], "price": 70 }
	],
	"Pizzor klass 3": [
		{"name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg" ], "price": 75 },
		{"name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 75 },
		{"name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner" ], "price": 75 },
		{"name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 85 },
		{"name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor" ], "price": 75 },
		{"name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor" ], "price": 75 },
		{"name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas" ], "price": 75 },
		{"name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)" ], "price": 75 },
		{"name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika" ], "price": 75 },
		{"name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök" ], "price": 75 },
		{"name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "Nötter"], "price": 75 }
	],
	"Såser": [
		{"name": "Bearnaisesås 10 cl ", "price":  10 },
		{"name": "Kebabsås mild 10 cl ", "price":  10 },
		{"name": "Kebabsås stark 10 cl ", "price":  10 },
		{"name": "Kebabsås blandad 10 cl ", "price":  10 },
		{"name": "Tzatzikisås 10 cl ", "price":  10 },
		{"name": "Vitlökssås 10 cl ", "price": 10}
	],
	"Dryck": [
		{"name": "Coca-Cola 33 cl ", "price":  15 },
		{"name": "Coca-Cola light 33 cl ", "price":  15 },
		{"name": "Fanta 33 cl ", "price":  15  },
		{"name": "Sprite 33 cl ", "price":  15 },
		{"name": "Mineralvatten 33 cl ", "price":  15 },
		{"name": "Lättöl 33 cl ", "price":  15 },
		{"name": "Coca-Cola 50 cl ", "price":  20 },
		{"name": "Fanta 50 cl ", "price":  20 }
	]
}

let buttonAdd = [];
let buttonSub = [];

let n = 0;
$(document).ready(function(e) {
    $("#text").html("");
      for(let section in menu) {
        $("#text").append("<br />");
		$("#text").append("<hr />");   
        $("#text").append("<h1>"+section+"</h1>");
          for(let itemindex in menu[section]) {
            let item = menu[section][itemindex]; 
            buttonAdd[itemindex]  = document.createElement("button");
            buttonAdd[itemindex].innerHTML = " + ";
            buttonSub[itemindex]  = document.createElement("button");
            buttonSub[itemindex].innerHTML = " - ";
            buttonSub[itemindex].style = 'margin-right: 60px;float: right; width: 50px; height: 50px; border-radius: 50px; border-color: rgb(96,96,96); border: solid; box-shadow: 2px 2px 2px rgba(0,0,0,0.2); background-color: white; color: red; font-size:25px;';
            buttonAdd[itemindex].style = 'margin-right: 40px;float: right; width: 50px; height: 50px; border-radius: 50px; border-color: rgb(96,96,96); border: solid; box-shadow: 2px 2px 2px rgba(0,0,0,0.2); background-color: white; color: green; font-size: 25px;';
      
            $("#text").append("<strong> "+ item["name"] + " " + item["price"] + ":-" + "</strong>");  
            $("#text").append(buttonSub[itemindex]);
            $("#text").find(buttonSub[itemindex]).on("click", function(){
              console.log(item["name"]);
              console.log(item["price"]);
            });
            $("#text").append(buttonAdd[itemindex]);
            $("#text").find(buttonAdd[itemindex]).on("click", function(){
              console.log(item["name"]);
              console.log(item["price"]);
            });
			$("#text").append("<br />");   
            $("#text").append("<br />");     
             for(let cindex in item["contents"]) {
				$("#text").append(item["contents"][cindex] + " ");	 
              }
            $("#text").append("<hr />");
            $("#text").append("<br />"); 
            //$("#text").append("<br />");   
        }
    }
});

function Stingcheck(){
	let text = text.includes("a:")
	t

}
