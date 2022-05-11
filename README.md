# Country-picker
Webbasert komponent hvor du kan velge kontinent og/eller land.
Du kan registrere det valgte kontinentet alene eller med tilhørende land til en resultatsliste.
Kontinentene/landene på listen kan markeres og fjernes individuelt eller sammen ved å klikke på boksen - en varsel vil gi beskjed om hva som er blitt fjernet.

Prosjektet ble gjort med HTML og javascript, og noe bruk av CSS:
1. Lagde en Dropliste med kontinenter i HTML. Siden det bare er 7 kontinent syns jeg dette var enklest.
2. Droplisten for land er hentet fra javascript ved at jeg lagde et array til hvert kontinent. Her valgte jeg å kopi paste landene fra wikipedia.
3. lagede en funksjon for å fylle listene med land i riktig array matchet til riktig kontinent.
4. En funksjon for å registrere valgt kontinent/land og samtidig registrere dem med en klikkbar checkboks. 
5. En funksjon for å fjerne registrerte kontinent/land. Det som er blitt markert i checkboksen er det eneste som skal fjernes. En beskjed vil gis med informasjon om hva som er fjernet.
