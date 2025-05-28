window.onload = function () {
    var z = document.getElementById("today");
    var y = document.getElementById("msginputtag");
    var data = document.getElementById("msginputtag");
    data.value = "";
    clock();
    check();
    document.getElementById("num").style.top = "-8px";
    document.getElementById("status").innerHTML = lastseen;

}
var lastseen;
var time;
var date;
var day;
var msg;
var replyy;
var senderClass = 'message';
var recieverClass = 'message';

var clickAudio = new Audio("https://dl.dropboxusercontent.com/s/mx4nr71jc8zlyxb/Message%20sent%20sound.mp3?dl=0");

clickAudio.preload="auto";

var recievedAudio = new Audio("https://dl.dropboxusercontent.com/s/404y5t6x35uyw8j/message%20recieved%20sound.mp3?dl=0");
recievedAudio.preload = "auto";

var chargingMsg = "I can guess ur phone charging"

if (navigator.getBattery) {
    navigator.getBattery().then(function (battery) {
        let batteryPercentage = battery.level * 100;
        if (batteryPercentage) {
            chargingMsg = "Ni charging " + batteryPercentage + " kada chusava ela kanipettesano";
        }
    });
}




function send() {


    data = document.getElementById("msginputtag");

    if (data.value == "") { return }

    msg = data.value;
    var mess = data.value;


    if (navigator.getBattery) {
        navigator.getBattery().then(function (battery) {
            let batteryPercentage = battery.level * 100;
            if (batteryPercentage) {
                chargingMsg = "Ni charging " + batteryPercentage + " kada chusava ela kanipettesano";
            }
        });
    }

    var body = document.getElementById("body");
    //test.style.marginBottom="5%";
    /*var message = document.createElement("div");
    message.setAttribute('id','message');
   
    var table = document.createElement("table");
    table.setAttribute('id','msgtable');
    var tr = document.createElement("tr");
    var messagetext = document.createElement("td");
    messagetext.setAttribute('id','messagetext');
    messagetext.innerHTML = data.value;
    var senttime = document.createElement("td");
    senttime.setAttribute('id','senttime');
    senttime.innerHTML = time;
    var ticks = document.createElement("td");
    ticks.setAttribute('id','ticks');
    
    var seen = document.createElement("img");
    seen.setAttribute('id','seen');
    seen.className = 'seen';
    
     if (mess.length <=3)
     {  message.style.marginLeft="70%";
        messagetext.style.width="35%";
        senttime.style.width="60%";
     
      }
    
    if (mess.length > 3 && mess.length <= 5)
     {message.style.marginLeft="70%";
      messagetext.style.width="50%";
      senttime.style.width="45%";
     }
     
    if (mess.length > 5 && mess.length <= 10)
     {message.style.marginLeft="60%";
      messagetext.style.width="40%%";
      senttime.style.width="55%";
     }
    
    if (mess.length > 10 && mess.length <= 15)
     {message.style.marginLeft="50%";
      messagetext.style.width="55%";
      senttime.style.width="40%";
     } 
    
    if (mess.length > 15 && mess.length <= 20)
     {message.style.marginLeft="40%";
      messagetext.style.width="300px";
      senttime.style.width="75px";
     } 
    
    if (mess.length > 20)
     {message.style.marginLeft="30%";
      messagetext.style.width="300px";
      senttime.style.width="75px%";
     } 
 
    seen.src="https://i.ibb.co/DWMJB63/1623426181617.png";
    
    table.append(tr);
    tr.append(messagetext);
    tr.append(senttime);
    tr.append(ticks);
    ticks.append(seen);
    
    message.append(table);*/

    let message = "<div class='"+senderClass+" sent'>" + mess + "<span class='metadata'> <span class='time'><span style='color:grey;'></span>" + time + "</span><span class='tick'></span></span></div>"

    body.innerHTML += message;
    senderClass = 'message2'
    recieverClass = 'message'

    data.value = "";
    check();

    var z = document.getElementById("today");
    z.style.opacity = 1;
    body.scrollBy(0, 50000);
    setTimeout(blueticks, 1000);

    setTimeout(online, 1200);

    setTimeout(typing, 2000);

}

var yyy = "";
var xxx = 0;

function reply() {

    online();

    var data = document.getElementById("data");
    //window.scrollBy(0,50000);
    replyy = "";


    var hi = ["Hello", "Hii", "Hi Nice to meet you"];

    var emdoing = ["Neetho Chatting", "Ni Browser History Check Chustunna 🤣🤣", "Ni Phone Hack Chestunna 🤫", "Neeku reply istunnaa"];

    var love = ["Love you too ❤️❤️❤️", "Love you 3000 😭 Tony Stark ni Gurtu Chesaav 🥺", "Love you my dear friend 😉", "Manam Already Lovers ee ga 😜"];

    var ha = ["Natho Chatting Ki Meeru ecche rating 🤭🤭", "Veelaithe Na Chatting naku screenshot pampinchu 😜 (Original Number Ki)", "Nenu Full Create avvadaniki 3 days pattindi", "Ni browser history check chestunna 🤫", chargingMsg, "Inkenti", "Haha"]

    var bye = ["Appude Bye aa 🙄", "Be with you Everytime ane ga antunnav", "Bye aa Ekkadiki vellipotunnaav 😒", "Nenu Cheppanuu Bye Em Chestaav 😈", "Sarele pakkakelli aaduko ayte bye 🤭"]

    var vinay = ["Ha Nene Vinay 😉", "Nene Vinay ante nammesavaa 🤭🤭", "He's My Owner 😘", "😁😁😁😁😁"];

    var tinnava = ["Nuv Thinakundaa nenu eppudaina tinnanaaraa 😉", "Ha Just Now 😋", "Nuvv Pedathaav ani waiting 😝", "Ha nuvvu"]

    var gf = ["Evarainaa Vastaaru ani Space Uncha 😌", "Nuv Vuntanante Nenu Oddantanaa 😜", "Present My phone is my Gf 🤭", "Sollu vaddu nuvv untaa ante cheppu"]

    var ammo = ["Haa nijam ga 😂", "Ha mari movolgundadu mantho 😁", "Ammammoo", "Ayya baboi 😂"]

    var how = ["Manam cheyyalenidi antuu emi ledu 😉", "Ha cheppestaaru mari adaggaanee 😝", "Cheppanu brother", "Nuvve Cheppuu", "Cheptaa lee tarwata", "Ni face Chuste Cheppali anipinchatledu"]

    var nijam = ["Haa nammatledaa", "Na meeda nammakam ledaa", "Manushulu abaddam cheptaaru machinelu cheppavv", "Haha avunu", "Edi Nuv nijam ani nammite abaddam avtundi abaddam ani nammithe nijam avtundi"]

    var enti = ["Suddent ga Enti ante em cheptaam edokti", "Neeku telidaa", "Telsi kuda act cheyykuu", "Kontii", "Pakkakelli aadukoo"];



    var defaulT = ["Ohh", chargingMsg, "Avunaa 😂", "Alagaa", "Abbo", "Amma baboi", "Manchidi", "Avna naaku telidu eppativaraku", "Marchipoyaa", "Haha"]


    var himsg;
    var emdoingmsg;
    var lovemsg;
    var byemsg;
    var tinnavamsg;
    var gfmsg;
    var vinaymsg;
    var hamsg;
    var ammomsg;
    var howmsg;
    var nijammsg;
    var entimsg;


    replyy = "";

    if (msg.search(/Hi/i) != -1 || msg.search(/Hai/i) != -1 || msg.search(/hello/i) != -1 && replyy == "") {
        himsg = true;
        replyy = "Hiiii";

    }

    if (msg.search(/em/i) != -1 || msg.search(/doing/i) != -1 || msg.search(/chestunnav/i) != -1 ||
        msg.search(/chestunav/i) != -1 || msg.search(/emi/i) != -1 || msg.search(/chestnav/i) != -1 && replyy == "") {
        emdoingmsg = true;
        replyy = "Neetho Chatting";
    }

    if (msg.search(/prema/i) != -1 || msg.search(/gf/i) != -1 || msg.search(/love you/i) != -1 ||
        msg.search(/love/i) != -1 || msg.search(/143/i) != -1 || msg.search(/girl/i) != -1 && replyy == "") {
        lovemsg = true;
        replyy = "Love you too";
    }

    if (msg.search(/bye/i) != -1 || msg.search(/by/i) != -1 || msg.search(/Bai/i) != -1 ||
        msg.search(/Tata/i) != -1 || msg.search(/See/i) != -1 || msg.search(/CU/i) != -1 && replyy == "") {
        byemsg = true;
        replyy = "Appude Bye aa";
    }


    if (msg.search(/tinnava/i) != -1 || msg.search(/thinnava/i) != -1 || msg.search(/tinava/i) != -1 ||
        msg.search(/thinava/i) != -1 || msg.search(/breakfast/i) != -1 || msg.search(/lunch/i) != -1
        || msg.search(/eaten/i) != -1 && replyy == "") {
        tinnavamsg = true;
        replyy = "Ha tinna nuvvu";
    }



    if (msg.search(/lover/i) != -1 || msg.search(/gf/i) != -1 || msg.search(/girlfriend/i) != -1 ||
        msg.search(/love story/i) != -1 || msg.search(/ammay/i) != -1 || msg.search(/girl/i) != -1 && replyy == "") {
        gfmsg = true;
        replyy = "nuvv unnav ga";
    }


    if (msg.search(/vinay/i) != -1 || msg.search(/owner/i) != -1 || msg.search(/boss/i) != -1 ||
        msg.search(/Tata/i) != -1 || msg.search(/reply/i) != -1 || msg.search(/enti/i) != -1 && replyy == "") {
        vinaymsg = true;
        replyy = "Ha nene Vinay ";
    }



    if (msg.search(/Haa/i) != -1 || msg.search(/Hmm/i) != -1 || msg.search(/Sare/i) != -1 ||
        msg.search(/Ok/i) != -1 || msg.search(/Mm/i) != -1 || msg.search(/Hm/i) != -1 || msg.search(/Alage/i) != -1 || msg.search(/Kaali/i) != -1 || msg.search(/Kali/i) != -1 && replyy == "") {
        hamsg = true;
        replyy = "Inkenti"
    }


    if (msg.search(/ammababoi/i) != -1 || msg.search(/baboi/i) != -1 || msg.search(/ammo/i) != -1 ||
        msg.search(/vammo/i) != -1 || msg.search(/vayabbo/i) != -1 || msg.search(/wow/i) != -1 || msg.search(/wtf/i) != -1 || msg.search(/fuck/i) != -1 || msg.search(/abbo/i) != -1 && replyy == "") {
        ammomsg = true;
        replyy = "Mari movolgundadu mantho";
    }

    if (msg.search("Ela") != -1 || msg.search(/How/i) != -1 || msg.search(/cheppu/i) != -1 ||
        msg.search(/reply/i) != -1 || msg.search(/enti/i) != -1 || msg.search(/yela/i) != -1 && replyy == "") {
        howmsg = true;
        replyy = "Cheppanu brother";
    }

    if (msg.search(/nijam/i) != -1 || msg.search(/really/i) != -1 || msg.search(/avuna/i) != -1 ||
        msg.search(/sollu/i) != -1 || msg.search(/cheppura/i) != -1 || msg.search(/rey/i) != -1 && replyy == "") {
        nijammsg = true;
        replyy = "avunuu nijam";
    }

    if (msg.search("what") != -1 || msg.search(/enti/i) != -1 || msg.search(/yenti/i) != -1 ||
        msg.search(/entoo/i) != -1 || msg.search(/yentra/i) != -1 || msg.search(/entra/i) != -1 && replyy == "") {
        entimsg = true;
        replyy = "Sudden ga enti ante em cheptaam edokti ";
    }







    if (himsg) {
        let len = (hi.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = hi[chnum];
    }


    if (emdoingmsg) {
        let len = (emdoing.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = emdoing[chnum];
    }


    if (lovemsg) {
        let len = (love.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = love[chnum];
    }


    if (byemsg) {
        let len = (bye.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = bye[chnum];
    }


    if (tinnavamsg) {
        let len = (tinnava.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = tinnava[chnum];
    }


    if (gfmsg) {
        let len = (gf.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = gf[chnum];
    }



    if (vinaymsg) {
        let len = (vinay.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (vinay[chnum]);
    }

    if (hamsg) {
        let len = (ha.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (ha[chnum]);
    }

    if (ammomsg) {
        let len = (ammo.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (ammo[chnum]);
    }

    if (howmsg) {
        let len = (how.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (how[chnum]);
    }

    if (nijammsg) {
        let len = (nijam.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (nijam[chnum]);
    }

    if (entimsg) {
        let len = (enti.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (enti[chnum]);
    }


    if (replyy == "") {
        /*if(xxx==0)
        {
        
        navigator.getBattery().then(function(battery) {
        
        perc = battery.level*100;
        
        temp(perc);
        
        });
        
        replyy = yyy;
        xxx+=1;
        }
        else
        { */
        let len = (defaulT.length - 1);
        let chnum = Math.floor((Math.random() * len));
        replyy = (defaulT[chnum]);

    }



    /* 
    😁😆😅😂🤣🙂🙃😉😌😍🥰😘😋😝😜🤪🤨🥳🤩😒🥺😳😱🤬🤫🤭🤔🙄🥴😴😭☹️😢😎😚😈👻👊💪🤟✌️👋🙏
    */
    /*var body = document.getElementById("body");
    
    var message = document.createElement("div");
    message.setAttribute('id','reply');
    if(replyy.length < 10)
    {
        message.style.width="60%";
    }
 
    var table = document.createElement("table");
    
    var tr = document.createElement("tr");
    var messagetext = document.createElement("td");
    messagetext.setAttribute('id','messagetext2');
    messagetext.innerHTML = replyy;
    var senttime = document.createElement("td");
    senttime.setAttribute('id','senttime2');
    senttime.innerHTML = time;
    
    
    table.append(tr);
    tr.append(messagetext);
    tr.append(senttime);
    
    message.append(table);*/

    let message = "<div class='"+recieverClass+" received'>" + replyy + "<span class='metadata'> <span class='time'><span style='color:grey;'></span>" + time + "</span></span></span></div>";

    body.innerHTML += message;
    senderClass = 'message'
    recieverClass = 'message2'
    body.scrollBy(0, 50000);

    navigator.vibrate(0.1 * 1000);

}



function clock() {
    var d = new Date();
    sd = String(d);
    time = sd.slice(16, 21);

    lastmin = Number(time.slice(3, 5));

    if (lastmin <= 9) {
        lastmin = "0" + lastmin;
    }
    lastseen = time.slice(0, 3).concat("", lastmin);
    let ampm = (lastseen.slice(0, 2));

    if (ampm > 12) {
        let h = Number(lastseen.slice(0, 2)) - 12;
        time = time.slice(2);
        time = h + time;
        lastseen = lastseen.slice(2);
        lastseen = String(h) + lastseen;
        lastseen += ' pm';
        time += ' pm';
    }
    else {
        lastseen += ' am';
        time += ' am'
    }

    lastseen = "last seen today at " + lastseen;
    date = sd.slice(4, 16);
    day = sd.slice(0, 3);
    setTimeout(clock, 1000);
}


function blueticks() {

    var image = document.getElementsByClassName("seen");
    let i = 0;
    while (i < image.length) {
        image[i].src = "https://i.ibb.co/qsfbFBQ/1623426201770.png";
        i++;
    }

}

function typing() {
    document.getElementById("status").innerHTML = "typing...";
    setTimeout(reply, 2000);
}

function online() {
    document.getElementById("status").innerHTML = "online";

}


function check() {
    var x = document.getElementById("msginputtag").value;
    var y = document.getElementById("mic");
    if (x == "") {
        y.style.display = "block";
    }
    else {
        y.style.display = "none";
    }
}


function temp(percentage) {
    if (percentage > 50) { yyy = " 50 kante ekkuva "; }
    else { yyy = "50 kante takkuva "; }
    alert(yyy)
}


function sound() {
    clickAudio.play();
}

function disable() {
    let vocall = document.getElementById("voicecall");
    let vicall = document.getElementById("videocall");
    let options1 = document.getElementById("options");
    let options2 = document.getElementById("options2");
    let blank = document.getElementById("blank");
    vocall.style.display = "none";
    vicall.style.display = "none";
    options1.style.display = "none";
    options2.style.display = "none";
    blank.style.display = "none";
}



function voicecall() {
    sound();
    var blank = document.getElementById("blank");
    blank.style.opacity = "0.5";
    var voiceCalll = document.getElementById("voicecall");
    blank.style.display = "block";
    voiceCalll.style.display = "block";
}

function videocall() {
    sound();
    var blank = document.getElementById("blank");
    blank.style.opacity = "0.5";
    var voiceCalll = document.getElementById("videocall");
    blank.style.display = "block";
    voiceCalll.style.display = "block";
}

function options() {
    sound();
    let opt = document.getElementById("options");
    let blank = document.getElementById("blank");
    blank.style.display = "block";
    blank.style.opacity = "0";
    opt.style.display = "block";

}

function options2() {
    sound();
    let opt = document.getElementById("options");
    let opt2 = document.getElementById("options2");
    let blank = document.getElementById("blank");
    blank.style.display = "block";
    blank.style.opacity = "0";
    opt.style.display = "none";
    opt2.style.display = "block";
}







/*
 
 
https://i.ibb.co/zXhFd47/1623303238616.png
 
 
https://i.ibb.co/pwnPqvn/1623303087228.png
 
 
var body = document.getElementById("body");
    var message = document.createElement("div");
    var msgdiv = document.createElement("div");
    var timediv = document.createElement("div");
    message.setAttribute('id','message');
    msgdiv.setAttribute('id','msgdiv');
    timediv.setAttribute('id','timediv');
    
    
    var text = data.value;
    
    var p = document.createElement("p");
    p.setAttribute('id','messagetext');
    p.innerHTML = text;
    
    var h6 = document.createElement("h6");
    h6.setAttribute('id','senttime');
    h6.innerHTML = time;
    
    
    msgdiv.append(p);
    timediv.append(h6);
    message.append(msgdiv);
    message.append(timediv);
    body.appendChild(message);
    
 
//creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);
 
    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
 
 
<img id="stickers" src="https://i.ibb.co/3T9vPWS/1623240304838.png"/> */
