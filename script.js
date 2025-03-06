function publish() {
const page1a = document.getElementById("follow");
page1a.setAttribute("src", "https://i.imgur.com/qkZoqiq.png");
const page1b = document.getElementById("follow2");
page1b.innerHTML = ("Within me I found a joy that the others lacked.");
const panel1 = document.querySelector("button");
panel1.setAttribute("onclick", "publish1()");
document.querySelector("follow4");
  demiinput.setAttribute('style', 'visibility: visible');
}

function publish1() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/Mkz9XtF.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("I ate foods the others did not eat; I sang songs they didn’t think to utter. In my foolishness I tried to tell my newfound joys to my peers…");
const panel2 = document.querySelector("button");
panel2.setAttribute("onclick", "publish2()");
}

function publish2() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/ErTRDtK.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("…But they pointed out the truth. I was a blasphemer.");
const panel2 = document.querySelector("button");
panel2.setAttribute("onclick", "publish3()");
}

function publish3() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/un910pu.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("One of my wings was ripped off and thrown across the sea as punishment. They say angels with only one wing are evil, and we agreed I was such.");
const panel2 = document.querySelector("button");
panel2.setAttribute("onclick", "publish4()");
}

function publish4() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/nGSQmot.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("No evil can persist in Heaven, so I was tossed across the sea, too. Myself and my wing landed on opposite sides of the world.");
const panel2 = document.querySelector("button");
panel2.setAttribute("onclick", "publish5()");
}

function publish5() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/Yc2shoA.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("I scorned myself for even entertaining the thoughts I had. What had I done?");
const panel2 = document.querySelector("button");
panel2.setAttribute("onclick", "publish6()");
}

function publish6() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/GPjgyDx.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("After days of misery, I cast off my evil thoughts. I was atoned, but I lacked proof.");
const panel2 = document.querySelector("button");
panel2.setAttribute("onclick", "publish7()");
}

function publish7() {
const page2a = document.getElementById("follow");
page2a.setAttribute("src", "https://i.imgur.com/xldhJCF.png");
const page2b = document.getElementById("follow2");
page2b.innerHTML = ("”If I find my wing again,” I thought, “they will see me as good again. I must find it.”");
}

function backpublish() {
const panel2 = document.querySelector("follow4");
panel2.setAttribute("onclick", "publish7()");
}
