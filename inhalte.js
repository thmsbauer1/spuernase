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
},

/* ================= Fall 4: Wissens-Fall, Stufe 2 ================= */
{
  id: "steine",
  nr: 4,
  titel: "Die Steine, die von allein wandern",
  ort: "Death Valley, Kalifornien",
  art: "Wissens-Fall",
  stufe: 2,
  liste: "Mögliche Erklärungen",
  spuren: {
    fuss:     { kurz: "Keine Fußspuren",  lang: "Neben den Spuren der Steine gibt es keine Fußabdrücke und keine Reifenspuren." },
    parallel: { kurz: "Parallele Spuren", lang: "Zwei Spuren laufen lange nebeneinander her, mit genau den gleichen Kurven." },
    winter:   { kurz: "Nur im Winter",    lang: "Die Steine mit Sender haben sich nur im Winter bewegt, nie im Sommer." },
    see:      { kurz: "See und Frost",    lang: "Die Steine wandern nur, wenn nach Regen ein flacher See auf der Ebene steht und es nachts friert." },
    magnet:   { kurz: "Nicht magnetisch", lang: "Verschiedene Gesteine wandern gleich weit, und keines davon ist magnetisch." },
    wind:     { kurz: "Leichter Wind",    lang: "Wenn die Steine wandern, weht nur ein leichter Wind, kein Sturm." },
    eis:      { kurz: "Dünnes Eis",       lang: "Auf dem flachen See liegt Eis, kaum dicker als eine Fensterscheibe. Darunter ist der Boden weich." },
    platten:  { kurz: "Treibende Platten", lang: "Das Eis bricht in große Platten. Der Wind lässt sie treiben, und sie stoßen gegen die Steine." },
    sender:   { kurz: "Stein bewegt sich", lang: "Während das Eis treibt, meldet ein Stein mit Sender: Er bewegt sich, ein paar Meter pro Minute." }
  },
  verdaechtige: [
    { id: "scherz", name: "Ein Scherz von Menschen", zeichen: "M", rolle: "Papas Idee",          farbe: "#6a6f78", raus: "fuss",   grund: "Es gibt keine Fußspuren" },
    { id: "sturm",  name: "Heftige Stürme",          zeichen: "S", rolle: "Idee vieler Leute",   farbe: "#3b6fa8", raus: "wind",   grund: "Es wehte nur ein leichter Wind" },
    { id: "magnet", name: "Magnetkräfte",            zeichen: "K", rolle: "Idee des Touristen",  farbe: "#a8577a", raus: "magnet", grund: "Die Steine sind nicht magnetisch" },
    { id: "eis",    name: "Eis und Wind",            zeichen: "E", rolle: "Ellas Verdacht",      farbe: "#2f7f86" }
  ],
  kapitel: [
  {
    titel: "Die Rennbahn in der Wüste",
    absaetze: [
      "In den Weihnachtsferien flog Ella mit ihrem Papa nach Kalifornien. Lupo durfte nicht mit, er blieb so lange bei Tante Jule an der Nordsee. Ellas Onkel Jonte war Geologe, also ein Forscher, der Steine und Gesteine untersucht. Er arbeitete in einem Nationalpark mit einem unheimlichen Namen: Death Valley, das Tal des Todes. „Im Sommer wird es hier über 50 Grad heiß“, erzählte er, als er sie am Flughafen abholte. „Aber jetzt im Winter sind die Nächte oben in den Bergen eiskalt.“",
      "Am zweiten Tag fuhren sie mit einem Geländewagen stundenlang über eine holprige Schotterpiste. Dann lag plötzlich eine riesige, flache Ebene vor ihnen, umringt von dunklen Bergen. „Das ist die Racetrack Playa“, sagte Onkel Jonte. „Auf Deutsch heißt das ungefähr: die Rennbahn. Früher war hier ein See. Heute ist der Boden fast immer trocken.“ Ella stieg aus. Der Boden war hart und glatt und in lauter kleine Platten zersprungen, wie ein riesiges Puzzle aus getrocknetem Lehm.",
      "Dann sah Ella die Steine. Überall auf der Ebene lagen sie verstreut, manche so klein wie ein Fußball, andere so groß wie ein Koffer. Und hinter jedem Stein zog sich eine lange Rinne durch den Boden, als wäre der Stein darübergerutscht. Manche Spuren waren schnurgerade, andere machten Kurven oder Zickzack-Linien. Eine Spur war länger als ein Fußballfeld. „Die Steine wandern“, sagte Onkel Jonte. „Aber gesehen hat es fast noch nie jemand.“",
      "Ella ging neben einer Spur in die Hocke. [[b1]]Rechts und links neben der Rinne war der Boden ganz glatt, ohne einen einzigen Fußabdruck und ohne Reifenspur. Ein paar Meter weiter entdeckte sie etwas noch Seltsameres. [[b2]]Zwei Steine lagen nebeneinander, und ihre Spuren liefen über eine lange Strecke parallel, mit genau den gleichen Kurven, wie bei einem Paar beim Eiskunstlauf. Ella machte ein Foto und schrieb alles in ihr Notizbuch.",
      "Auf dem Parkplatz trafen sie einen Touristen mit Cowboyhut. „Das sind Magnetkräfte aus dem Erdinneren“, behauptete er. „Oder Außerirdische.“ Ellas Papa lachte. „Ich glaube eher, hier machen sich Leute einen Spaß und schieben die Steine nachts herum.“ Onkel Jonte schüttelte den Kopf. „Viele denken auch, es sind einfach heftige Stürme. Aber manche Steine wiegen so viel wie drei Erwachsene zusammen.“ Ella sah über die stille, leere Ebene. Wer oder was konnte so schwere Steine verschieben, ohne selbst eine Spur zu hinterlassen?"
    ],
    fragen: [
      { typ: "fakt", frage: "Wie sieht der Boden der Racetrack Playa aus?",
        optionen: ["Hart, glatt und in kleine Platten zersprungen", "Weich und voller Sand wie am Strand", "Mit Gras und Büschen bewachsen"], richtig: 0,
        tipp: "Lies das Ende von Absatz 2.",
        gut: "Genau. Ein Puzzle aus getrocknetem Lehm." },
      { typ: "wort", frage: "Onkel Jonte ist Geologe. Was macht ein Geologe?",
        optionen: ["Er erforscht Steine und Gesteine", "Er baut Häuser und Brücken", "Er pflegt die Tiere im Nationalpark"], richtig: 0,
        tipp: "Die Erklärung steht gleich hinter dem Wort, in Absatz 1.",
        gut: "Richtig. Für dieses Rätsel genau der richtige Onkel." },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Menschen haben die Steine wohl nicht geschoben.",
        beleg: "b1", tipp: "Ella schaut sich in Absatz 4 den Boden neben einer Spur ganz genau an.",
        gut: "Stark beobachtet! Wer einen schweren Stein schiebt, hinterlässt Fußspuren.", spur: "fuss" },
      { typ: "schluss", frage: "Zwei Spuren laufen parallel, mit genau den gleichen Kurven. Was verrät das?",
        optionen: ["Etwas hat beide Steine gleichzeitig in dieselbe Richtung bewegt", "Jemand hat die Spuren mit einem Lineal gezogen", "Die Steine sind zufällig gleich schwer"], richtig: 0,
        tipp: "Wenn zwei Dinge genau die gleichen Kurven machen, was ist dann mit beiden gleichzeitig passiert?",
        gut: "Gut kombiniert. Merk dir das, es wird noch wichtig.", spur: "parallel" }
    ],
    weiter: "Onkel Jonte will Ella zeigen, wie Forscher so ein Rätsel lösen. Weiter in Kapitel 2."
  },
  {
    titel: "Die Steine mit Sender",
    absaetze: [
      "Am Abend saßen sie in Onkel Jontes Hütte am Rand des Parks. Draußen war es schon bitterkalt. Onkel Jonte klappte seinen Laptop auf. „Ich zeige dir mal, wie man so ein Rätsel erforscht“, sagte er. „Raten bringt nichts. Man muss messen.“",
      "Er erzählte, dass sein Team vor zwei Jahren eigene Steine auf die Ebene gelegt hatte, mit Erlaubnis des Nationalparks. In jedem Stein steckte ein kleiner GPS-Sender, so ähnlich wie in einem Handy. Der Sender merkte sich genau, wann der Stein sich bewegte und wohin. Dazu standen am Rand der Ebene eine Wetterstation und mehrere Kameras, die alle paar Minuten ein Foto machten.",
      "„Und? Sind sie gewandert?“, fragte Ella aufgeregt. Onkel Jonte zeigte auf eine Tabelle. [[b3]]„Im Sommer hat sich kein einziger Stein bewegt, alle Bewegungen gab es im Winter.“ Er tippte auf eine andere Spalte. „Und noch etwas ist auffällig. Die Steine sind nur gewandert, wenn es vorher geregnet hatte. Dann bildet sich auf der Ebene ein ganz flacher See, nur ein paar Zentimeter tief. Und in den Nächten davor war es immer unter null Grad.“",
      "Ella dachte an den Touristen mit dem Cowboyhut. „Und die Magnetkräfte?“ Onkel Jonte grinste und holte zwei Steine aus einem Regal. „Der hier ist Dolomit, der andere ist ein ganz anderes Gestein. [[b4]]Beide Sorten wandern auf der Ebene gleich weit, und keine von ihnen ist magnetisch.“ Er hielt einen Kühlschrankmagneten an die Steine. Der Magnet fiel jedes Mal herunter.",
      "„Dann waren es eben die Stürme“, sagte Papa. Doch Onkel Jonte zeigte auf die Wetterdaten. [[b5]]„An den Tagen, an denen die Steine gewandert sind, wehte nur ein leichter Wind, so wie bei einem gemütlichen Spaziergang.“ Ella runzelte die Stirn. Ein flacher See. Frost in der Nacht. Ein leichter Wind. Wie passte das zusammen? Da piepte Onkel Jontes Handy. Die Wetterstation meldete: Seit gestern regnet es, heute Nacht gibt es Frost. Onkel Jonte sprang auf. „Morgen früh fahren wir raus. Ganz früh.“"
    ],
    fragen: [
      { typ: "wort", frage: "In jedem Stein steckt ein GPS-Sender. Was macht so ein Sender?",
        optionen: ["Er merkt sich genau, wann und wohin sich der Stein bewegt", "Er macht Fotos von der Ebene", "Er misst, wie kalt es ist"], richtig: 0,
        tipp: "Lies Absatz 2. Was merkt sich der Sender?",
        gut: "Genau. Fotos machen die Kameras, die Kälte misst die Wetterstation." },
      { typ: "fakt", frage: "Wann haben sich die Steine mit Sender bewegt?",
        optionen: ["Nur im Winter", "Nur im Sommer", "Das ganze Jahr über"], richtig: 0,
        tipp: "Onkel Jonte zeigt es in Absatz 3 in einer Tabelle.",
        gut: "Richtig. Im heißen Sommer passiert gar nichts.", spur: "winter" },
      { typ: "schluss", frage: "Was war jedes Mal passiert, bevor die Steine gewandert sind?",
        optionen: ["Es hatte geregnet, und nachts war Frost", "Es war ein besonders heißer Tag", "Es waren viele Touristen auf der Ebene"], richtig: 0,
        tipp: "Lies den Rest von Absatz 3, nach der Tabelle.",
        gut: "Genau. Regen, ein flacher See und Frost. Das ist eine wichtige Spur.", spur: "see" },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Magnetkräfte können es nicht sein.",
        beleg: "b4", tipp: "Onkel Jonte holt in Absatz 4 zwei Steine aus dem Regal.",
        gut: "Stark! Was nicht magnetisch ist, kann auch kein Magnet bewegen.", spur: "magnet" },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt: Es waren keine Stürme.",
        beleg: "b5", tipp: "Papa vermutet in Absatz 5 Stürme. Was zeigen die Wetterdaten?",
        gut: "Richtig. Ein leichter Wind, kein Sturm. Und trotzdem wandern die Steine.", spur: "wind" }
    ],
    weiter: "Regen, Frost und ein früher Wecker. Was sieht Ella am Morgen? Weiter in Kapitel 3."
  },
  {
    titel: "Der Morgen, an dem das Eis sang",
    absaetze: [
      "Um fünf Uhr morgens klingelte der Wecker. Draußen war es stockdunkel und so kalt, dass Ellas Atem kleine Wolken machte. Sie fuhren los, und als sie die Ebene erreichten, ging gerade die Sonne über den Bergen auf. Ella traute ihren Augen nicht. Wo vor zwei Tagen noch trockener Boden gewesen war, glänzte jetzt eine riesige, flache Wasserfläche.",
      "Ella ging vorsichtig bis ans Ufer. [[b6]]Das Wasser war mit einer dünnen Eisschicht bedeckt, kaum dicker als eine Fensterscheibe, und darunter war der Boden weich und matschig. Hier und da schauten die Steine aus dem Eis heraus. Onkel Jonte stellte seine Kamera auf. „Jetzt heißt es warten“, flüsterte er.",
      "Die Sonne stieg höher, und es wurde wärmer. Plötzlich hörte Ella ein Knacken, dann ein helles Klirren, als würden Gläser aneinanderstoßen. Das Eis brach in große, dünne Platten. Ein leichter Wind kam auf, kaum mehr als ein Hauch. [[b7]]Die Eisplatten fingen an, langsam über das Wasser zu treiben, und stießen dabei leise klirrend gegen die Steine. „Hörst du das?“, flüsterte Papa. „Das Eis singt.“",
      "Ella hielt den Atem an. Eine große Eisplatte trieb genau auf einen Stein zu, der fast so groß war wie ihr Rucksack. Sie drückte gegen ihn. Erst passierte nichts. Dann schien der Stein ein kleines Stück zu rutschen. Oder hatte sich Ella das nur eingebildet? Onkel Jonte starrte auf sein Handy, auf dem die Daten der Sender ankamen. Seine Hände zitterten ein bisschen.",
      "„Ella“, sagte er leise, „schau dir das an.“ Auf dem Bildschirm blinkte ein Punkt. Es war einer der Steine mit Sender, und er bewegte sich. Ein paar Meter pro Minute, ganz langsam, aber er bewegte sich. Ella sah zurück auf die Ebene, auf das treibende Eis und auf den Stein, der jetzt eine feine Rinne in den Matsch unter dem Wasser zog. Sie dachte an den Regen, an den Frost und an den leichten Wind. Jetzt wusste sie, warum die Steine wanderten. Weißt du es auch?"
    ],
    fragen: [
      { typ: "beweis", frage: "Tippe auf den Satz, der beschreibt, wie das Eis und der Boden darunter aussehen.",
        beleg: "b6", tipp: "Ella geht in Absatz 2 bis ans Ufer.",
        gut: "Genau. Dünnes Eis oben, weicher Matsch unten.", spur: "eis" },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt, dass der Wind das Eis bewegt.",
        beleg: "b7", tipp: "Lies Absatz 3. Was passiert, als der leichte Wind aufkommt?",
        gut: "Volltreffer! Der Wind schiebt die Eisplatten, und die stoßen gegen die Steine.", spur: "platten" },
      { typ: "wort", frage: "„Oder hatte sich Ella das nur eingebildet?“ Was bedeutet „sich etwas einbilden“ hier?",
        optionen: ["Glauben, etwas zu sehen, das vielleicht gar nicht passiert ist", "Sich ein Bild an die Wand hängen", "Sich etwas ganz genau merken"], richtig: 0,
        tipp: "Ella ist sich nicht sicher, ob der Stein wirklich gerutscht ist.",
        gut: "Richtig. Deshalb ist es gut, dass die Sender messen." },
      { typ: "fakt", frage: "Was zeigt Onkel Jontes Handy?",
        optionen: ["Ein Stein mit Sender bewegt sich, ein paar Meter pro Minute", "Ein Sturm zieht auf", "Alle Steine liegen still"], richtig: 0,
        tipp: "Lies Absatz 5.",
        gut: "Genau. Jetzt ist es nicht nur gesehen, sondern auch gemessen.", spur: "sender" },
      { typ: "reihe", frage: "Bring die Ereignisse am Morgen in die richtige Reihenfolge. Tippe sie nacheinander an.",
        schritte: ["Die Sonne geht über den Bergen auf.", "Das Eis bricht in große Platten.", "Eine Eisplatte drückt gegen einen Stein.", "Auf dem Bildschirm bewegt sich ein Punkt."],
        tipp: "Die Absätze 1, 3, 4 und 5 erzählen es der Reihe nach.",
        gut: "Perfekt. Erst Sonne, dann Eis, dann Wind und Stein." }
    ],
    weiter: "Du hast alle Spuren. Warum wandern die Steine?"
  }
  ],
  anklage: {
    titel: "Deine Erklärung",
    frage: "Warum wandern die Steine?",
    knopf: "Erklärung abgeben",
    kurz: "Eis + Wind",
    taeter: "eis",
    gefunden: "Das glaube ich auch! Und wie beweist du das?",
    falsch: {
      scherz: "Schau in deine Akte: Neben den Spuren gibt es keine Fußabdrücke und keine Reifenspuren.",
      sturm: "Die Wetterstation hat gemessen: Als die Steine wanderten, wehte nur ein leichter Wind.",
      magnet: "Onkel Jonte hat es mit dem Magneten gezeigt: Die Steine sind gar nicht magnetisch."
    },
    beweise: ["platten", "sender", "eis", "see", "winter", "parallel"],
    muss: ["platten", "sender", "eis"],
    hinweisFalsch: "Eine deiner Spuren zeigt nur, welche Erklärung nicht stimmt. Welche Spuren zeigen direkt auf die richtige?",
    hinweisSchwach: "Gut, aber noch nicht stark genug. Welche Spur zeigt, was an dem Morgen auf der Ebene wirklich passiert ist?"
  },
  aufloesung: {
    titel: "Die Auflösung",
    absaetze: [
      "„Es ist das Eis!“, rief Ella. „Der Wind schiebt die dünnen Eisplatten, und die Eisplatten schieben die Steine.“ Onkel Jonte nickte und grinste so breit, wie Ella ihn noch nie gesehen hatte. „Genau das zeigen unsere Daten. Und du hast es mit eigenen Augen gesehen.“",
      "Dann erklärte er alles noch einmal der Reihe nach. In diesem Teil der Wüste regnet es nur selten. Wenn doch, sammelt sich das Wasser auf der Ebene zu einem See, der nur wenige Zentimeter tief ist. In kalten Winternächten friert seine Oberfläche zu. Am Morgen scheint die Sonne, und das Eis zerbricht in große, dünne Platten. Schon ein leichter Wind reicht dann, um die Platten über das Wasser zu schieben. Und weil sie so groß sind, drücken sie mit viel Kraft gegen die Steine. Die Steine rutschen über den weichen, nassen Boden und ziehen ihre Spuren.",
      "„Und die parallelen Spuren?“, fragte Ella. „Wenn eine große Eisplatte zwei Steine gleichzeitig schiebt, laufen ihre Spuren nebeneinander her“, sagte Onkel Jonte. „Und wenn der Wind dreht, machen beide dieselbe Kurve.“ Papa kratzte sich am Kopf. „Und warum hat das so lange niemand gesehen?“ „Weil alles zusammenkommen muss“, sagte Onkel Jonte. „Regen, Frost, Sonne und Wind. Das passiert nicht jedes Jahr. Und nach ein paar Minuten ist alles wieder vorbei.“",
      "Als das Wasser einige Tage später verdunstet war, blieben die neuen Spuren im trockenen Boden zurück, fein wie mit einem Stift gezeichnet. Ella schickte Tante Jule ein Foto für Lupo. Darunter schrieb sie: Fall gelöst. Mit Geduld, Messgeräten und einem sehr frühen Wecker.",
      "Übrigens: Ella und Onkel Jonte sind ausgedacht, die wandernden Steine aber nicht. Es gibt sie wirklich. Im Dezember 2013 haben zwei Forscher auf der Racetrack Playa zum ersten Mal beobachtet und gemessen, wie Eis und Wind die Steine bewegen, mit Steinen voller GPS-Sender, genau wie in dieser Geschichte."
    ],
    erzaehl: "Die Forscher haben nicht geraten, sondern gemessen: mit Sendern, Kameras und einer Wetterstation. Erklär Papa oder Mama, warum die Steine wandern. Und überlegt zusammen, was ihr selbst messen könntet, statt nur zu raten. Zum Beispiel, wie lange ein Eiswürfel in der Sonne braucht und wie lange im Schatten."
  }
},

/* ================= Fall 5: Detektiv-Fall, Stufe 2 ================= */
{
  id: "botschaften",
  nr: 5,
  titel: "Die geheimen Botschaften",
  ort: "Ellas Klasse im Advent",
  art: "Detektiv-Fall",
  stufe: 2,
  spuren: {
    hamburg:  { kurz: "Ankerpapier",      lang: "Die Zettel stammen von einem Notizblock mit kleinem blauem Anker und der Aufschrift „Gruß aus Hamburg“." },
    bus:      { kurz: "Erster Bus",       lang: "Die Klasse ist ab 7:30 offen. Als Erste kommen die Kinder aus dem Bus um 7:35: Jonas und Mira." },
    fahrrad:  { kurz: "Ben kommt spät",   lang: "Ben kommt jeden Morgen erst kurz vor acht mit dem Fahrrad." },
    code:     { kurz: "Cäsar-Code",       lang: "Jeder Buchstabe ist um drei Stellen im Alphabet verschoben. Zum Lesen schiebt man ihn drei Stellen zurück." },
    neu:      { kurz: "ICH BIN NEU",      lang: "Die zweite Botschaft heißt entschlüsselt: ICH BIN NEU HIER." },
    aufsicht: { kurz: "Hofaufsicht",      lang: "Frau Lehmann hat morgens von 7:30 bis 7:50 Aufsicht auf dem Schulhof." },
    morgens:  { kurz: "Zettel am Morgen", lang: "Am Nachmittag war das Säckchen noch leer. Der Zettel kam erst morgens zwischen halb acht und 7:40 hinein." },
    frage:    { kurz: "Eine Frage",       lang: "Die dritte Botschaft heißt: WER SPIELT MIT MIR. Das ist kein Streich, sondern eine Frage." },
    jonas:    { kurz: "Jonas nicht neu",  lang: "Jonas ist schon seit der fünften Klasse in dieser Klasse." },
    mira:     { kurz: "Aus Hamburg",      lang: "Mira ist nach den Herbstferien mit ihrer Familie aus Hamburg hergezogen." }
  },
  verdaechtige: [
    { id: "ben",     name: "Ben",          zeichen: "B", rolle: "Klassenclown",            farbe: "#3b6fa8", raus: "fahrrad",  grund: "kommt erst kurz vor acht" },
    { id: "lehmann", name: "Frau Lehmann", zeichen: "L", rolle: "Klassenlehrerin",         farbe: "#a8577a", raus: "aufsicht", grund: "hatte Aufsicht auf dem Hof" },
    { id: "jonas",   name: "Jonas",        zeichen: "J", rolle: "fährt mit dem ersten Bus", farbe: "#c0702f", raus: "jonas",    grund: "ist nicht neu in der Klasse" },
    { id: "mira",    name: "Mira",         zeichen: "M", rolle: "neu in der Klasse",       farbe: "#2f7f86" }
  ],
  kapitel: [
  {
    titel: "Zettel im Adventskalender",
    absaetze: [
      "Am ersten Dezember hing in der Klasse 6a ein neuer Adventskalender. Frau Lehmann hatte ihn aus vierundzwanzig kleinen Stoffsäckchen gebastelt und an einer Schnur quer über die Tafel gespannt. In jedem Säckchen steckte eine Kleinigkeit, und jeden Morgen durfte ein anderes Kind eines öffnen. Heute war Lina dran. Sie griff in das Säckchen mit der Eins und zog ein Bonbon heraus. Und einen zusammengefalteten Zettel.",
      "„Da steht was drauf“, sagte Lina und faltete den Zettel auseinander. Die ganze Klasse drängte sich um sie. In grüner Glitzerschrift stand dort in großen Druckbuchstaben: KDOOR NODVVH. Sonst nichts. Keine Unterschrift, kein Name. „Was soll das heißen?“, fragte Jonas. „Das ist Klingonisch“, behauptete Ben und machte ein grimmiges Gesicht. Ein paar Kinder lachten. Nur Mira, die ganz hinten am Fenster saß, lachte nicht. Sie war erst seit vier Wochen in der Klasse und sagte fast nie etwas.",
      "Ella nahm den Zettel vorsichtig in die Hand. Das Papier war klein und quadratisch. [[b1]]In der unteren Ecke war ein winziger blauer Anker aufgedruckt, und daneben stand ganz klein: Gruß aus Hamburg. Ella drehte den Zettel um. Die Rückseite war leer. „Frau Lehmann, haben Sie das geschrieben?“, fragte sie. Frau Lehmann schüttelte lächelnd den Kopf. „Ich habe nur Bonbons in die Säckchen gesteckt. Ehrenwort.“",
      "In der Pause ging Ella zu Herrn Yilmaz. Der Hausmeister wusste immer, wer wann in die Schule kam. „Ich schließe die Klassenräume um halb acht auf“, sagte er. „Um fünf nach halb acht kommt der erste Bus aus dem Neubaugebiet, und die Kinder aus diesem Bus sind morgens immer die Ersten im Gebäude.“ Ella notierte: Klasse offen ab 7:30. Erster Bus um 7:35. Lina und sie selbst waren heute um 7:45 gekommen, und da hatte der Zettel schon im Säckchen gesteckt.",
      "„Wer aus unserer Klasse fährt mit dem ersten Bus?“, fragte Ella am Nachmittag. Lina überlegte. „Jonas, glaube ich. Und Mira, die Neue.“ Ella nickte langsam. „Und Ben?“ Lina lachte. „Ben? Der kommt jeden Morgen mit dem Fahrrad, und zwar immer auf den letzten Drücker. Er ist noch nie vor acht da gewesen.“ [[b2]]Ella schrieb auf: Ben kommt immer erst kurz vor acht mit dem Fahrrad.",
      "Am Abend lag Ella lange wach und dachte an die seltsamen Buchstaben. KDOOR NODVVH. Das sah aus wie zwei Wörter. Im ersten Wort stand zweimal hintereinander ein O, im zweiten zweimal ein V. Waren das vielleicht ganz normale Wörter, nur verkleidet? Ella holte ihr Notizbuch hervor und schrieb ganz oben auf eine neue Seite: Fall Nummer fünf. Die geheimen Botschaften."
    ],
    fragen: [
      { typ: "fakt", frage: "Womit ist die Botschaft geschrieben?",
        optionen: ["Mit grüner Glitzerschrift in Druckbuchstaben", "Mit Bleistift in Schreibschrift", "Mit roter Tinte"], richtig: 0,
        tipp: "Lies Absatz 2.",
        gut: "Genau. Grüne Glitzerschrift. Vielleicht ist das später noch wichtig." },
      { typ: "beweis", frage: "Tippe auf den Satz, der verrät, woher das Notizpapier stammt.",
        beleg: "b1", tipp: "Ella untersucht den Zettel in Absatz 3 ganz genau.",
        gut: "Stark! Ein Notizblock aus Hamburg.", spur: "hamburg" },
      { typ: "schluss", frage: "Wer kann den Zettel am Morgen ins Säckchen gesteckt haben?",
        optionen: ["Jemand, der vor 7:45 in der Klasse war, zum Beispiel ein Kind aus dem ersten Bus", "Nur Lina, weil sie das Säckchen geöffnet hat", "Niemand, der Zettel lag schon seit dem Sommer darin"], richtig: 0,
        tipp: "Denk an das, was Herr Yilmaz in Absatz 4 erzählt.",
        gut: "Gut kombiniert. Die Kinder aus dem ersten Bus sind morgens zuerst da.", spur: "bus" },
      { typ: "beweis", frage: "Tippe auf den Satz, der Ben entlastet.",
        beleg: "b2", tipp: "Lina erzählt in Absatz 5, wie Ben zur Schule kommt.",
        gut: "Richtig. Wer erst kurz vor acht kommt, kann den Zettel nicht vor 7:45 hineinstecken.", spur: "fahrrad" },
      { typ: "wort", frage: "Ben kommt immer „auf den letzten Drücker“. Was bedeutet das?",
        optionen: ["Ganz knapp, im letzten Moment", "Mit einem Türdrücker in der Hand", "Als Letzter aus dem Bus"], richtig: 0,
        tipp: "Lina sagt gleich danach, dass Ben noch nie vor acht da war.",
        gut: "Genau. Und Ben ist darin offenbar Meister." }
    ],
    weiter: "Sind die Buchstaben verkleidete Wörter? Ella sucht nach dem Schlüssel. Weiter in Kapitel 2."
  },
  {
    titel: "Der Code des Kaisers",
    absaetze: [
      "Am nächsten Morgen steckte wieder ein Zettel im Adventskalender, diesmal im Säckchen mit der Zwei. Derselbe kleine Ankerzettel, dieselbe grüne Glitzerschrift: LFK ELQ QHX KLHU. Die Klasse rätselte wieder, aber niemand kam weiter. Ben schlug vor, die Buchstaben rückwärts zu lesen. Das ergab auch keinen Sinn.",
      "In der Mittagspause ging Ella in die Schulbibliothek. Sie suchte so lange, bis sie ein Buch mit dem Titel „Geheimschriften“ fand. Darin las sie von einem berühmten Herrscher aus dem alten Rom, Julius Cäsar. [[b3]]Cäsar verschlüsselte seine Briefe, indem er jeden Buchstaben um drei Stellen im Alphabet weiterschob, aus A wurde D, aus B wurde E und aus C wurde F. Wer die Botschaft lesen wollte, musste jeden Buchstaben einfach wieder um drei Stellen zurückschieben.",
      "Ellas Herz klopfte. Sie schrieb das Alphabet in ihr Notizbuch und probierte es mit dem ersten Zettel aus. K, drei Stellen zurück: J, I, H. Aus K wurde also H. Aus D wurde A, aus O wurde L. Buchstabe für Buchstabe entstand ein Wort: HALLO. Und das zweite Wort hieß: KLASSE. „Hallo Klasse“, flüsterte Ella. Dann nahm sie sich den zweiten Zettel vor. Als sie fertig war, starrte sie lange auf das, was in ihrem Notizbuch stand.",
      "Am Nachmittag erzählte sie Lina alles. Lina war beeindruckt. „Dann muss es jemand sein, der Geheimschriften kennt“, sagte sie. „Frau Lehmann vielleicht? Die macht doch mit uns ständig Rätsel.“ Ella schüttelte den Kopf. [[b4]]„Frau Lehmann hat morgens von halb acht bis zehn vor acht Aufsicht auf dem Schulhof, da haben wir sie beide gesehen.“ Lina nickte. „Stimmt. Sie stand die ganze Zeit am Klettergerüst.“",
      "Dann zeigte Ella ihr die zweite Botschaft. Lina machte große Augen. „Dann ist die Sache doch klar!“ „Vielleicht“, sagte Ella. „Aber ein Detektiv braucht mehr als eine Vermutung.“ In der letzten Stunde hatten sie Kunst. Ella sah zu Jonas hinüber, der eine Weihnachtskarte bastelte. [[b5]]Jonas schrieb gerade mit einem grünen Glitzerstift, der genauso funkelte wie die Schrift auf den Zetteln. Lina stieß Ella mit dem Ellenbogen an. „Und Jonas fährt auch mit dem ersten Bus“, flüsterte sie.",
      "Bevor sie nach Hause gingen, schaute Ella heimlich in das Säckchen mit der Drei. Darin lag nur ein Bonbon. Kein Zettel. „Morgen früh“, flüsterte sie Lina zu, „wissen wir mehr.“"
    ],
    fragen: [
      { typ: "beweis", frage: "Tippe auf den Satz, der erklärt, wie Cäsars Geheimschrift funktioniert.",
        beleg: "b3", tipp: "Ella liest in Absatz 2 im Buch über Geheimschriften.",
        gut: "Genau! Drei Stellen weiter zum Verschlüsseln, drei zurück zum Lesen.", spur: "code" },
      { typ: "schluss", frage: "Jetzt bist du dran. Schiebe jeden Buchstaben drei Stellen zurück: Was heißt ELQ?",
        optionen: ["BIN", "DAS", "OMA"], richtig: 0,
        tipp: "E, drei zurück: D, C, B. Dann L: K, J, I. Und Q: P, O, N.",
        gut: "Richtig entschlüsselt! E wird B, L wird I, Q wird N." },
      { typ: "schluss", frage: "Was heißt die ganze zweite Botschaft LFK ELQ QHX KLHU?",
        optionen: ["ICH BIN NEU HIER", "ICH BIN ALT HIER", "ICH MAG DAS EIS"], richtig: 0,
        tipp: "Das zweite Wort kennst du schon. Probier das dritte: Q, H und X jeweils drei zurück.",
        gut: "Genau. ICH BIN NEU HIER. Jetzt wird es spannend.", spur: "neu" },
      { typ: "beweis", frage: "Tippe auf den Satz, der Frau Lehmann entlastet.",
        beleg: "b4", tipp: "Ella erklärt es Lina in Absatz 4.",
        gut: "Richtig. Wer auf dem Schulhof Aufsicht hat, kann nicht gleichzeitig im Klassenraum sein.", spur: "aufsicht" },
      { typ: "schluss", frage: "Warum wird Jonas jetzt verdächtig?",
        optionen: ["Er hat einen grünen Glitzerstift und fährt mit dem ersten Bus", "Er hat das Buch über Geheimschriften ausgeliehen", "Er sitzt neben Mira"], richtig: 0,
        tipp: "Lies das Ende von Absatz 5.",
        gut: "Genau. Zwei Spuren passen zu Jonas. Aber passen auch alle?" }
    ],
    weiter: "Kommt morgen früh ein dritter Zettel? Weiter in Kapitel 3."
  },
  {
    titel: "Die dritte Botschaft",
    absaetze: [
      "Am nächsten Morgen bat Ella ihren Papa, sie früher als sonst zur Schule zu fahren. Um 7:40 Uhr öffnete sie die Tür zur Klasse 6a. Es war noch still im Raum. Nur zwei Kinder saßen schon an ihren Plätzen: Jonas, der in ein Comicheft vertieft war, und Mira, die aus dem Fenster schaute. Beide waren mit dem ersten Bus gekommen. Ella ging zum Adventskalender und tastete vorsichtig in das Säckchen mit der Drei.",
      "Neben dem Bonbon knisterte Papier. [[b6]]Gestern Nachmittag war das Säckchen noch leer gewesen, also musste der Zettel heute Morgen hineingekommen sein, zwischen halb acht und jetzt. Ella faltete ihn auseinander. Wieder der kleine Anker, wieder die grüne Glitzerschrift: ZHU VSLHOW PLW PLU. Ella setzte sich auf ihren Platz und entschlüsselte die Botschaft Buchstabe für Buchstabe. Inzwischen ging das schon ziemlich schnell.",
      "Dann sah sie sich vorsichtig um. Jonas oder Mira? Jonas hatte einen grünen Glitzerstift, das hatte sie gestern selbst gesehen. Und er kam früh. Aber da war noch die zweite Botschaft, die mit dem Wort NEU. [[b7]]Jonas ging schon seit der fünften Klasse in diese Klasse, er hatte sogar letzten Monat Krümel gefüttert, neu war er also ganz bestimmt nicht. Dann erinnerte sich Ella, was Frau Lehmann nach den Herbstferien zur Klasse gesagt hatte, als Mira zum ersten Mal vorne stand: Mira war mit ihrer Familie aus Hamburg hergezogen.",
      "Ella spürte ein Kribbeln im Bauch. Alles passte zusammen. Aber sie dachte auch an Jonas und an den verschwundenen Hamster. Damals hatte die halbe Klasse Jonas beschuldigt, und alle hatten sich geirrt. Ella wollte niemanden vor der ganzen Klasse bloßstellen, schon gar nicht, ohne sich sicher zu sein. Und sie wollte auf keinen Fall, dass jemand ausgelacht wurde, nur weil er sich etwas getraut hatte.",
      "Sie las die dritte Botschaft noch einmal. Das war kein Streich, und es war auch keine Angeberei. Es war eine Frage. Jemand, der sich nicht traute, sie laut zu stellen, hatte sie in einer Geheimschrift versteckt und gehofft, dass jemand klug genug war, sie zu lösen. Ella sah zum Fenster hinüber. Jetzt wusste sie, wer die Botschaften schrieb. Und sie wusste auch, warum. Weißt du es auch?"
    ],
    fragen: [
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt, wann der dritte Zettel ins Säckchen kam.",
        beleg: "b6", tipp: "Ella findet den Zettel in Absatz 2. Was weiß sie noch von gestern Nachmittag?",
        gut: "Genau. Gestern leer, heute Morgen ein Zettel. Also kam er morgens hinein.", spur: "morgens" },
      { typ: "schluss", frage: "Entschlüssle die dritte Botschaft: ZHU VSLHOW PLW PLU.",
        optionen: ["WER SPIELT MIT MIR", "WIR SPIELEN MIT DIR", "WER HILFT MIR HEUTE"], richtig: 0,
        tipp: "Fang mit dem kurzen Wort an: P wird M, L wird I, U wird R.",
        gut: "Richtig entschlüsselt. Eine Frage, die jemand nicht laut stellen mag.", spur: "frage" },
      { typ: "beweis", frage: "Tippe auf den Satz, der zeigt, dass Jonas nicht neu ist.",
        beleg: "b7", tipp: "Ella denkt in Absatz 3 an den Hamster Krümel.",
        gut: "Stark! Jonas hat zwar den Stift, aber die Botschaft NEU passt nicht zu ihm.", spur: "jonas" },
      { typ: "fakt", frage: "Woher ist Mira hergezogen?",
        optionen: ["Aus Hamburg", "Aus München", "Aus Kalifornien"], richtig: 0,
        tipp: "Lies das Ende von Absatz 3.",
        gut: "Genau. Und woher stammt noch einmal das Notizpapier?", spur: "mira" },
      { typ: "wort", frage: "Ella will niemanden „bloßstellen“. Was bedeutet das?",
        optionen: ["Jemanden vor anderen peinlich vorführen", "Jemanden an die Tafel holen", "Jemandem einen Platz freihalten"], richtig: 0,
        tipp: "Lies den Satz danach: Ella will auch nicht, dass jemand ausgelacht wird.",
        gut: "Richtig. Ella ist eine gute Detektivin und auch eine gute Freundin." }
    ],
    weiter: "Du hast alle Spuren. Wer schreibt die geheimen Botschaften?"
  }
  ],
  anklage: {
    titel: "Deine Lösung",
    frage: "Wer schreibt die geheimen Botschaften?",
    knopf: "Lösung sagen",
    kurz: "Mira",
    taeter: "mira",
    gefunden: "Das glaube ich auch. Und wie beweist du das?",
    falsch: {
      ben: "Ben kommt jeden Morgen erst kurz vor acht. Da steckten die Zettel schon im Säckchen.",
      lehmann: "Frau Lehmann hatte morgens Aufsicht auf dem Schulhof. Ella und Lina haben sie dort gesehen.",
      jonas: "Jonas hat zwar einen grünen Glitzerstift und kommt früh. Aber er ist seit der fünften Klasse dabei, neu ist er nicht."
    },
    beweise: ["neu", "mira", "hamburg", "bus", "morgens", "frage"],
    muss: ["neu", "mira", "hamburg"],
    hinweisFalsch: "Eine deiner Spuren zeigt nur, wer es nicht war. Welche Spuren zeigen direkt auf die richtige Person?",
    hinweisSchwach: "Gut, aber noch nicht stark genug. Welche Spur passt nur zu einer einzigen Person?"
  },
  aufloesung: {
    titel: "Die Auflösung",
    absaetze: [
      "In der großen Pause wartete Ella, bis die anderen auf dem Schulhof waren. Dann riss sie eine Seite aus ihrem Notizbuch und schrieb mit ihrem schönsten Stift: NRPP CX XQV. Beim Z hatte sie kurz überlegen müssen. Nach dem Z fängt das Alphabet einfach wieder vorne an, also wird aus Z ein C. Sie faltete den Zettel und legte ihn auf Miras Platz.",
      "Nach der Pause sah Ella, wie Mira den Zettel auseinanderfaltete. Mira las ihn einmal, zweimal, dann ein drittes Mal. Ihre Ohren wurden rot. Dann drehte sie sich langsam um und sah Ella an. Und zum ersten Mal, seit sie in der Klasse war, lächelte sie richtig.",
      "Nach der Schule erzählte Mira alles. In Hamburg hatte sie mit ihrer besten Freundin immer in der Cäsar-Schrift geschrieben. Den Notizblock mit den Ankern hatte sie zum Abschied geschenkt bekommen. In der neuen Klasse hatte sie sich nicht getraut, einfach jemanden anzusprechen. „Ich dachte, wenn ich es verschlüsselt schreibe, ist es nicht so schlimm, falls keiner antwortet“, sagte sie leise. Den grünen Glitzerstift hatte sie sich übrigens am ersten Schultag von Jonas geliehen. Er hatte nämlich zwei davon.",
      "Von da an waren die Pausen anders. Ella, Lina und Mira gründeten einen Geheimschrift-Club, und bald wollten auch Jonas und sogar Ben mitmachen. Mira brachte allen noch zwei andere Geheimschriften bei. Und als die Klasse am letzten Schultag vor Weihnachten das Säckchen mit der Vierundzwanzig öffnete, lag darin ein Zettel, den die ganze 6a zusammen geschrieben hatte: ZLU VLQG IURK, GDVV GX GD ELVW. Mira brauchte keine zehn Sekunden, um ihn zu entschlüsseln."
    ],
    erzaehl: "Mira hat sich nicht getraut, einfach zu fragen, und Ella hat genau hingeschaut, ohne sie bloßzustellen. Sprecht beim Abendessen darüber: Wie fühlt es sich an, irgendwo neu zu sein? Und als Rätsel für Papa oder Mama: Was heißt NRPP CX XQV, und was stand auf dem letzten Zettel der Klasse? Vielleicht schreibt ihr euch danach selbst eine Botschaft in Cäsar-Schrift."
  }
}
];
