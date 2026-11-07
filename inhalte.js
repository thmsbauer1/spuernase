/* Inhalte für Spürnase.
   Jeder Fall hat Kapitel. Ein Kapitel = Absätze (Text) + Fragen.
   [[b1]] am Anfang eines Satzes markiert einen Beweis-Satz, auf den eine Frage vom Typ "beweis" zeigt.
   Fragetypen: fakt, wort, schluss, beweis, reihe (Reihenfolge).
   "spur" bei einer Frage = Spur, die nach richtiger Antwort in die Fall-Akte kommt. */

const SPUREN_VITRINE = {
  zeit:       { kurz: "14–15 Uhr",    lang: "Tatzeit: zwischen 14 und 15 Uhr." },
  vitrine:    { kurz: "Kein Einbruch", lang: "Die Vitrine wurde mit einem Schlüssel geöffnet, nicht aufgebrochen." },
  schluessel: { kurz: "3 Schlüssel",   lang: "Einen Schlüssel haben nur Frau Sommer, Herr Brandt und Trainer Marco." },
  abdruck:    { kurz: "Zickzack",      lang: "Abdrücke aus rotem Sand mit Zickzack-Muster: Die Person trug Tennisschuhe." },
  brandt:     { kurz: "Gummistiefel",  lang: "Herr Brandt trägt nur Gummistiefel und war draußen auf den Plätzen." },
  sommer:     { kurz: "Waffeln",       lang: "Frau Sommer hat von 14 bis 15 Uhr mit Herrn Okafor Waffeln gebacken." },
  marco:      { kurz: "10 Minuten",    lang: "Marco war um halb drei zehn Minuten im Clubhaus und kam ohne Bälle zurück." },
  zettel:     { kurz: "Der Zettel",    lang: "Zettel in Marcos Tasche: Pokal heute um 16 Uhr zur Gravur bringen." }
};

window.FAELLE = [
{
  id: "vitrine",
  nr: 1,
  titel: "Der Fall der leeren Vitrine",
  ort: "Tennisclub Grün-Weiß",
  art: "Detektiv-Fall",
  stufe: 1,
  spuren: SPUREN_VITRINE,
  verdaechtige: [
    { id: "brandt", name: "Herr Brandt", rolle: "Platzwart", farbe: "#4f7a3a", raus: "brandt", grund: "trägt nur Gummistiefel" },
    { id: "sommer", name: "Frau Sommer", rolle: "Vereinsvorsitzende", farbe: "#a8577a", raus: "sommer", grund: "war in der Küche" },
    { id: "kevin",  name: "Kevin", rolle: "Finalist, 14 Jahre", farbe: "#3b6fa8", raus: "schluessel", grund: "hat keinen Schlüssel" },
    { id: "marco",  name: "Trainer Marco", rolle: "Tennistrainer", farbe: "#c0702f" }
  ],
  kapitel: [
  {
    titel: "Die leere Vitrine",
    absaetze: [
      "Es war der Samstag vor dem großen Finale. Auf der Anlage des TC Grün-Weiß roch es nach frisch gemähtem Gras und nach Waffeln. Ella schob ihr Fahrrad durch das Tor, und Lupo, ihr kleiner brauner Hund, lief schnüffelnd voraus. Ella schrieb für die Vereinszeitung. Heute wollte sie ein Foto vom goldenen Pokal machen, um den morgen im Finale gespielt wurde.",
      "Der Pokal stand immer in der Glasvitrine im Clubhaus, gleich neben der Tür. Ella holte ihr Handy heraus, hob es hoch und ließ es wieder sinken. Die Vitrine war leer. Auf dem Regalbrett war nur noch ein runder, sauberer Fleck im Staub zu sehen. Genau dort hatte der Pokal gestanden.",
      "„Frau Sommer!“, rief Ella. Die Vereinsvorsitzende kam mit einer Schürze aus der Küche gelaufen. Als sie die leere Vitrine sah, wurde sie blass. „Das kann nicht sein! Um zwei Uhr habe ich den Pokal noch poliert.“ Ella sah auf die große Uhr über der Theke. Es war genau drei Uhr. Der Pokal musste also in der letzten Stunde verschwunden sein.",
      "Ella ging ganz nah an die Vitrine heran. Lupo setzte sich neben sie und legte den Kopf schief. [[b1]]Das Glas war heil, und am Schloss gab es keinen einzigen Kratzer. Jemand hatte die Tür also ganz normal geöffnet. „Wer hat einen Schlüssel für die Vitrine?“, fragte Ella. Frau Sommer überlegte. „Ich selbst, Herr Brandt, unser Platzwart, und Trainer Marco. Sonst niemand.“",
      "Ella zog ihr Notizbuch aus der Tasche und schrieb: Tatzeit zwischen 14 und 15 Uhr. Kein Einbruch. Drei Schlüssel. Sie kaute auf ihrem Stift. Drei Menschen, die sie alle gut kannte. Konnte wirklich einer von ihnen den Pokal genommen haben? Da bellte Lupo plötzlich laut. Er stand an der Tür, die Nase dicht am Boden, und schnüffelte an etwas Rotem."
    ],
    fragen: [
      { typ: "fakt", frage: "Wann hat Frau Sommer den Pokal zuletzt gesehen?",
        optionen: ["Um zwei Uhr, als sie ihn poliert hat", "Heute Morgen beim Aufschließen", "Um drei Uhr"], richtig: 0,
        tipp: "Lies noch einmal Absatz 3. Was sagt Frau Sommer?",
        gut: "Genau. Um zwei Uhr war der Pokal noch da, um drei Uhr nicht mehr.", spur: "zeit" },
      { typ: "wort", frage: "Ella schreibt „Tatzeit“ in ihr Notizbuch. Was bedeutet das Wort?",
        optionen: ["Die Zeit, in der die Tat passiert ist", "Die Zeit, in der Ella Tee trinkt", "Die Uhrzeit des Finales"], richtig: 0,
        tipp: "Das Wort besteht aus zwei Teilen: Tat und Zeit.",
        gut: "Richtig. Detektive schreiben immer auf, wann etwas passiert sein muss." },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Die Vitrine wurde nicht aufgebrochen.",
        beleg: "b1", tipp: "Ella untersucht die Vitrine in Absatz 4. Was fällt ihr am Glas und am Schloss auf?",
        gut: "Stark! Kein Kratzer, kein kaputtes Glas. Wer den Pokal hat, hatte einen Schlüssel.", spur: "vitrine" },
      { typ: "schluss", frage: "Wer kann die Vitrine geöffnet haben, wenn man nur auf die Schlüssel schaut?",
        optionen: ["Frau Sommer, Herr Brandt oder Trainer Marco", "Jeder, der im Clubhaus war", "Nur der Hund Lupo"], richtig: 0,
        tipp: "Frau Sommer zählt es am Ende von Absatz 4 auf.",
        gut: "Genau. Drei Personen haben einen Schlüssel. Eine davon könnte es gewesen sein.", spur: "schluessel" }
    ],
    weiter: "Was hat Lupo an der Tür gefunden? Das erfährst du in Kapitel 2."
  },
  {
    titel: "Spuren im Sand",
    absaetze: [
      "Ella kniete sich neben Lupo. Auf den hellen Fliesen lagen kleine Krümel aus rotem Sand. Den kannte sie genau: So sah der Sand auf den Tennisplätzen draußen aus. Die Krümel bildeten Abdrücke, die von der Tür bis zur Vitrine führten und wieder zurück. [[b2]]Die Abdrücke hatten ein feines Zickzack-Muster, wie es nur Tennisschuhe haben. „Gut gemacht, Lupo“, flüsterte Ella und kraulte ihn hinter den Ohren.",
      "Zuerst ging sie zu Herrn Brandt. Der Platzwart zog gerade mit einem breiten Besen den Sand auf Platz 1 glatt. [[b3]]Er trug, wie immer, seine riesigen grünen Gummistiefel. „Der Pokal ist weg?“, brummte er und stützte sich auf den Besen. „Ich bin seit dem Mittagessen hier draußen. Erst Platz 1, dann Platz 2. Zum Kaffeetrinken habe ich heute keine Zeit.“ Er klopfte gegen seinen Stiefel. „Und Tennisschuhe habe ich seit zwanzig Jahren nicht mehr angehabt.“",
      "Dann fragte Ella in der Küche nach. Dort stand Herr Okafor, ein Vater aus der Jugendmannschaft, vor einem riesigen Berg Waffeln. „Frau Sommer?“, sagte er und lachte. [[b4]]„Wir haben von zwei bis drei zusammen Waffeln gebacken, sie war keine Minute weg.“ Frau Sommer nickte. Dann fiel ihr noch etwas ein. „Kevin stand heute Morgen ewig vor der Vitrine. Letztes Jahr hat er das Finale ganz knapp gegen Jonas verloren.“",
      "Ella setzte sich auf die Bank vor dem Clubhaus und blätterte in ihrem Notizbuch. Herr Brandt trug Gummistiefel. Frau Sommer war die ganze Zeit in der Küche. Blieb nur noch Trainer Marco. Aber Marco hatte doch den ganzen Nachmittag mit Kevin auf Platz 3 trainiert, oder? Ella sah zu Platz 3 hinüber. Kevin stand am Zaun und starrte zum Clubhaus. Hatte er etwas gesehen? Oder hatte er etwas zu verbergen?"
    ],
    fragen: [
      { typ: "fakt", frage: "Was entdeckt Lupo an der Tür?",
        optionen: ["Abdrücke aus rotem Sand", "Einen verlorenen Schlüssel", "Den Deckel des Pokals"], richtig: 0,
        tipp: "Lies noch einmal den Anfang von Absatz 1.",
        gut: "Richtig. Roter Sand von den Tennisplätzen, von der Tür bis zur Vitrine." },
      { typ: "beweis", frage: "Tippe auf den Satz, der verrät, welche Schuhe die Person trug, die den Pokal genommen hat.",
        beleg: "b2", tipp: "Schau dir in Absatz 1 an, wie die Abdrücke aussehen.",
        gut: "Genau! Ein Zickzack-Muster haben nur Tennisschuhe.", spur: "abdruck" },
      { typ: "schluss", frage: "Warum war es wahrscheinlich nicht Herr Brandt?",
        optionen: ["Er trägt Gummistiefel und keine Tennisschuhe", "Er hat keinen Schlüssel für die Vitrine", "Er mag keine Pokale"], richtig: 0,
        tipp: "Lies Absatz 2 und denk an das Zickzack-Muster. Und denk daran: Einen Schlüssel hat er sehr wohl.",
        gut: "Gut kombiniert. Gummistiefel machen keine Zickzack-Abdrücke.", spur: "brandt" },
      { typ: "beweis", frage: "Tippe auf den Satz, der Frau Sommer entlastet. Entlasten heißt: zeigen, dass jemand es nicht gewesen sein kann.",
        beleg: "b4", tipp: "Herr Okafor erzählt es in Absatz 3.",
        gut: "Richtig. Wer die ganze Zeit Waffeln backt, kann nicht gleichzeitig an der Vitrine sein.", spur: "sommer" }
    ],
    weiter: "Kevin am Zaun: Was weiß er? Weiter in Kapitel 3."
  },
  {
    titel: "Zehn Minuten",
    absaetze: [
      "Ella ging mit Lupo zu Platz 3. Kevin sah ihr misstrauisch entgegen und verschränkte die Arme. „Du glaubst, ich war's, oder? Ich habe nicht mal einen Schlüssel für die Vitrine.“ „Ich glaube gar nichts“, sagte Ella ruhig. „Ich will nur wissen, was du heute Nachmittag gesehen hast.“",
      "Kevin entspannte sich ein bisschen. „Marco und ich haben von zwei bis drei trainiert. Na ja, fast.“ Er zeigte auf den leeren Ballkorb. [[b5]]„Um halb drei ist Marco zum Clubhaus gegangen, um neue Bälle zu holen, und er war bestimmt zehn Minuten weg.“ „Und? Hat er Bälle mitgebracht?“, fragte Ella. Kevin runzelte die Stirn. „Nö. Er meinte, er hätte keine gefunden. Komisch eigentlich. Im Ballschrank liegen doch immer welche.“",
      "Ella bedankte sich und ging langsam zur Trainerbank. Marco war gerade beim Getränkestand, aber seine Sporttasche lag offen auf der Bank. Seine Tennisschuhe standen daneben. Ella beugte sich vor. An den Sohlen klebte roter Sand, und das Muster war ein feines Zickzack. Natürlich, dachte Ella, das haben hier viele Schuhe. Das allein beweist noch gar nichts.",
      "Da steckte Lupo seine Nase in die Tasche und zog ein zerknittertes Stück Papier heraus. „Lupo, nicht!“, zischte Ella. Doch dann las sie, was darauf stand. [[b6]]Auf dem Zettel stand: „Gravur Schmitz, Pokal heute um 16 Uhr bringen, Abholung Sonntag 9 Uhr.“ Ellas Herz klopfte schneller. Sie legte den Zettel vorsichtig zurück und klappte ihr Notizbuch zu. Jetzt wusste sie, wer den Pokal hatte. Weißt du es auch?"
    ],
    fragen: [
      { typ: "wort", frage: "Kevin sieht Ella „misstrauisch“ entgegen. Was bedeutet das?",
        optionen: ["Er traut ihr nicht ganz und ist vorsichtig", "Er freut sich sehr, sie zu sehen", "Er ist sehr müde"], richtig: 0,
        tipp: "Lies, was Kevin gleich danach sagt. Was glaubt er, was Ella von ihm denkt?",
        gut: "Genau. Kevin denkt, Ella hält ihn für den Täter. Deshalb ist er vorsichtig." },
      { typ: "fakt", frage: "Wie lange war Marco beim Clubhaus?",
        optionen: ["Etwa zehn Minuten", "Eine ganze Stunde", "Er war gar nicht weg"], richtig: 0,
        tipp: "Kevin erzählt es in Absatz 2.",
        gut: "Richtig. Zehn Minuten, und ohne Bälle zurück. Verdächtig!", spur: "marco" },
      { typ: "beweis", frage: "Tippe auf den Satz, der verrät, was jemand mit dem Pokal vorhat.",
        beleg: "b6", tipp: "Lupo findet etwas in Absatz 4.",
        gut: "Volltreffer! Der Pokal soll heute zu einer Gravur-Werkstatt.", spur: "zettel" },
      { typ: "reihe", frage: "Bring die Ereignisse des Nachmittags in die richtige Reihenfolge. Tippe sie nacheinander an.",
        schritte: ["Frau Sommer poliert den Pokal.", "Marco geht zum Clubhaus, um Bälle zu holen.", "Ella findet die leere Vitrine.", "Lupo findet einen Zettel in Marcos Tasche."],
        tipp: "Die Uhrzeiten helfen: zwei Uhr, halb drei, drei Uhr. Und was passiert ganz zum Schluss?",
        gut: "Perfekt. So sieht der ganze Nachmittag aus." }
    ],
    weiter: "Du hast alle Spuren. Jetzt bist du dran: Wer hat den Pokal?"
  }
  ],
  anklage: {
    frage: "Wer hat den Pokal aus der Vitrine genommen?",
    kurz: "Marco",
    taeter: "marco",
    hinweisFalsch: "Eine deiner Spuren zeigt nur, wer es nicht war. Welche Spuren zeigen direkt auf Marco?",
    hinweisSchwach: "Gut, aber noch nicht stark genug. Welche Spur zeigt, dass Marco weg war oder was er vorhatte?",
    falsch: {
      brandt: "Schau in deine Akte: Herr Brandt trägt Gummistiefel. Die Abdrücke stammen aber von Tennisschuhen.",
      sommer: "Herr Okafor sagt: Frau Sommer war von zwei bis drei die ganze Zeit in der Küche.",
      kevin: "Kevin hat keinen Schlüssel, und die Vitrine wurde mit einem Schlüssel geöffnet."
    },
    beweise: ["marco", "zettel", "schluessel", "abdruck", "vitrine", "zeit"],
    muss: ["marco", "zettel"]
  },
  aufloesung: {
    titel: "Die Auflösung",
    absaetze: [
      "Als Marco vom Getränkestand zurückkam, wartete Ella schon an der Bank. „Marco“, sagte sie, „der Pokal ist in deinem Auto, stimmt's?“ Marco blieb stehen. Dann wurde er rot bis über beide Ohren. „Oh nein“, stöhnte er. „Ich habe vergessen, Frau Sommer Bescheid zu sagen!“",
      "Er erklärte alles. Als er die Bälle holen wollte, hatte er im Vorbeigehen auf den Pokal geschaut. Auf dem Sockel stand der Name des Siegers vom letzten Jahr: Jonas Kraus. Aber Jonas heißt Krause, mit e am Ende. Marco wollte den Fehler vor dem Finale heimlich reparieren lassen, als Überraschung. Er schloss die Vitrine auf und brachte den Pokal schnell in sein Auto. Dann rannte er zurück zu Kevin. Die Bälle hatte er dabei ganz vergessen.",
      "Frau Sommer musste lachen, so erleichtert war sie. Am Sonntag stand der Pokal pünktlich wieder in der Vitrine, mit dem richtigen Namen. Ella machte ihr Foto. Eine Woche später erschien in der Vereinszeitung ihr erster Artikel: „Der Fall der leeren Vitrine“. Und Lupo bekam eine extragroße Waffel."
    ],
    erzaehl: "Marco wollte etwas Gutes tun und hat trotzdem alle in Aufregung versetzt. Was hätte er besser machen können? Erzähl Papa oder Mama beim Abendessen, wie du den Fall gelöst hast und welche Spur dich auf die richtige Fährte gebracht hat."
  }
}
,

/* ================= Fall 2: Wissens-Fall ================= */
{
  id: "meeresleuchten",
  nr: 2,
  titel: "Das Rätsel vom leuchtenden Meer",
  ort: "Eine Insel in der Nordsee",
  art: "Wissens-Fall",
  stufe: 1,
  liste: "Mögliche Erklärungen",
  spuren: {
    wolken:     { kurz: "Kein Mond",       lang: "Der Himmel war voller dicker Wolken. Vom Mond war nichts zu sehen." },
    bewegung:   { kurz: "Nur bei Bewegung", lang: "Das Meer leuchtet nur, wo sich das Wasser bewegt. Steht man still, wird es dunkel." },
    punkte:     { kurz: "Winzige Punkte",  lang: "Im Glas leuchten viele einzelne Pünktchen, jedes kaum größer als ein Stecknadelkopf." },
    schuetteln: { kurz: "Schütteln",       lang: "Ruhiges Wasser bleibt dunkel. Erst beim Schütteln leuchtet es, und zwar jedes Mal neu." },
    zelle:      { kurz: "Einzeller",       lang: "Unter dem Mikroskop schwimmen im Tropfen durchsichtige Kugeln: Lebewesen aus nur einer Zelle." },
    messung:    { kurz: "Sauberes Wasser", lang: "Das Wasser wird jede Woche untersucht. Diese Woche war es völlig sauber." },
    licht:      { kurz: "Eigenes Licht",   lang: "Manche Lebewesen können selbst Licht machen, zum Beispiel Glühwürmchen." }
  },
  verdaechtige: [
    { id: "mond",    name: "Mondlicht",          zeichen: "M", rolle: "Hinnerks Idee",     farbe: "#5b6f9a", raus: "wolken",  grund: "Der Mond war nicht zu sehen" },
    { id: "gift",    name: "Gift vom Frachter",  zeichen: "G", rolle: "Mats' Idee",        farbe: "#7a7f3a", raus: "messung", grund: "Das Wasser war sauber" },
    { id: "quallen", name: "Leuchtende Quallen", zeichen: "Q", rolle: "Tante Jules Idee",  farbe: "#a8577a", raus: "punkte",  grund: "Die Lichter sind viel zu klein" },
    { id: "tiere",   name: "Winzige Lebewesen",  zeichen: "L", rolle: "Ellas Verdacht",    farbe: "#2f7f86" }
  ],
  kapitel: [
  {
    titel: "Blaue Funken",
    absaetze: [
      "Ende August fuhr Ella mit Lupo zu Tante Jule an die Nordsee. Tante Jule wohnte auf einer kleinen Insel, in einem Haus mit grünen Fensterläden direkt hinter den Dünen. Am ersten Abend war es warm und fast windstill. „Komm, wir machen noch einen Nachtspaziergang am Strand“, sagte Tante Jule und nahm eine Taschenlampe mit.",
      "Am Strand war es so dunkel, dass Ella kaum ihre eigenen Füße sah. [[b1]]Der Himmel war voller dicker Wolken, und vom Mond war nichts zu sehen. Tante Jule knipste die Taschenlampe aus, damit sich ihre Augen an die Dunkelheit gewöhnten. Doch Ella schaute nicht nach oben. Sie starrte auf das Meer. Dort, wo die kleinen Wellen am Strand umkippten, blitzte es blau auf. Es sah aus, als hätte jemand Tausende winzige Lämpchen ins Wasser gestreut.",
      "Lupo bellte und sprang ins flache Wasser. Bei jedem Schritt funkelte es blau um seine Pfoten. Ella lief hinterher. Auch um ihre Füße glitzerte es, sobald sie sich bewegte. [[b2]]Blieb sie still stehen, wurde das Wasser um sie herum wieder ganz dunkel. „Tante Jule, was ist das?“, rief Ella. Doch ihre Tante zuckte nur mit den Schultern. „Ich habe das einmal vor vielen Jahren gesehen. Vielleicht sind es leuchtende Quallen?“",
      "Am Strandkiosk saß noch Hinnerk, der alte Mann, der tagsüber Fischbrötchen verkaufte. „Das ist nur der Mond, der sich im Wasser spiegelt“, brummte er. Neben ihm stand ein Junge im Kapuzenpulli. Das war Mats, Hinnerks Enkel. „Quatsch, Opa“, sagte Mats. „Gestern ist ein riesiger Frachter vorbeigefahren. Der hat bestimmt etwas Giftiges verloren, und das leuchtet jetzt im Wasser!“ Ella bekam eine Gänsehaut. Gift im Meer? Und Lupo stand mittendrin!",
      "Schnell rief sie Lupo aus dem Wasser. Zu Hause schrieb sie in ihr Notizbuch: Drei Erklärungen. Hinnerk sagt: Mond. Mats sagt: Gift. Tante Jule sagt: Quallen. Darunter schrieb sie: Ich glaube nichts, bevor ich es geprüft habe. Morgen mache ich ein Experiment."
    ],
    fragen: [
      { typ: "fakt", frage: "Was sieht Ella dort, wo die Wellen am Strand umkippen?",
        optionen: ["Es blitzt blau auf", "Das Wasser färbt sich grün", "Es schwimmen viele kleine Fische"], richtig: 0,
        tipp: "Lies noch einmal das Ende von Absatz 2.",
        gut: "Genau. Blaue Funken, wie Tausende winzige Lämpchen." },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Das Leuchten hört auf, wenn sich nichts bewegt.",
        beleg: "b2", tipp: "Ella probiert es in Absatz 3 mit ihren eigenen Füßen aus.",
        gut: "Stark beobachtet! Das Leuchten hat etwas mit Bewegung zu tun.", spur: "bewegung" },
      { typ: "schluss", frage: "Warum ist Hinnerks Erklärung mit dem Mond unwahrscheinlich?",
        optionen: ["Der Mond war hinter dicken Wolken versteckt", "Der Mond spiegelt sich nie im Wasser", "Hinnerk war gar nicht am Strand"], richtig: 0,
        tipp: "Schau in Absatz 2, wie der Himmel aussah.",
        gut: "Richtig. Was man nicht sieht, kann sich auch nicht spiegeln.", spur: "wolken" },
      { typ: "wort", frage: "Ella bekommt eine „Gänsehaut“. Was bedeutet das hier?",
        optionen: ["Sie erschrickt und bekommt ein bisschen Angst", "Ihr wird vor Freude ganz warm", "Sie hat Hunger"], richtig: 0,
        tipp: "Lies, woran Ella gerade denkt: Gift im Meer, und Lupo mittendrin.",
        gut: "Genau. Bei Angst oder Kälte stellen sich die Härchen auf der Haut auf." }
    ],
    weiter: "Ella plant ein Experiment. Klappt es? Weiter in Kapitel 2."
  },
  {
    titel: "Das Glas-Experiment",
    absaetze: [
      "Am nächsten Morgen fragte Ella Tante Jule nach einem leeren Marmeladenglas mit Deckel. „Wofür brauchst du das?“, fragte Tante Jule. „Für ein Experiment“, sagte Ella. „Ich habe eine Vermutung, und die will ich prüfen.“ In der Schule hatte sie gelernt, wie Forscher arbeiten: Zuerst überlegt man sich eine Vermutung. Dann denkt man sich einen Versuch aus. Und dann beobachtet man ganz genau, was passiert.",
      "Ellas Vermutung war: Das Leuchten steckt im Wasser selbst. Am Abend, als es wieder dunkel war, ging sie mit Lupo zum Strand. Diesmal kam auch Mats mit, weil er neugierig war. Ella watete ins flache Wasser, füllte das Glas bis zum Rand mit Meerwasser und schraubte den Deckel fest zu.",
      "Zuerst passierte gar nichts. Das Wasser im Glas war schwarz wie Tinte. „Siehst du, nichts“, sagte Mats enttäuscht. Doch dann schüttelte Ella das Glas kräftig. Sofort blitzten darin blaue Funken auf. [[b3]]Es waren viele einzelne Pünktchen, jedes kaum größer als ein Stecknadelkopf. Nach ein paar Sekunden war das Glas wieder dunkel. Ella schüttelte es noch einmal, und wieder funkelte es. [[b4]]Das Wasser leuchtete jedes Mal neu, sobald sie das Glas bewegte, und wurde dunkel, sobald es stillstand.",
      "„Vielleicht ist das Gift in Tropfen“, meinte Mats. Ella hielt das Glas ganz nah an ihr Auge. „Eine Qualle ist da jedenfalls nicht drin“, sagte sie. „Quallen sind so groß wie eine Untertasse, manche sogar viel größer. Diese Lichter sind winzig.“ Mats kratzte sich am Kopf. „Und wenn es doch Gift ist?“ Darauf wusste Ella keine Antwort.",
      "Am nächsten Morgen stellte sie das Glas ans Fenster und betrachtete es im Sonnenlicht. Das Wasser sah fast ganz normal aus. Nur wenn sie sehr genau hinschaute, sah sie winzige, durchsichtige Kügelchen darin schweben, wie Körner von Grieß. Ella zeichnete sie in ihr Notizbuch. Dann packte sie das Glas in ihren Rucksack. Tante Jule hatte ihr nämlich erzählt, dass es auf der Insel ein Nationalpark-Haus gab. Und dort arbeitete eine echte Meeresforscherin."
    ],
    fragen: [
      { typ: "reihe", frage: "Ella arbeitet wie eine Forscherin. Bring ihre Schritte in die richtige Reihenfolge. Tippe sie nacheinander an.",
        schritte: ["Sie überlegt sich eine Vermutung.", "Sie füllt Meerwasser in ein Glas.", "Sie schüttelt das Glas und beobachtet.", "Sie zeichnet ab, was sie im Sonnenlicht sieht."],
        tipp: "Absatz 1 verrät, womit Forscher anfangen. Der Rest steht in der Reihenfolge der Absätze.",
        gut: "Perfekt. Vermutung, Versuch, Beobachtung: So arbeiten echte Forscher." },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Das Leuchten kommt immer wieder, wenn man das Glas bewegt.",
        beleg: "b4", tipp: "Ella schüttelt das Glas in Absatz 3 mehrmals. Was beobachtet sie?",
        gut: "Genau! Bewegung schaltet das Licht an, jedes Mal.", spur: "schuetteln" },
      { typ: "schluss", frage: "Warum glaubt Ella nicht, dass Quallen das Leuchten machen?",
        optionen: ["Die Lichter im Glas sind viel zu klein für Quallen", "In der Nordsee gibt es keine Quallen", "Quallen leben nur im tiefen Wasser"], richtig: 0,
        tipp: "Lies, was Ella in Absatz 4 über die Größe sagt.",
        gut: "Richtig. Stecknadelkopf gegen Untertasse: Das passt nicht zusammen.", spur: "punkte" },
      { typ: "wort", frage: "Ella hat eine „Vermutung“. Was ist das?",
        optionen: ["Eine Idee, die noch nicht bewiesen ist", "Ein Gerät, mit dem man misst", "Ein Beweis, der sicher stimmt"], richtig: 0,
        tipp: "Ella will ihre Vermutung erst noch prüfen. Was sagt dir das?",
        gut: "Genau. Eine Vermutung muss man erst prüfen, dann weiß man mehr." }
    ],
    weiter: "Was sagt die Meeresforscherin? Weiter in Kapitel 3."
  },
  {
    titel: "Im Nationalpark-Haus",
    absaetze: [
      "Das Nationalpark-Haus war ein flaches Gebäude mit großen Fenstern. Drinnen standen Aquarien mit Krebsen, Seesternen und kleinen Plattfischen. Mats war auch mitgekommen. Er wollte unbedingt wissen, ob er mit seinem Gift recht hatte. Hinter einem Tisch voller Bücher und Gläser saß eine Frau mit kurzen grauen Haaren. Auf ihrem Namensschild stand: Dr. Frieda Ahlers, Meeresbiologin.",
      "Ella stellte ihr Glas auf den Tisch und erzählte alles: von den blauen Funken, vom Schütteln und von den winzigen Kügelchen. Frau Ahlers hörte aufmerksam zu. „Das ist ein richtiges Experiment“, sagte sie anerkennend. „Lass uns genauer hinsehen.“ Sie nahm mit einer Pipette einen Tropfen aus dem Glas und legte ihn unter ihr Mikroskop.",
      "Ella schaute hinein. [[b5]]Im Tropfen schwammen mehrere durchsichtige Kugeln, und Frau Ahlers erklärte, dass jede davon ein Lebewesen aus einer einzigen Zelle ist. An jeder Kugel hing ein kleiner Faden, wie ein winziger Schwanz. „Die leben?“, fragte Ella erstaunt. „Ja“, sagte Frau Ahlers. „Im Spätsommer gibt es davon manchmal Milliarden im Wasser, wenn es warm ist und sie viel Futter finden.“",
      "Jetzt drängelte sich Mats nach vorn. „Und das Gift von dem Frachter?“ Frau Ahlers zeigte auf eine Tabelle an der Wand. [[b6]]„Wir untersuchen das Wasser rund um die Insel jede Woche, und diese Woche war es völlig sauber.“ Mats wurde ein bisschen rot. „Okay“, murmelte er. „Das mit dem Frachter habe ich mir nur so ausgedacht.“",
      "Dann holte Frau Ahlers ein Buch aus dem Regal und schlug ein Foto von Glühwürmchen auf. „Weißt du, warum Glühwürmchen nachts leuchten?“, fragte sie. „Sie haben keine Lampe eingebaut. In ihrem Körper treffen zwei Stoffe aufeinander, und dabei entsteht Licht. Manche Lebewesen können das. Sie machen ihr eigenes Licht.“ Sie zwinkerte Ella zu. „Den Rest findest du bestimmt selbst heraus.“ Ella schaute auf das Glas, dann auf das Foto, dann wieder auf das Glas. Plötzlich musste sie grinsen. Jetzt wusste sie, warum das Meer leuchtete. Weißt du es auch?"
    ],
    fragen: [
      { typ: "beweis", frage: "Tippe auf den Satz, der verrät, was die Kügelchen im Glas sind.",
        beleg: "b5", tipp: "Ella schaut in Absatz 3 durch das Mikroskop.",
        gut: "Volltreffer! Die Kügelchen sind Lebewesen, jedes nur eine einzige Zelle.", spur: "zelle" },
      { typ: "fakt", frage: "Wann gibt es besonders viele dieser Lebewesen im Meer?",
        optionen: ["Im Spätsommer, wenn das Wasser warm ist", "Im Winter, wenn das Meer kalt ist", "Nur bei Vollmond"], richtig: 0,
        tipp: "Frau Ahlers sagt es am Ende von Absatz 3.",
        gut: "Richtig. Deshalb hat Ella das Leuchten Ende August gesehen." },
      { typ: "schluss", frage: "Warum kann das Leuchten nicht von Gift aus dem Frachter kommen?",
        optionen: ["Das Wasser wird jede Woche untersucht und war sauber", "Frachter fahren nie an Inseln vorbei", "Gift leuchtet immer grün"], richtig: 0,
        tipp: "Lies, was Frau Ahlers in Absatz 4 Mats antwortet.",
        gut: "Genau. Mats hatte nur geraten, die Messung zeigt etwas anderes.", spur: "messung" },
      { typ: "wort", frage: "Frau Ahlers sagt „anerkennend“: „Das ist ein richtiges Experiment.“ Wie meint sie das?",
        optionen: ["Sie findet gut, was Ella gemacht hat", "Sie macht sich über Ella lustig", "Sie langweilt sich"], richtig: 0,
        tipp: "Anerkennen hat mit Anerkennung zu tun. Was macht Frau Ahlers danach?",
        gut: "Richtig. Sie lobt Ella und nimmt ihr Experiment ernst." },
      { typ: "schluss", frage: "Warum zeigt Frau Ahlers ein Foto von Glühwürmchen?",
        optionen: ["Weil auch Glühwürmchen Lebewesen sind, die selbst Licht machen", "Weil Glühwürmchen im Meer leben", "Weil Ella ein Insekt abzeichnen soll"], richtig: 0,
        tipp: "Lies Absatz 5. Was können Glühwürmchen und manche anderen Lebewesen?",
        gut: "Genau! Das ist der letzte Hinweis, den Ella gebraucht hat.", spur: "licht" }
    ],
    weiter: "Du hast alle Spuren. Was bringt das Meer zum Leuchten?"
  }
  ],
  anklage: {
    titel: "Deine Erklärung",
    frage: "Was bringt das Meer zum Leuchten?",
    knopf: "Erklärung abgeben",
    kurz: "Lebewesen",
    taeter: "tiere",
    gefunden: "Das glaube ich auch! Und wie beweist du das?",
    falsch: {
      mond: "Schau in deine Akte: Am Himmel waren dicke Wolken. Der Mond war gar nicht zu sehen.",
      gift: "Frau Ahlers hat das Wasser untersucht. Diese Woche war es sauber.",
      quallen: "Die Lichter im Glas sind winzig wie Stecknadelköpfe. Quallen sind viel größer."
    },
    beweise: ["zelle", "licht", "schuetteln", "punkte", "bewegung"],
    muss: ["zelle", "licht"],
    hinweisFalsch: "Eine deiner Spuren zeigt nur, welche Erklärung nicht stimmt. Welche Spuren zeigen direkt auf die richtige?",
    hinweisSchwach: "Gut, aber noch nicht stark genug. Welche Spur zeigt, dass es Lebewesen sind, die selbst Licht machen können?"
  },
  aufloesung: {
    titel: "Die Auflösung",
    absaetze: [
      "„Es sind die winzigen Lebewesen!“, rief Ella. „Sie machen ihr eigenes Licht, genau wie Glühwürmchen.“ Frau Ahlers klatschte in die Hände. „Richtig! Sie heißen Meeresleuchttierchen. Forscher nennen sie Noctiluca. Das ist Latein und bedeutet so viel wie: die in der Nacht leuchtet.“",
      "Dann erklärte sie, was im Wasser passiert. Die Leuchttierchen sind winzig, meistens nur etwa einen Millimeter groß. In ihrer einzigen Zelle stecken zwei besondere Stoffe. Wenn eine Welle, ein Fuß oder eine Hundepfote das Wasser bewegt, wird das Tierchen ein kleines bisschen gedrückt. Dann treffen die beiden Stoffe aufeinander, und für einen kurzen Moment entsteht blaues Licht. Forscher nennen das Biolumineszenz. Das Licht ist übrigens kalt und nicht heiß wie bei einer Glühbirne.",
      "„Aber warum leuchten sie überhaupt?“, wollte Mats wissen. „Wahrscheinlich ist es eine Art Alarmanlage“, sagte Frau Ahlers. „Winzige Krebse fressen gern Leuchttierchen. Wenn so ein Krebs zubeißen will, blitzt es plötzlich. Das erschreckt ihn. Und das Licht kann größere Fische anlocken, die dann den Krebs fressen.“ Mats grinste. „Ziemlich schlau für etwas, das nur aus einer Zelle besteht.“",
      "Für Menschen sind die Meeresleuchttierchen nicht gefährlich. Am letzten Abend der Ferien gingen Ella, Mats, Tante Jule und sogar Hinnerk noch einmal zum Strand. Lupo rannte durch die Wellen, und überall um ihn herum funkelte es blau. „Mond, Gift, Quallen“, brummte Hinnerk, „und am Ende waren es Tierchen, die man kaum sieht.“ Ella lachte und schrieb in ihr Notizbuch: Fall gelöst. Mit einem Experiment."
    ],
    erzaehl: "Ella hat nicht einfach geglaubt, was die anderen gesagt haben. Sie hat eine Vermutung aufgestellt und ein Experiment gemacht. Erklär Papa oder Mama beim Abendessen, warum das Meer leuchtet. Und überlegt zusammen: Welche Frage könntet ihr zu Hause mit einem eigenen Experiment klären?"
  }
},

/* ================= Fall 3: Detektiv-Fall, Stufe 2 ================= */
{
  id: "kruemel",
  nr: 3,
  titel: "Wo ist Krümel?",
  ort: "Ellas Schule",
  art: "Detektiv-Fall",
  stufe: 2,
  liste: "Mögliche Verstecke",
  spuren: {
    riegel:   { kurz: "Lockerer Riegel", lang: "Der Riegel der Käfigtür ist verbogen. Ein Hamster kann die Tür mit der Nase aufdrücken." },
    samstag:  { kurz: "Samstag da",      lang: "Herr Yilmaz hat Krümel am Samstagmorgen noch im Käfig gesehen. Am Wochenende war außer ihm niemand in der Schule." },
    hamster:  { kurz: "Hamster-Wissen",  lang: "Hamster sind nachts unterwegs, laufen an Wänden entlang, sammeln Futter und bauen Nester aus Papier." },
    schalen:  { kurz: "Schalen-Spur",    lang: "Leere Sonnenblumenkern-Schalen liegen an der Wand entlang, vom Klassenraum bis zum Kunstraum." },
    futter:   { kurz: "Vogelfutter",     lang: "Im Kunstraum steht seit Freitag ein offener Sack mit Sonnenblumenkernen." },
    gefegt:   { kurz: "Frisch gefegt",   lang: "Herr Yilmaz hat am Freitagnachmittag alle Flure gefegt. Die Schalen kamen erst danach." },
    keller:   { kurz: "Kellertür dicht", lang: "Die Kellertür ist aus Metall, hat unten eine dicke Gummileiste und war das ganze Wochenende abgeschlossen." },
    papier:   { kurz: "Papierfetzen",    lang: "Unter dem Materialschrank im Kunstraum liegen zerkaute Fetzen von Krepppapier." },
    rascheln: { kurz: "Rascheln",        lang: "Aus dem Materialschrank im Kunstraum raschelt es leise." }
  },
  verdaechtige: [
    { id: "jonas",  name: "Bei Jonas zu Hause",  zeichen: "J", rolle: "Gerücht in der Klasse",  farbe: "#3b6fa8", raus: "samstag", grund: "Krümel war Samstag noch da" },
    { id: "keller", name: "Im Heizungskeller",   zeichen: "H", rolle: "Idee von Herrn Yilmaz",  farbe: "#7a5a3a", raus: "keller",  grund: "Die Kellertür war dicht" },
    { id: "lehrer", name: "Im Lehrerzimmer",     zeichen: "L", rolle: "liegt am Flur",          farbe: "#6a6f78", raus: "schalen", grund: "Die Spur führt daran vorbei" },
    { id: "kunst",  name: "Im Kunstraum",        zeichen: "K", rolle: "Ellas Verdacht",         farbe: "#c0702f" }
  ],
  kapitel: [
  {
    titel: "Der leere Käfig",
    absaetze: [
      "Am Montagmorgen war es in der Klasse 6a ungewöhnlich laut. Ella hängte gerade ihre Jacke auf, da hörte sie schon den Schrei: „Krümel ist weg!“ Krümel war der Goldhamster der Klasse. Er wohnte in einem großen Käfig auf der Fensterbank, mit Laufrad, Häuschen und einem Berg aus Heu. Jetzt war das Häuschen leer, und die Käfigtür stand einen Spalt offen.",
      "Sofort drängten sich alle um den Käfig. „Wer hatte am Freitag Fütterdienst?“, fragte Lina laut. Alle Köpfe drehten sich zu Jonas. Jonas wurde blass. „Ich habe die Tür zugemacht, ganz bestimmt!“, sagte er. „Ja, ja“, rief Ben. „Du wolltest Krümel doch schon in den Herbstferien mit nach Hause nehmen. Bestimmt hast du ihn einfach mitgenommen!“ Ein paar Kinder nickten. Jonas presste die Lippen zusammen und starrte auf seine Schuhe.",
      "Ella sagte nichts. Sie dachte an ihren Fall mit dem Pokal im Tennisclub. Damals hatte sie gelernt: Wer zu schnell einen Schuldigen sucht, übersieht leicht die Spuren. Sie ging ganz nah an den Käfig heran und sah sich die Tür genau an. [[b1]]Der kleine Metallriegel war verbogen, und als Ella die Tür mit einem Finger anstieß, schwang sie ganz leicht auf. Ein Hamster konnte sie mit der Nase aufdrücken, ganz ohne Hilfe.",
      "Dann kam Frau Lehmann herein, die Klassenlehrerin. Als sie hörte, was los war, setzte sie sich auf die Kante ihres Pults. „Hier wird niemand beschuldigt, solange wir nicht mehr wissen“, sagte sie streng. „Wir fragen zuerst Herrn Yilmaz. Er war am Wochenende in der Schule, weil die Heizung repariert wurde.“",
      "In der großen Pause liefen Ella und Lina zum Büro des Hausmeisters. Herr Yilmaz saß bei einer Tasse Tee und hörte sich alles an. Dann runzelte er die Stirn. [[b2]]„Am Samstagmorgen habe ich noch nach dem kleinen Kerl geschaut, da lag er in seinem Häuschen und hat geschlafen.“ Er überlegte. „Außer mir war am ganzen Wochenende niemand im Gebäude. Alle Türen nach draußen waren abgeschlossen.“ Ella schrieb mit: Krümel war am Samstag noch da. Niemand außer Herrn Yilmaz war in der Schule.",
      "„Dann kann Jonas ihn ja gar nicht mitgenommen haben!“, sagte Lina. „Genau“, sagte Ella. „Krümel muss noch irgendwo im Schulgebäude sein.“ Herr Yilmaz nickte langsam. „Vielleicht ist er in den Heizungskeller gelaufen. Da unten ist es schön warm.“ Ella sah den langen Flur hinunter. Die Schule war riesig, mit drei Stockwerken, Dutzenden Räumen, Schränken und Ecken. Wie sollte man darin einen Hamster finden, der kleiner war als eine Faust?"
    ],
    fragen: [
      { typ: "fakt", frage: "Warum glauben einige Kinder, dass Jonas Krümel mitgenommen hat?",
        optionen: ["Er hatte Fütterdienst und wollte Krümel schon in den Ferien mit nach Hause nehmen", "Er hat Krümel in seinem Rucksack gezeigt", "Er war am Wochenende in der Schule"], richtig: 0,
        tipp: "Lies noch einmal Absatz 2. Was ruft Ben?",
        gut: "Genau. Das klingt erst einmal verdächtig. Aber ist es auch ein Beweis?" },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Krümel könnte ganz allein aus dem Käfig gekommen sein.",
        beleg: "b1", tipp: "Ella untersucht in Absatz 3 die Käfigtür.",
        gut: "Stark! Mit einem verbogenen Riegel braucht ein Hamster keine Hilfe.", spur: "riegel" },
      { typ: "schluss", frage: "Warum kann Jonas Krümel nicht mit nach Hause genommen haben?",
        optionen: ["Krümel war am Samstag noch da, und am Wochenende war außer Herrn Yilmaz niemand in der Schule", "Jonas mag keine Hamster", "Jonas hatte am Freitag gar keinen Fütterdienst"], richtig: 0,
        tipp: "Lies, was Herr Yilmaz in Absatz 5 erzählt. Wann hat er Krümel zuletzt gesehen?",
        gut: "Richtig. Am Freitag war Krümel noch da, am Samstag auch. Danach kam kein Kind mehr in die Schule.", spur: "samstag" },
      { typ: "wort", frage: "Frau Lehmann sagt: „Hier wird niemand beschuldigt.“ Was bedeutet „beschuldigen“?",
        optionen: ["Behaupten, dass jemand etwas Schlimmes getan hat", "Jemandem bei den Hausaufgaben helfen", "Jemanden zum Geburtstag einladen"], richtig: 0,
        tipp: "In dem Wort steckt „Schuld“.",
        gut: "Genau. Und das sollte man erst tun, wenn man Beweise hat." },
      { typ: "schluss", frage: "Ella sagt am Anfang nichts und schaut sich lieber den Käfig an. Warum ist das klug?",
        optionen: ["Weil man erst Spuren prüfen sollte, bevor man jemanden verdächtigt", "Weil sie Jonas nicht leiden kann", "Weil sie schüchtern ist"], richtig: 0,
        tipp: "Lies, woran Ella in Absatz 3 denkt.",
        gut: "Richtig. So arbeiten gute Detektive, und so ist es auch fair." }
    ],
    weiter: "Wo steckt Krümel? Ella will herausfinden, wie ein Hamster denkt. Weiter in Kapitel 2."
  },
  {
    titel: "Was Hamster nachts tun",
    absaetze: [
      "Nach der Schule ging Ella zuerst in die Schulbibliothek. Wenn sie Krümel finden wollte, musste sie wissen, wie ein Hamster denkt. Sie fand ein dickes Tierbuch und blätterte zum Kapitel über Goldhamster. Lina setzte sich neben sie und las mit.",
      "Im Buch stand, dass Goldhamster ursprünglich aus Syrien stammen, einem Land, in dem es tagsüber sehr heiß ist. [[b3]]Deshalb schlafen Hamster am Tag und sind nachts unterwegs, und dabei laufen sie am liebsten dicht an Wänden entlang, weil sie sich dort sicher fühlen. Hamster sind außerdem Sammler. Sie stopfen Futter in ihre Backentaschen und schleppen es in ein Versteck. Für ihr Nest zerrupfen sie weiches Material, zum Beispiel Heu oder Papier. Und sie können sich durch erstaunlich schmale Spalten quetschen.",
      "„An Wänden entlang“, murmelte Ella. „Dann suchen wir den Boden an den Wänden ab.“ Sie hatte Glück: Herr Yilmaz erlaubte ihr, nach Schulschluss Lupo mit ins Gebäude zu bringen. „Aber nur heute, und nur, weil es um ein Tier in Not geht“, sagte er. Lupo hatte schon im Tennisclub bewiesen, was für eine gute Nase er hatte.",
      "Sie begannen im Klassenraum der 6a. Lupo schnüffelte am Käfig, dann an der Tür, dann lief er mit der Nase am Boden auf den Flur hinaus. Ella kniete sich hin. [[b4]]Direkt an der Wand lagen leere Schalen von Sonnenblumenkernen, alle paar Meter eine, als hätte jemand eine Spur gelegt. Die Schalen führten den Flur entlang, am Lehrerzimmer vorbei, die Treppe hinunter, bis zu einer Tür im Erdgeschoss. Auf dem Schild stand: Kunstraum.",
      "„Moment mal“, sagte Lina. „Krümel bekommt doch gar keine Sonnenblumenkerne, nur Hamsterfutter.“ Ella überlegte. Dann fiel ihr etwas ein. Am Freitag hatten sie im Kunstunterricht Futterglocken für Vögel gebastelt. Frau Lehmann hatte dafür einen großen Sack Vogelfutter mitgebracht. [[b5]]Der Sack mit den Sonnenblumenkernen stand seit Freitag offen im Kunstraum, gleich neben dem Materialschrank.",
      "„Vielleicht hat Krümel das Futter gerochen“, sagte Ella. „Hamster haben eine gute Nase.“ Doch bevor sie die Tür zum Kunstraum öffnen konnten, kam Ben um die Ecke, mit seinem Fußball unter dem Arm. „Sucht ihr immer noch den Hamster?“, fragte er. „Den hat Jonas, das weiß doch jeder.“ Lina verdrehte die Augen. Doch Ella bemerkte, dass Lupo plötzlich ganz aufgeregt an Bens Turnbeutel schnüffelte. Ella stutzte. Was hatte das zu bedeuten?"
    ],
    fragen: [
      { typ: "fakt", frage: "Warum sind Hamster nachts unterwegs?",
        optionen: ["Sie stammen aus Syrien, wo es tagsüber sehr heiß ist", "Sie haben Angst vor Kindern", "Sie können tagsüber nichts sehen"], richtig: 0,
        tipp: "Die Antwort steht am Anfang von Absatz 2.",
        gut: "Genau. Wer tagsüber in der Hitze schläft, ist nachts aktiv." },
      { typ: "beweis", frage: "Tippe auf den Satz, der Ella verrät, wo sie nach Krümels Spur suchen sollte.",
        beleg: "b3", tipp: "Im Tierbuch steht, wo Hamster am liebsten entlanglaufen.",
        gut: "Richtig! An den Wänden entlang. Genau dort sucht Ella.", spur: "hamster" },
      { typ: "fakt", frage: "Wohin führt die Spur aus Sonnenblumenkern-Schalen?",
        optionen: ["Zum Kunstraum im Erdgeschoss", "Ins Lehrerzimmer", "In den Heizungskeller"], richtig: 0,
        tipp: "Folge der Spur in Absatz 4 bis zum Ende.",
        gut: "Genau. Am Lehrerzimmer vorbei, die Treppe runter, bis zum Kunstraum.", spur: "schalen" },
      { typ: "schluss", frage: "Warum könnte Krümel ausgerechnet in den Kunstraum gelaufen sein?",
        optionen: ["Dort steht ein offener Sack mit Sonnenblumenkernen", "Dort ist die Tür nach draußen", "Dort steht sein Laufrad"], richtig: 0,
        tipp: "Lies Absatz 5 und denk daran, dass Hamster Sammler sind.",
        gut: "Gut kombiniert. Ein Hamster mit guter Nase und ein offener Futtersack!", spur: "futter" },
      { typ: "reihe", frage: "Bring Ellas Ermittlung in die richtige Reihenfolge. Tippe sie nacheinander an.",
        schritte: ["Ella liest im Tierbuch über Goldhamster.", "Herr Yilmaz erlaubt, dass Lupo mitkommt.", "Lupo läuft mit der Nase am Boden auf den Flur.", "Ella entdeckt die Schalen an der Wand."],
        tipp: "Die Absätze 1 bis 4 erzählen es der Reihe nach.",
        gut: "Perfekt. Erst Wissen sammeln, dann suchen: So geht Ermitteln." }
    ],
    weiter: "Warum schnüffelt Lupo an Bens Turnbeutel? Weiter in Kapitel 3."
  },
  {
    titel: "Das Rascheln im Schrank",
    absaetze: [
      "„Lupo, aus!“, sagte Ella. Doch Lupo schnüffelte weiter an Bens Turnbeutel. Ben lachte und zog eine Tüte heraus. „Der will nur meine Sonnenblumenkerne“, sagte er und steckte sich gleich ein paar in den Mund. „Die knabbere ich jeden Tag in der Pause.“ Lina sah Ella erschrocken an. „Dann sind die Schalen auf dem Flur vielleicht von Ben und gar keine Hamsterspur!“",
      "Ella spürte, wie ihr ganzer Plan wackelte. Dann hatte sie eine Idee. Sie lief zurück zum Büro des Hausmeisters. „Herr Yilmaz, wann haben Sie die Flure zuletzt gefegt?“ Herr Yilmaz musste nicht lange nachdenken. [[b6]]„Am Freitagnachmittag, nachdem alle Kinder weg waren, habe ich jeden Flur gefegt, so wie jede Woche.“ Ella atmete auf. Die Schalen mussten also am Wochenende auf den Flur gekommen sein. Und am Wochenende war kein Kind in der Schule, auch Ben nicht.",
      "„Und was ist mit dem Keller?“, fragte Lina. Herr Yilmaz schüttelte den Kopf. [[b7]]„Die Kellertür ist aus schwerem Metall, hat unten eine dicke Gummileiste und war das ganze Wochenende abgeschlossen.“ Darunter passte nicht einmal ein Blatt Papier durch, geschweige denn ein Hamster.",
      "Jetzt öffneten sie leise die Tür zum Kunstraum. Der Raum roch nach Farbe und Kleister. Neben dem Materialschrank stand der Sack mit dem Vogelfutter. Er war umgekippt, und auf dem Boden lagen Kerne verstreut. Ella kniete sich hin. [[b8]]Unter dem Schrank lagen kleine, zerrupfte Fetzen von rotem und gelbem Krepppapier, als hätte jemand sie mit winzigen Zähnen zerkaut. Lupo legte sich flach auf den Bauch und schob die Nase an den Spalt unter dem Schrank. Sein Schwanz wedelte wie verrückt.",
      "„Psst!“, flüsterte Ella. Alle hielten den Atem an. Da war es: ein leises Rascheln, irgendwo im Schrank. Dann war es wieder still. Ella dachte an das Tierbuch. Hamster schlafen am Tag. Und Hamster bauen Nester aus weichem Material. In der untersten Schublade des Materialschranks lag, das wusste sie aus dem Kunstunterricht, ein ganzer Stapel Krepppapier.",
      "Ella stand auf und sah die anderen an: Lina, Ben, Herrn Yilmaz, der inzwischen auch in der Tür stand, und Lupo mit seiner zitternden Nase. „Ich glaube, ich weiß jetzt, wo Krümel ist“, sagte sie leise. „Und ich weiß auch, wie er dorthin gekommen ist.“ Weißt du es auch?"
    ],
    fragen: [
      { typ: "schluss", frage: "Warum können die Schalen auf dem Flur nicht von Ben stammen?",
        optionen: ["Die Flure wurden am Freitag gefegt, und am Wochenende war kein Kind in der Schule", "Ben isst nie Sonnenblumenkerne", "Ben war die ganze Woche krank"], richtig: 0,
        tipp: "Lies, was Herr Yilmaz in Absatz 2 erzählt, und denk an das Wochenende.",
        gut: "Stark kombiniert! Die Schalen kamen nach dem Fegen, als kein Kind da war.", spur: "gefegt" },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Krümel ist nicht im Heizungskeller.",
        beleg: "b7", tipp: "Lina fragt in Absatz 3 nach dem Keller.",
        gut: "Genau. Durch diese Tür kommt kein Hamster.", spur: "keller" },
      { typ: "wort", frage: "„Nicht einmal ein Blatt Papier, geschweige denn ein Hamster.“ Was bedeutet „geschweige denn“?",
        optionen: ["Und erst recht nicht", "Und außerdem auch", "Und zwar ganz schnell"], richtig: 0,
        tipp: "Wenn schon ein dünnes Blatt Papier nicht durchpasst, wie ist es dann mit einem Hamster?",
        gut: "Richtig. Ein schönes Wort für Texte, merk es dir!" },
      { typ: "beweis", frage: "Tippe auf den Satz, der auf ein Hamsternest hinweist.",
        beleg: "b8", tipp: "Denk an das Tierbuch: Woraus bauen Hamster ihr Nest? Ella findet es in Absatz 4.",
        gut: "Volltreffer! Zerkautes Papier, genau wie im Tierbuch.", spur: "papier" },
      { typ: "fakt", frage: "Was hören die Kinder im Kunstraum?",
        optionen: ["Ein leises Rascheln im Schrank", "Ein lautes Piepsen unter dem Tisch", "Gar nichts"], richtig: 0,
        tipp: "Alle halten in Absatz 5 den Atem an. Was hören sie?",
        gut: "Genau. Da schläft jemand ganz in der Nähe.", spur: "rascheln" }
    ],
    weiter: "Du hast alle Spuren. Wo ist Krümel?"
  }
  ],
  anklage: {
    titel: "Deine Lösung",
    frage: "Wo ist Krümel?",
    knopf: "Lösung sagen",
    kurz: "Kunstraum",
    taeter: "kunst",
    gefunden: "Das glaube ich auch! Und wie beweist du das?",
    falsch: {
      jonas: "Herr Yilmaz hat Krümel am Samstag noch gesehen. Danach war kein Kind mehr in der Schule, auch Jonas nicht.",
      keller: "Die Kellertür war abgeschlossen und hat unten eine dicke Gummileiste. Da kommt kein Hamster durch.",
      lehrer: "Die Schalen-Spur führt am Lehrerzimmer vorbei, bis hinunter zum Kunstraum."
    },
    beweise: ["papier", "rascheln", "schalen", "futter", "hamster", "gefegt"],
    muss: ["papier", "rascheln", "schalen"],
    hinweisFalsch: "Eine deiner Spuren zeigt nur, wo Krümel nicht ist. Welche Spuren führen direkt zu ihm?",
    hinweisSchwach: "Gut, aber noch nicht stark genug. Welche Spur führt direkt in den Kunstraum oder zum Schrank?"
  },
  aufloesung: {
    titel: "Die Auflösung",
    absaetze: [
      "Ganz vorsichtig zog Ella die unterste Schublade des Materialschranks auf. Zuerst sah sie nur einen wilden Haufen aus zerrupftem Krepppapier, rot, gelb und grün. Dann bewegte sich der Haufen. Ein kleines, rundes Gesicht mit schwarzen Knopfaugen schaute heraus und blinzelte verschlafen. „Krümel!“, flüsterten Lina und Ben gleichzeitig.",
      "Krümel hatte sich ein richtiges Hamsterparadies gebaut. In die Schublade war er durch ein Loch in der Rückwand des Schranks geklettert, und ganz hinten lag ein Vorrat aus Sonnenblumenkernen, bestimmt zwei Handvoll. Ella konnte sich genau vorstellen, wie es gewesen war. In der Nacht zum Sonntag hatte Krümel die lockere Käfigtür aufgedrückt. Er war an der Wand entlang über den Flur getrippelt, immer der Nase nach, bis zum Vogelfutter. Dann war er mehrmals hin und her gelaufen, und unterwegs hatte er immer wieder einen Kern geknackt. So war die Schalen-Spur entstanden.",
      "Am nächsten Morgen saß Krümel wieder in seinem Käfig, und Herr Yilmaz hatte einen neuen, festen Riegel an die Tür geschraubt. Ben ging zu Jonas hinüber und kratzte sich verlegen am Kopf. „Tut mir leid“, murmelte er. „Ich hab echt gedacht, du warst es.“ Jonas zuckte mit den Schultern, aber man sah, dass er sich freute. Frau Lehmann sagte etwas zur Klasse, das Ella sich merkte: „Ein Verdacht ist noch kein Beweis.“",
      "Für die Schülerzeitung schrieb Ella einen Artikel mit der Überschrift: „Der Hamster, der ein Rätsel war“. Und Lupo? Der bekam von Herrn Yilmaz eine selbst gebastelte Urkunde für die beste Spürnase der ganzen Schule."
    ],
    erzaehl: "Fast die ganze Klasse war sicher, dass Jonas schuld war, und alle lagen falsch. Erzähl Papa oder Mama, wie Ella Krümel gefunden hat. Und sprecht darüber: Habt ihr schon einmal erlebt, dass jemand vorschnell verdächtigt wurde? Wie fühlt sich das für den anderen an?"
  }
}
];
