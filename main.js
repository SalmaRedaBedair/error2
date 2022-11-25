let mainColor = "#d8d8d869";
let secondryColor = "#4da989";

//document.body.style.background = mainColor;

let myHeader = document.createElement("header");
myHeader.style.height = "10px";
let myH2 = document.createElement("h2");
let title = document.createTextNode("Elzero");
myH2.appendChild(title);
myH2.style.color = secondryColor;
myHeader.appendChild(myH2);
myHeader.style.padding = "10px";
myHeader.display = "flex";

let mydiv = document.createElement("div");
let myLink1 = document.createElement("a");
let myLink2 = document.createElement("a");
let myLink3 = document.createElement("a");
let myLink4 = document.createElement("a");
let texta1 = document.createTextNode("Home");
let texta2 = document.createTextNode("About");
let texta3 = document.createTextNode("Services");
let texta4 = document.createTextNode("Contact");
// myLink1.className="link";

const links = document.querySelectorAll("a");
// links[0].style.backgroundColor="red";

// myLink1.style.background="red";
for(var i=0; i<links.length; i++){  
    links[i].style.backgroundColor="red";
      
} 
myLink1.style.paddingRight = "10px";
myLink2.style.paddingRight = "10px";
myLink3.style.paddingRight = "10px";
// myLink1.style.paddingRight="10px";

// let link=document.getElementByClassName(".link");
// link.paddingRight="10px";
myLink1.appendChild(texta1);
mydiv.appendChild(myLink1);
myLink2.appendChild(texta2);
mydiv.appendChild(myLink2);
myLink3.appendChild(texta3);
mydiv.appendChild(myLink3);
myLink4.appendChild(texta4);
mydiv.appendChild(myLink4);
myHeader.appendChild(mydiv);
myHeader.style.display = "flex";
myHeader.style.justifyContent = "space-between";
myHeader.style.alignItems = "center";
myHeader.style.paddingLeft = "10%";
myHeader.style.paddingRight = "10%";



document.body.appendChild(myHeader);


let cardBody = document.createElement("div");
cardBody.style.background = mainColor;

for (let i = 1; i <= 15; i++) {
    let card = document.createElement("div");
    let hc = document.createElement("h3");
    hc.style.margin = "0px";
    let cardtext2 = document.createTextNode("product");
    let par = document.createElement("p");
    par.style.margin = "0px";
    par.style.padding = "0px";
    hc.style.padding = "0px";
    // let mypcard1 = document.createElement("p");
    let textcard1 = document.createTextNode(i);
    hc.appendChild(textcard1);
    card.appendChild(hc);
    par.appendChild(cardtext2);
    card.appendChild(par);
    card.className = "card";
    card.style.display = "absolute";
    card.style.padding = "10px 0px";
    hc.style.textAlign = "center";
    par.style.textAlign = "center";
    par.style.color="grey";
    par.style.fontSize="10px";
    card.style.width = "30%";
    let h = "50px"
    card.style.height = h;
    let mar = "10px";
    card.style.backgroundColor = "white";
    card.style.margin = mar;
    cardBody.appendChild(card);

}

 document.body.appendChild(cardBody);

cardBody.style.margin = "0px 10px";
cardBody.style.display = "flex";
cardBody.style.justifyContent = "center";
cardBody.style.flexWrap = "wrap";
cardBody.style.alignItems = "center";

let footer = document.createElement("footer");
footer.style.background = secondryColor;
footer.style.height = "50px";
let textFooter = "Copyright 2021";
let myP = document.createElement("p");
// let coloredText=textFooter.style.coloredText="white";
let text = document.createTextNode(textFooter);
// document.footer.style.color="white";
myP.appendChild(text);

// myP.setAttribute('font-color',"red");
myP.style.color = "white";
myP.style.fontWeight = "bold"
footer.appendChild(myP);
footer.style.justifyContent = "center";
footer.style.display = "flex";
footer.style.alignItems = "center";
document.body.appendChild(footer);