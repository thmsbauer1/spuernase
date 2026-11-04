/* Inhalte für Spürnase.
   Jeder Fall hat Kapitel. Ein Kapitel = Absätze (Text) + Fragen.
   [[b1]] am Anfang eines Satzes markiert einen Beweis-Satz, auf den eine Frage vom Typ "beweis" zeigt.
   Fragetypen: fakt, wort, schluss, beweis, reihe (Reihenfolge).
   "spur" bei einer Frage = Spur, die nach richtiger Antwort in die Fall-Akte kommt. */

window.SPUREN = {
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
  stufe: 1,
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
    taeter: "marco",
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
];

/* Vorschau auf kommende Fälle (noch gesperrt) */
window.BALD = [
  { nr: 2, titel: "Das Rätsel vom leuchtenden Meer", art: "Wissens-Fall", text: "Warum leuchtet das Wasser nachts an manchen Stränden blau? Ein Fall mit echten Naturwissenschaften." }
];
