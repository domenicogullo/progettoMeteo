# README file per l'app meteo

## Introduzione al progetto 

Il progetto rappresenta un'applicazione che permette all'utente di ottenere informazioni sul meteo di una località a partire dal CAP inserito.

## Stack tecnologico utilizzato

1 - React, 
2 - Material-UI,
3 - Javascript,
4 - HTML / CSS,
5 - React Hooks,
6 - Node.js & npm (Node Package Manager),
7 - Axios,
8 - Weather API (Zippopotam & Openweathermap)

## Struttura del progetto

L'applicazione presenta una singola pagina principale nella quale è inserito una casella di testo che richiede all'utente di inserire il CAP della località sulla quale vuole ottenere le informazioni metereologiche. In seguito all'insrerimento di un CAP valido, la pagina visualizza svariate informazioni sul meteo della località (temperatura misurata, temperatura percepita, velocità del vento, umidità, orario di alba e tramonto e descrizione generale del meteo). 
Il progetto è composto principalmente da 2 componenti: FormMeteo.js relativo alla parte della pagina per l'inserimento del CAP, e ShowWeather.js che invece è il componente di visualizzazione dei dati meteo.
Le funzioni di chiamata delle API sono contenute in file esterni (Zippopotam.js & ServizioMeteo.js) entrambe esportate in seguito all'interno di FormMeteo.js

Il layout della pagina è gestito dalla libreria Material-UI (MUI) attraverso l'implementazione di un componente TextField per l'inserimento del CAP e di un componente Card per la visualizzare i dati sul meteo in formato "rialzato".

----------------------------------------------------------------------------------

## Prerequisiti
-Node.js 
-npm

## Procedimento di avvio
1 - Dopo aver clonato la repository da git attraverso il comando git clone url_repository, 
spostarsi nella directory del progetto appena clonata tramite il comando cd nome_directory

2 - Installare le varie dipendenze necessarie per il corretto avvio dell'applicazione attraverso il comando npm install che andrà ad installare tutte le librerie e pacchetti necessari 
(@mui/material, @emotion/react, @emotion/styled, Axios)

3 - Avviare l'applicazione attraverso il comando npm start che procederà all'apertura sul browser predefinito dal sistema in utilizzo. 
