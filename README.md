# DT208G - Moment 3 - Angular

Projektet initierades med installation av Angular CLI globalt genom 'npm install -g @angular/cli' och därefter skapades ett angular-projekt/mapp med 'ng new mom3-angular'. Detta satte upp strukturen för användadet av angular i projektet.

'ng serve' kördes vilket drar igång utvecklingsservern. Därefter skapades komponenter för webbsidans struktur och för de funktioner som krävdes med 'ng generate component komponentnamn'. De komponenter som skapades blev slutligen navbar, footer, about, converter, home och not-found.

Därefter routades komponenterna i app.routes.ts genom att använda Angulars modul RouterModule med korrekt sökväg, samt för not-found för sidor som inte hittas eller är definierade. Navbar och footer är statiska komponenter som integrerares direkt i applikationens grundlayout i app.component.html med exmepelvis <app-navbar></app-navbar>. Övriga komponenter som är mer dynamiska vyer hanteras av Angulars routing-system och definierades i app.routes.ts.

För konverteringsfunktionen implementerades templates och data binding, vilket möjliggjorde interaktiv datahantering. Användarens inmatningar i formularfält reflekterades direkt och konverterades dynamiskt med hjälp av Angulars tvåvägsbindning ([(ngModel)]). För att detta skulle vara möjligt behövdes moduler importeras, i detta fall FormsModule och CommonModule.
I klassen ConverterComponent sattes egenskaper och metoder upp för sjävla konverteringen och kunde sedan anropas i HTML-koden.

Infogat bild med picture-element med definierade sökvägar i klassen för komponenten. Använde [srcset] och [src] så att applikationen dynamiskt kan ladda det mest effektiva formatet (.webp / .jpg) baserat på användarnes webbläsare.

Övergripande scss-styling gjordes i styles.css och sedan stylades respektive komponent utifrån dess ändamål.

Slutligen deployades sidan genom att göra ett färdigt publiceringspaket med ng build och publicerades sedan på netlify. Projektet versionshanterades med Git med globalt repo på Github.
