// === LISTA ORDINATA DEL PERCORSO ===
const percorso = [
  { street: "Castellana", civici: ["26"] },
  {
    street: "Hayez",
    civici: ["32", "17a", "17", "15", "13", "11", "9", "7", "5", "3"],
  },
  {
    street: "Caravaglio",
    civici: ["42", "40"],
  },
  {
    street: "Hayez",
    civici: ["4p", "4g", "4b", "4a", "17b", "17c", "19", "21"],
  },
  {
    street: "Caravaglio",
    civici: ["11", "9", "7", "5a", "5", "3"],
  },
  {
    street: "Castellana",
    civici: [
      "26a",
      "28",
      "30",
      "30a",
      "30b",
      "67",
      "65h",
      "65g",
      "65f",
      "65e",
      "65d",
      "65c",
      "65b",
      "65a",
      "65",
    ],
  },
  {
    street: "Guardi",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "21",
      "19",
      "17",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  {
    street: "Castellana",
    civici: ["63n", "34", "34b", "34c", "34d"],
  },
  {
    street: "Bellotto",
    civici: [
      "2",
      "2a",
      "2b",
      "2c",
      "4",
      "4a",
      "4b",
      "6",
      "8",
      "8a",
      "8b",
      "8c",
      "10",
      "12",
      "12a",
      "12b",
      "12c",
      "14",
      "14a",
      "14b",
      "16",
      "16a",
      "18",
      "18a",
      "18b",
      "18c",
      "18d",
      "20",
      "22",
      "30",
      "32",
      "5",
      "3",
    ],
  },
  {
    street: "Castellana",
    civici: ["40", "23", "44", "46", "48", "48a", "50", "52", "56"],
  },
  {
    street: "Pittoni",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "10a",
      "21",
      "19",
      "17",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
    ],
  },
  { street: "Castellana", civici: ["58", "58a", "58b", "58g", "58h", "58d"] },
  {
    street: "Giambellino",
    civici: [
      "4",
      "6",
      "8",
      "10",
      "12",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1a",
      "1",
    ],
  },
  { street: "Castellana", civici: ["93b"] },
  {
    street: "Marzenego",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "15",
      "13",
      "11",
      "9",
      "7",
      "3",
      "1",
    ],
  },
  {
    street: "Molino Ronchin",
    civici: [
      "2",
      "2a",
      "2b",
      "2c",
      "2d",
      "4",
      "6",
      "8",
      "10",
      "10a",
      "10b",
      "10c",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  {
    street: "Castellana",
    civici: [
      "93a",
      "93",
      "87p",
      "87a",
      "87",
      "85",
      "83a",
      "83",
      "81",
      "79",
      "77",
      "75",
      "71",
      "69a",
      "69",
      "32",
    ],
  },
  {
    street: "Ricci",
    civici: ["19", "17", "15", "13", "11", "9", "7", "5", "1"],
  },
  { street: "Castellana", civici: ["32a", "32b", "32c"] },
  {
    street: "Piranesi",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "26",
      "27",
      "25",
      "23",
      "21",
      "19",
      "17a",
      "17",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
      "2",
    ],
  },
  {
    street: "Piazzetta",
    civici: [
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28",
      "29",
      "27",
      "25b",
      "25a",
      "25",
      "23",
      "21",
      "19",
      "17",
      "15",
      "13a",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  {
    street: "Castellana",
    civici: [
      "63i",
      "63l",
      "63b",
      "63d",
      "63e",
      "63f",
      "63g",
      "63h",
      "63",
      "61u",
      "61t",
      "61s",
      "61r",
      "61q",
      "61p",
      "61n",
      "61m",
      "61l",
      "61h",
      "61i",
      "61g",
      "61e",
      "61f",
      "61b",
      "61a",
      "61",
      "59c",
      "59",
      "57",
      "55",
      "53",
      "51",
      "49",
      "47",
      "45",
      "43",
      "41",
      "39",
      "37",
      "35b",
      "35a",
      "35",
      "33",
      "31",
      "29",
      "27d",
      "27c",
      "27b",
      "27a",
      "27",
      "25m",
      "25l",
      "25i",
      "25h",
      "25g",
      "25f",
    ],
  },
  {
    street: "Gaggian",
    civici: [
      "10",
      "12",
      "14",
      "14a",
      "16",
      "18",
      "20",
      "22",
      "24",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  {
    street: "Castellana",
    civici: ["25e", "25d", "25c", "25b", "25a", "25", "23l", "23h", "23g"],
  },
  {
    street: "Cima",
    civici: [
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "19",
      "17",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  { street: "Castellana", civici: ["23c", "23b", "23"] },
  {
    street: "Pordenone",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "27",
      "25",
      "23",
      "21a",
      "21",
      "19",
      "17",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1a",
      "1",
    ],
  },
  { street: "Castellana", civici: ["21a"] },
  {
    street: "Buzzola",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28",
      "30",
      "31",
      "29",
      "27",
      "25",
      "23",
      "21",
      "19",
      "17",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  { street: "Castellana", civici: ["21", "19", "17c", "17b"] },
  {
    street: "Giorgione",
    civici: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "15",
      "13",
      "11",
      "9",
      "7",
      "5",
      "3",
      "1",
    ],
  },
  { street: "Castellana", civici: ["17a", "17", "15", "13"] },
];

// === VARIABILI DOM ===
const streetGrid = document.getElementById("street-grid");
const civicoInput = document.getElementById("civico");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("deliveryList");
const clearAllBtn = document.getElementById("clearAll");

let selectedStreet = null;
let deliveries = JSON.parse(localStorage.getItem("deliveries")) || [];

// === COSTRUISCI GRIGLIA STRADE ===
const nomiStrade = [...new Set(percorso.map((p) => p.street))];
nomiStrade.forEach((street) => {
  const btn = document.createElement("button");
  btn.classList.add("street-btn");
  btn.textContent = street;
  btn.addEventListener("click", () => selectStreet(btn, street));
  streetGrid.appendChild(btn);
});

function selectStreet(btn, street) {
  document
    .querySelectorAll(".street-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  selectedStreet = street;
}

// === AGGIUNGI CONSEGNA ===
addBtn.addEventListener("click", () => {
  const civico = civicoInput.value.trim();
  if (!selectedStreet) {
    alert("Seleziona una strada prima di aggiungere la consegna!");
    return;
  }
  if (!civico) {
    alert("Inserisci il numero civico!");
    return;
  }

  const nuovaConsegna = { street: selectedStreet, civico, completed: false };
  deliveries.push(nuovaConsegna);
  ordinaConsegne();
  salvaDati();
  mostraConsegne();
  civicoInput.value = "";
});

const stradaSelect = document.getElementById("streetSelect");

// Quando l'utente digita
civicoInput.addEventListener("input", () => {
  const strada = stradaSelect.value;
  const civico = civicoInput.value.trim().toLowerCase();

  if (!strada) return; // nessuna strada selezionata

  // Cerca la strada nella lista percorso
  const stradaObj = percorso.find(s => s.street === strada);

  if (!stradaObj) return;

  // Normalizza la lista dei civici
  const civiciValidi = stradaObj.civici.map(c => c.toLowerCase());

  // Se il civico NON è nella lista → diventa rosso
  if (civico && !civiciValidi.includes(civico)) {
    civicoInput.classList.add("input-error");
  } else {
    civicoInput.classList.remove("input-error");
  }
});

// === ORDINA CONSEGNE IN BASE AL PERCORSO ===
function ordinaConsegne() {
  deliveries.sort((a, b) => {
    const indexA = trovaIndiceNelPercorso(a);
    const indexB = trovaIndiceNelPercorso(b);
    return indexA - indexB;
  });
}

function trovaIndiceNelPercorso(consegna) {
  for (let i = 0; i < percorso.length; i++) {
    const tappa = percorso[i];
    if (tappa.street === consegna.street) {
      const posCivico = tappa.civici.indexOf(consegna.civico);
      if (posCivico !== -1) {
        // Strada e civico trovati
        return i * 100 + posCivico; // numerazione combinata: tappa + civico
      }
    }
  }
  // Se civico non specificato, posizione generale della via
  return percorso.findIndex((p) => p.street === consegna.street) * 1000;
}

// === MOSTRA LISTA CONSEGNE ===
function mostraConsegne() {
  list.innerHTML = "";
  deliveries.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("delivery-item");
    if (item.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${item.street} ${item.civico}</span>
      <button onclick="toggleCompletata(${index})">${
      item.completed ? "↩️" : "✅"
    }</button>
    `;
    list.appendChild(li);
  });
}

// === COMPLETAMENTO ===
function toggleCompletata(index) {
  deliveries[index].completed = !deliveries[index].completed;
  salvaDati();
  mostraConsegne();
}

// === SALVATAGGIO ===
function salvaDati() {
  localStorage.setItem("deliveries", JSON.stringify(deliveries));
}

// === SVUOTA LISTA ===
clearAllBtn.addEventListener("click", () => {
  if (confirm("Sicuro di voler svuotare tutte le consegne?")) {
    deliveries = [];
    salvaDati();
    mostraConsegne();
  }
});

// === AVVIO ===
mostraConsegne();

