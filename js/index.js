// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

let heroElm = document.querySelector(".hero")

let divElm = document.createElement("div")
divElm.classList.add("myclass")

divElm.innerHTML = `
<img src="${hero.image}" alt="">
<div>
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <img src="${hero.icon}" alt="">
</div>
`

heroElm.append(divElm)


// Services section

let ServicesElm = document.querySelector(".services");
services.forEach(service => {
    let serviceDiv = document.createElement("div")
    ServicesElm.classList.add("services-class")
serviceDiv.innerHTML = `
<img src="${service.illustration}" alt="">
<h2>${ service.headline}</h2>
<p>${service.text}</p>
<a href="#">${service.linktext}</a>
`
ServicesElm.append(serviceDiv)

})


// facilities section

let facilitiesElm = document.querySelector(".facilities");
let headlineElm = document.createElement("h1")
headlineElm.textContent = facilities.headline
facilitiesElm.append(headlineElm)
facilities.options.forEach(option => {
     let facilityDiv = document.createElement("div")
     headlineElm.classList.add("headlineElm-class")
     facilitiesElm.classList.add("facility-class")
facilityDiv.innerHTML = `


<img src="${option.icon}" alt="">
<h3>${option.headline}</h3>
<p>${option.text}</p>
`
facilitiesElm.append(facilityDiv)
}) 

// sites Section

let sitesElm = document.querySelector(".sites");
let headlineElm2 = document.createElement("h1")
let textElm = document.createElement("p")
let btnElm = document.createElement("img")
headlineElm2.textContent = sites.headline
textElm.textContent = sites.text
btnElm.textContent = sites.btnicon
sitesElm.append(headlineElm2)
sitesElm.append(textElm)
sitesElm.append(btnElm)
sites.places.forEach(place => {
    let sitesDiv = document.createElement("div")
    sitesDiv.innerHTML = `


    <img src="${place.img}" alt="">
    <h2>${place.name}</h2>
    <p>${place.city}</p>
    `

    sitesElm.append(sitesDiv)
})

let advantagesElm = document.querySelector(".advantages");
advantages.forEach(advantage => {
    let advantageDiv = document.createElement("div")
    advantageDiv.innerHTML = `
<img src="${advantage.icon}" alt="">
<h2>${advantage.headline}</h2>
<p>${advantage.text}</p>
`
advantagesElm.append(advantageDiv)

})


let footerElm = document.querySelector("footer");
let overtextElm = document.createElement("h2")
let headlineElm3 = document.createElement("h1")
overtextElm.textContent = footer.overtext
headlineElm3.textContent = footer.headline
footerElm.append(overtextElm)
footerElm.append(headlineElm3)
footer.menulists.forEach(list => {
    let footerDiv = document.createElement("div")
    footerDiv.innerHTML = `
  <h3>${list.listtitle}</h3>
  <p>${list.underlist}</p>
 
    `
    footerElm.append(footerDiv)

})