document.getElementById("nightmode2").addEventListener("click", nightmode);

let nightmodeszamlalo = 0
function nightmode() {
    /*
    Kattintásra növeli a 'nightmodeszamlalo' értékét.
    - Páros számoknál nightmode = OFF
    - Páratlan számoknál nightmode = ON
    */
    nightmodeszamlalo++;
    if (nightmodeszamlalo % 2 == 1) {
        /*
        Ha nightmode = ON, akkor azokat az elemeket sötétíti, amik az összes oldalon megegyeznek.
        */
        document.body.style.backgroundImage = "linear-gradient(#000000, #242242)";
        document.getElementById("felsoarticle").style.backgroundColor = "#141A22";
        document.getElementById("vicc").style.backgroundColor = "#1A2828";
        document.getElementById("foot").style.backgroundColor = "#181818";
    }
    else {
        document.body.style.backgroundImage = "linear-gradient(#444444, #CCCCCC 40%)";
        document.getElementById("felsoarticle").style.backgroundColor = "#334255";
        document.getElementById("vicc").style.backgroundColor = "#406565";
        document.getElementById("foot").style.backgroundColor = "#444444";
    };
    if (nightmodeszamlalo % 2 == 1 && document.title == "Japán kultúra - Főoldal") {
        /*
        Itt (és a lentebbieknél is) a JS csak akkor vizsgálja az alábbi elemeket,
        ha az annak megfelelő oldalon vagyunk (Title egyezést vizsgál).
        Így csak az aloldalspecifikus elemeket módosítja.
        Máskülönben a console-ban hibaüzenet jelenne meg.
        */
        document.getElementById("foelem").style.backgroundImage = "linear-gradient(#0E1625, #2B313D)";
        document.getElementById("kviztabla").style.backgroundColor = "rgb(24, 28, 35)";
        document.getElementById("terkep").style.backgroundColor = "#142226";
    }
    else if (nightmodeszamlalo % 2 == 0 && document.title == "Japán kultúra - Főoldal") {
        document.getElementById("foelem").style.backgroundImage = "linear-gradient(#24365c, #6c7a99)";
        document.getElementById("kviztabla").style.backgroundColor = "rgb(59, 69, 88)";
        document.getElementById("terkep").style.backgroundColor = "#335542";
    }
    if (nightmodeszamlalo % 2 == 1 && document.title == "Japán kultúra - Természet") {
        document.getElementById("foelem2").style.backgroundImage = "linear-gradient(#021918, #04392E)";
        document.getElementById("terkep").style.backgroundColor = "#142226";
    }
    else if (nightmodeszamlalo % 2 == 0 && document.title == "Japán kultúra - Természet") {
        document.getElementById("foelem2").style.backgroundImage = "linear-gradient(#073b3a, #0b6e4f)";
        document.getElementById("terkep").style.backgroundColor = "#335542";
    }
    if (nightmodeszamlalo % 2 == 1 && document.title == "Japán kultúra - Ipar") {
        document.getElementById("foelem3").style.backgroundImage = "linear-gradient(#070809, #12181C)";
        document.getElementById("terkep").style.backgroundColor = "#142226";
    }
    else if (nightmodeszamlalo % 2 == 0 && document.title == "Japán kultúra - Ipar") {
        document.getElementById("foelem3").style.backgroundImage = "linear-gradient(#0f1314, #293438)";
        document.getElementById("terkep").style.backgroundColor = "#335542";
    }
    if (nightmodeszamlalo % 2 == 1 && document.title == "Japán kultúra - Hagyományok") {
        document.getElementById("foelem4").style.backgroundImage = "linear-gradient(#190404, #361010)";
        document.getElementById("terkep").style.backgroundColor = "#142226";
    }
    else if (nightmodeszamlalo % 2 == 0 && document.title == "Japán kultúra - Hagyományok") {
        document.getElementById("foelem4").style.backgroundImage = "linear-gradient(#330909, #632020)";
        document.getElementById("terkep").style.backgroundColor = "#335542";
    }
    if (nightmodeszamlalo % 2 == 1 && document.title == "Japán kultúra - Shop") {
        document.getElementById("shop1").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(img/fahatter.jpg)";
        document.getElementById("shop2").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(img/japan.jpg)";
    }
    else if (nightmodeszamlalo % 2 == 0 && document.title == "Japán kultúra - Shop") {
        document.getElementById("shop1").style.backgroundImage = "linear-gradient(rgba(50,50,50,0.6), rgba(50,50,50,0.4)), url(img/fahatter.jpg)";
        document.getElementById("shop2").style.backgroundImage = "linear-gradient(rgba(50,50,50,0.7), rgba(50,50,50,0)), url(img/japan.jpg)";
    }
}

if (document.title == "Japán kultúra - Főoldal") {
    /*
    A "Töröld" gomb megnyomására:
    - A kérdések színeit visszaállítja
    - A pontszámító string belsejét törli
    - A "kihagytál egy kérdést" string belsejét törli
    */
    document.getElementById("torold").addEventListener("click", torold);
    function torold() {
        document.getElementById("pont").innerHTML = (``);
        document.getElementById("kihagy").innerHTML = (``);
        document.getElementById("kerdes1szin").style.color = "white";
        document.getElementById("kerdes2szin").style.color = "white";
        document.getElementById("kerdes3szin").style.color = "white";
        document.getElementById("kerdes4szin").style.color = "white";
        document.getElementById("kerdes5szin").style.color = "white";
        document.getElementById("kerdes6szin").style.color = "white";
        document.getElementById("kerdes7szin").style.color = "white";
        document.getElementById("kerdes8szin").style.color = "white";
    }
}

if (document.title == "Japán kultúra - Főoldal") {
    /*
    Az "if" feltétel azért kellett, mert csak ezen az oldalon van kvíz.
    A közös JS miatt a többi oldalon is keresné a kvízt, de nem találná --> console hiba
    */
    document.getElementById("kviz").addEventListener("click", kviz);
    function kviz() {

        let pont = 0
        let kihagytad = false

        document.getElementById("kihagy").innerHTML = (``);

        /*
        Kvíz működése:
        1) A "kviz" függvény kérdésről-kérdésre halad.
        2) Minden kérdéshez tartozik egy változó amit a válaszadás szerint megállapít a függvény.
        3) Kérdésenként ellenőrzi, hogy a változó milyen értéket tárol:
            - Ha a válasz helyes = zöld betűszín
            - Ha a válasz helytelen = piros betűszín
            - Ha nincs kiválasztva semmi, akkor:
                - 'true'-vá teszi a "kihagytad" változót -> erről lentebb található egy leírás
                - Fehérré teszi a szöveget. Alapesetben egy üres utasítás
                is elegendő lett volna, de kifejezetten a fehérre változtatásra azért volt szükség, mert
                ha a kérdésnél megadásra kerül egy válasz és az kiértékelődik (helyesre vagy helytelenre),
                majd csak az a válasz törlésre kerül (mint ha meg sem lett volna adva), és újból lefut a
                függvény, akkor visszaállítódik a fehér szövegszín (lényegében mintha a kérdés nem került
                volna megadásra).
        4) Elért pontszámtól függően kiír egy üzenetet.
        */
        const a = document.getElementById("kerdes1").selectedIndex;
        if (a == -1) { kihagytad = true; document.getElementById("kerdes1szin").style.color = "white" }
        else if (a == 1) { pont += 1; document.getElementById("kerdes1szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes1szin").style.color = "red" };

        const b1 = document.getElementById("kerdes2_1").checked;
        const b2 = document.getElementById("kerdes2_2").checked;
        const b3 = document.getElementById("kerdes2_3").checked;
        const b4 = document.getElementById("kerdes2_4").checked;
        if (b1 == false && b2 == false && b3 == false && b4 == false) { kihagytad = true; document.getElementById("kerdes2szin").style.color = "white" }
        else if (b1 == true && b2 == false && b3 == true && b4 == true) { pont += 1; document.getElementById("kerdes2szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes2szin").style.color = "red" };

        const c = document.getElementById("kerdes3").value;
        if (c == "") { kihagytad = true; document.getElementById("kerdes3szin").style.color = "white" }
        else if (c == "Tokió") { pont += 1; document.getElementById("kerdes3szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes3szin").style.color = "red" };

        const d1 = document.getElementById("kerdes4_1").checked;
        const d2 = document.getElementById("kerdes4_2").checked;
        const d3 = document.getElementById("kerdes4_3").checked;
        if (d1 == false && d2 == false && d3 == false) { kihagytad = true; document.getElementById("kerdes4szin").style.color = "white" }
        else if (d1 == true) { pont += 1; document.getElementById("kerdes4szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes4szin").style.color = "red" };

        const e1 = document.getElementById("kerdes5_1").checked;
        const e2 = document.getElementById("kerdes5_2").checked;
        const e3 = document.getElementById("kerdes5_3").checked;
        if (e1 == false && e2 == false && e3 == false) { kihagytad = true; document.getElementById("kerdes5szin").style.color = "white" }
        else if (e3 == true) { pont += 1; document.getElementById("kerdes5szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes5szin").style.color = "red" };

        const f1 = document.getElementById("kerdes6_1").checked;
        const f2 = document.getElementById("kerdes6_2").checked;
        const f3 = document.getElementById("kerdes6_3").checked;
        if (f1 == false && f2 == false && f3 == false) { kihagytad = true; document.getElementById("kerdes6szin").style.color = "white" }
        else if (f1 == true) { pont += 1; document.getElementById("kerdes6szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes6szin").style.color = "red" };

        const g1 = document.getElementById("kerdes7_1").checked;
        const g2 = document.getElementById("kerdes7_2").checked;
        const g3 = document.getElementById("kerdes7_3").checked;
        if (g1 == false && g2 == false && g3 == false) { kihagytad = true; document.getElementById("kerdes7szin").style.color = "white" }
        else if (g2 == true) { pont += 1; document.getElementById("kerdes7szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes7szin").style.color = "red" };

        const h = document.getElementById("kerdes8").selectedIndex;
        if (h == -1) { kihagytad = true; document.getElementById("kerdes8szin").style.color = "white" }
        else if (h == 2) { pont += 1; document.getElementById("kerdes8szin").style.color = "lightgreen" }
        else { document.getElementById("kerdes8szin").style.color = "red" };

        if (kihagytad == true) {
            /*
            Ha egy vagy több kérdésre nem került válasz megadásra, akkor kiírja az alábbi üzenetet.
            */
            document.getElementById("kihagy").innerHTML = (`Ajjaj, szerintem kihagytad valamelyik kérdést!<br>`);
        };

        if (pont > 8) {
            /*
            A kiértékelés után pontszám szerint különböző üzeneteket jelenít meg.
            */
            document.getElementById("pont").innerHTML = (`${pont}/8 pont!<br>Hát ezt meg hogy csináltad??!`);
            return;
        }
        if (pont == 8) {
            document.getElementById("pont").innerHTML = (`${pont}/8 pont!<br>Ügyes vagy!!🥰`);
            return;
        }
        if (pont == 7) {
            document.getElementById("pont").innerHTML = (`${pont}/8 pont!<br>Már majdnem jó, meglesz az!😉`);
            return;
        }
        if (pont < 7 && pont > 3) {
            document.getElementById("pont").innerHTML = (`${pont}/8 pont!<br>Gyakorolj még, fog ez menni!😏`);
            return;
        }
        else {
            document.getElementById("pont").innerHTML = (`${pont}/8 pont!<br>Hát... ezt még gyakorold kicsit!😔`)
        }
    }
}


if (document.title != "Japán kultúra - Shop") {
    setInterval(koszonj, 1000);

    function koszonj() {
        /*
        Rendszeridőből számít japán időt, 8 óra időeltolódással
        */
        let mostaniido = new Date();
        let japanido = new Date(mostaniido.getTime() + (8 * 60 * 60 * 1000));

        document.getElementById("japanido").innerHTML =
            (japanido.getHours()).toString().padStart(2, "0") + ":" +
            (japanido.getMinutes()).toString().padStart(2, "0") + ":" +
            (japanido.getSeconds()).toString().padStart(2, "0") + " (GMT+9)";

        if (japanido.getHours() > 18) {
            document.getElementById("koszones").innerHTML = (`Jó estét! [Konbanwa / こんばんは]`);
            return;
        }
        if (japanido.getHours() > 9) {
            document.getElementById("koszones").innerHTML = (`Jó napot! [Kon'nichiwa / こんにちは]`);
            return;
        }
        else {
            document.getElementById("koszones").innerHTML = (`Jó reggelt! [Ohayō / おはよう]`);
            return;
        }
    }
}


if (document.title == "Japán kultúra - Shop"){
    document.getElementById("kosarba1").addEventListener("click", addtermek1);
    document.getElementById("kosarba2").addEventListener("click", addtermek2);
    document.getElementById("kosarba3").addEventListener("click", addtermek3);
    document.getElementById("kosarba4").addEventListener("click", addtermek4);

    let termek1 = 0
    let termek2 = 0
    let termek3 = 0
    let termek4 = 0

    function addtermek1(){
        termek1+=Number(document.getElementById("termek1db").value);
        document.getElementById("kosar_origami").innerHTML=(`Origami készlet, 100db-os: ${termek1} db<br>`);
        frissitsd();
    }
    function addtermek2(){
        termek2+=Number(document.getElementById("termek2db").value);
        document.getElementById("kosar_evopalcika").innerHTML=(`Evőpálcika készlet, 5 pár: ${termek2} db<br>`);
        frissitsd();
    }
    function addtermek3(){
        termek3+=Number(document.getElementById("termek3db").value);
        document.getElementById("kosar_hanko").innerHTML=(`Egyedi Hanko (判子) gyártása: ${termek3} db<br>`);
        frissitsd();
    }
    function addtermek4(){
        termek4+=Number(document.getElementById("termek4db").value);
        document.getElementById("kosar_yanagiba").innerHTML=(`Japán szakácskés (Yanagiba) 24cm: ${termek4} db`);
        frissitsd();
    }

    let termekosszeg_valtozo = 0
    let fuvarkoltseg_valtozo = 0


    function frissitsd(){
        termekosszeg_valtozo = (termek1*3990+termek2*1890+termek3*8700+termek4*20490)
        document.getElementById("termekosszeg").innerHTML=(`Termékek összege: ${termekosszeg_valtozo} Ft`);
        if (termekosszeg_valtozo<20000){
            fuvarkoltseg_valtozo=1990;
            document.getElementById("fuvarkoltseg").innerHTML=(`Fuvarköltség: ${fuvarkoltseg_valtozo} Ft`)}
        else {
            fuvarkoltseg_valtozo=0;
            document.getElementById("fuvarkoltseg").innerHTML=(`Fuvarköltség: ${fuvarkoltseg_valtozo} Ft`);
        };
        document.getElementById("vegosszeg").innerHTML=(`Végösszeg: ${termekosszeg_valtozo+fuvarkoltseg_valtozo} Ft`)
        }
    }