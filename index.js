const ja={
    name: "Honza",
    typ: "kokos(člověk)",
    age: "16",
    popis: "Velký dement, který doufá v to nejlepší.",
    skills: ["mluvení","spaní","koukání"],
    image: "./honza_kokos.jpg"
}

const div=document.getElementById("div")
const fotka=document.createElement("img")
fotka.src=ja.image
div.append(fotka)
const jmeno=document.createElement("h3")
jmeno.textContent=ja.name
div.append(jmeno)
const bio=document.createElement("h3")
bio.textContent=ja.popis
div.append(bio)
const vek=document.createElement("h3")
vek.textContent=ja.age
div.append(vek)
const type=document.createElement("h3")
type.textContent=ja.typ
div.append(type)
const dovednost=document.createElement("h3")
dovednost.textContent=ja.skills
div.append(dovednost)
