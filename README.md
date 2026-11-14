# Restart Casa

Web app gratuita e statica per allenarsi a casa: 4 giorni di esercizi a corpo libero, spunte per esercizio/giro, timer recuperi e cronometro della sessione.

## Pubblicare su GitHub Pages (piano Free)

1. Creare una **repository pubblica** chiamata `restart-casa`.
2. Caricare **il contenuto di questa cartella**, non il file ZIP, direttamente nella root del branch `main`.
3. Aprire **Settings → Pages → Build and deployment**, scegliere **Deploy from a branch**, branch **main**, cartella **/(root)** e salvare.
4. Dopo l'attivazione, aprire il link indicato da GitHub nella sezione Pages. Su smartphone usare **Aggiungi alla schermata Home** / **Installa app**.

## Privacy e funzionamento

- Nessun account e nessuna dipendenza esterna.
- Le spunte, la settimana e i cronometri vengono salvati con `localStorage` sul dispositivo, non su GitHub.
- I dati non si sincronizzano tra dispositivi e si perdono eliminando i dati del sito.
- L'app può essere usata offline **dopo una prima visita online** e l'installazione del service worker.
- I file della repository e il sito saranno **pubblicamente visibili**. Non aggiungere file personali, foto o credenziali.

## Avvertenza

È una scheda di movimento generale, non un consulto medico. Interrompere se si verificano sintomi anomali.

## Fotografie degli esercizi

Le sequenze dello squat, del ponte glutei e del dead bug provengono dal progetto [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), che presenta il proprio archivio fotografico come pubblico dominio. Le immagini sono state ridimensionate e convertite in WebP senza metadati. I file sono serviti da GitHub Pages e inclusi nella cache offline.
