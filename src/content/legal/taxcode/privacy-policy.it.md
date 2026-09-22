---
title: 'Tax Code by Tommaso Scalici - Informativa sulla Privacy'
description: 'Informativa sulla Privacy e conformità alla Google API Services User Data Policy per Tax Code by Tommaso Scalici.'
---

<p class="text-sm text-muted">Ultimo aggiornamento: 22 Settembre 2026</p>

La presente Informativa sulla Privacy descrive le modalità di gestione dei dati personali e dei dati utente da parte dell'applicazione **Tax Code by Tommaso Scalici** (di seguito denominata "l'App", "noi" o "nostro"), sviluppata da **Tommaso Scalici** ("Titolare del Trattamento").

La tutela della privacy e la sicurezza delle informazioni costituiscono un principio fondamentale dell'App. L'applicazione è strutturata secondo il paradigma **offline-first e privacy-by-design**: le funzionalità primarie operano integralmente in locale sul dispositivo senza richiedere alcuna registrazione, mentre la sincronizzazione cloud è una scelta opzionale dell'utente.

<hr class="my-8 border-white/10" />

## 1. Dati del Titolare del Trattamento

- **Sviluppatore / Titolare:** Tommaso Scalici
- **Sito Web:** <a href="https://tommasoscalici.dev/it/" target="_blank" rel="noopener noreferrer">https://tommasoscalici.dev/it/</a>
- **E-mail di Contatto:** <a href="mailto:contact@tommasoscalici.dev">contact@tommasoscalici.dev</a>

<hr class="my-8 border-white/10" />

## 2. Google OAuth 2.0 e Conformità alla User Data Policy

L'App integra l'accesso con **Google Sign-In** come funzionalità opzionale al solo scopo di permettere agli utenti di sincronizzare le tessere del Codice Fiscale salvate sui propri dispositivi personali (ad esempio tra smartphone Android e smartwatch Wear OS).

### Ambiti Google (Scopes) e Dati Ricevuti

Quando l'utente sceglie esplicitamente di accedere con il proprio account Google, l'App richiede l'accesso agli ambiti standard di autenticazione (`openid`, `profile`, `email`) gestiti tramite Firebase Authentication. Raccogliamo:

- L'ID univoco utente Google (UID)
- L'indirizzo e-mail associato
- Il nome visualizzato e l'URL dell'immagine di profilo (utilizzati unicamente per mostrare il profilo attivo nell'intestazione/impostazioni dell'app)

### Finalità del Trattamento dei Dati Google

- **Autenticazione e Autorizzazione:** Per verificare l'identità dell'utente e autorizzare l'accesso al proprio database sincronizzato.
- **Sincronizzazione Cloud Multi-dispositivo:** Per archiviare e sincronizzare in modo sicuro le tessere del Codice Fiscale su Google Cloud Firestore all'interno di un percorso riservato e accessibile unicamente all'utente autenticato.

### Misure di Protezione e Sicurezza dei Dati Google

- **Crittografia in Transito:** Tutte le comunicazioni con i servizi Google Cloud avvengono tramite protocolli di trasporto protetti (HTTPS con TLS 1.3).
- **Crittografia a Riposo:** I dati memorizzati su Google Cloud Firestore sono cifrati a riposo tramite le chiavi gestite dall'infrastruttura Google Cloud.
- **Controllo degli Accessi Rigido:** Le regole di sicurezza del database assicurano che soltanto l'account autenticato proprietario (`request.auth.uid == userId`) possa leggere, scrivere o eliminare le proprie tessere.

### Dichiarazione di Conformità alla Google API Services User Data Policy

> **L'utilizzo e il trasferimento da parte di Tax Code by Tommaso Scalici a qualsiasi altra app delle informazioni ricevute dalle API di Google sono conformi alla <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, inclusi i requisiti di Utilizzo Limitato (_Limited Use_).**

### Divieto di Vendita, Profilazione e Pubblicità

- **Non vendiamo**, cediamo, concediamo in licenza né scambiamo dati utente Google o dati personali a broker di dati, inserzionisti o terze parti.
- **Non utilizziamo** i dati utente Google per visualizzare annunci pubblicitari mirati o creare profili commerciali.
- **Non utilizziamo** i dati utente Google o i record dei codici fiscali per addestrare modelli di intelligenza artificiale o machine learning generalisti.

<hr class="my-8 border-white/10" />

## 3. Altri Dati Trattati dall'Applicazione

### A. Calcolo del Codice Fiscale (Motore Offline Integrato)

Il calcolo del Codice Fiscale a partire dai dati anagrafici (nome, cognome, data di nascita, comune/stato estero di nascita, sesso) avviene **esclusivamente in locale sul dispositivo dell'utente** attraverso l'algoritmo ministeriale ufficiale (D.M. 23/12/1976) e un database locale integrato dei comuni italiani e codici Belfiore esteri.

- I dati immessi per il calcolo rimangono nella memoria volatile del dispositivo.
- Nessun dato personale inserito per il calcolo viene inviato a server esterni.

### B. Scansione Documenti Intelligente (Gemini Enterprise Agent Platform)

L'App include una funzionalità di scansione ottica con fotocamera per agevolare l'acquisizione di Tessera Sanitaria e Carta d'Identità.

- Quando si utilizza lo scanner, l'immagine acquisita viene trasmessa tramite connessione cifrata TLS direttamente a Google Cloud Functions basate su **Gemini Enterprise Agent Platform (GEAP)** al solo scopo di eseguire il riconoscimento ottico dei caratteri (OCR) ed estrarre i campi del form.
- Le immagini vengono elaborate in modo effimero nella memoria di calcolo e **distrutte immediatamente al termine dell'estrazione**. Le immagini **non vengono mai salvate su disco** e **non vengono utilizzate per addestrare modelli IA**.

### C. Archiviazione Locale (Hive CE)

Se si utilizza l'App in Modalità Ospite (senza accesso con account Google), i codici fiscali salvati e le impostazioni restano memorizzati esclusivamente nella memoria locale del dispositivo tramite Hive CE, sotto il diretto controllo fisico dell'utente.

<hr class="my-8 border-white/10" />

## 4. Base Giuridica del Trattamento (GDPR)

Il trattamento dei dati personali avviene in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679):

- **Esecuzione del Servizio / Consenso:** Per erogare le funzionalità richieste (calcolo offline, sincronizzazione cloud opzionale attivata dall'utente).
- **Legittimo Interesse:** Per garantire l'integrità, la prevenzione di errori e la sicurezza tecnica dell'infrastruttura.

<hr class="my-8 border-white/10" />

## 5. Conservazione ed Eliminazione dei Dati

Garantiamo all'utente il pieno controllo sui propri dati:

- **Periodo di Conservazione:** I dati sincronizzati rimangono su Cloud Firestore solo per la durata di attività dell'account.
- **Eliminazione Account In-App (Self-Service):** L'utente può eliminare definitivamente il proprio account e tutti i dati cloud associati in qualsiasi momento direttamente dall'App tramite il percorso **Impostazioni → Elimina Account**. Questa operazione elimina istantaneamente e in modo irreversibile il profilo e tutte le tessere salvate su Google Cloud Firestore.
- **Guida Web alla Cancellazione Dati:** Per maggiori dettagli o richieste di assistenza, è possibile consultare la pagina dedicata <a href="/it/apps/taxcode/data-deletion/">Istruzioni per la Cancellazione dei Dati</a>.
- **Revoca delle Autorizzazioni Google:** È possibile revocare l'accesso dell'App al proprio account Google in qualunque momento tramite la pagina <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Autorizzazioni Account Google</a>.

<hr class="my-8 border-white/10" />

## 6. Diritti dell'Interessato (GDPR)

In conformità alla normativa applicabile sulla protezione dei dati, l'utente ha diritto di:

- Richiedere l'accesso, la rettifica o la cancellazione dei propri dati personali.
- Richiedere la limitazione del trattamento o opporsi al trattamento.
- Richiedere la portabilità dei dati.
- Proporre reclamo all'autorità di controllo competente (Garante per la protezione dei dati personali).

Per esercitare i propri diritti, è possibile contattare il Titolare all'indirizzo e-mail: <a href="mailto:contact@tommasoscalici.dev">contact@tommasoscalici.dev</a>.

<hr class="my-8 border-white/10" />

## 7. Modifiche alla presente Informativa

La presente Informativa sulla Privacy può essere aggiornata periodicamente per rispecchiare modifiche nei servizi o adeguamenti normativi. Eventuali variazioni saranno pubblicate su questa pagina con indicazione della data di revisione.

<hr class="my-8 border-white/10" />

## 8. Disclaimer e Assenza di Affiliazione Governativa

**Tax Code by Tommaso Scalici è uno strumento indipendente di terze parti e non è affiliato, sponsorizzato, approvato o rappresentativo dell'Agenzia delle Entrate, del Ministero dell'Economia e delle Finanze o di alcuna istituzione governativa.** Per i termini d'uso completi, consulta i nostri <a href="/it/apps/taxcode/terms-of-service/">Termini di Servizio</a>.
