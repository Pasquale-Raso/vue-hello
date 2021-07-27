Vue.config.devtools = true;
console.log("Ciao", Vue);

var app = new Vue({
  el: "#root",
  data: {
    message: "Ciao sono Pasquale",
    nato: "19/09/1982",
    citta: "Napoli",
    anni: "38",
    immagine:
      "https://www.fruttaweb.com/consigli/wp-content/uploads/2017/08/frutta-3.jpg",
  },
});
