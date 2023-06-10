# KWU-Kampus-Front

This repository is for main page of *Kwang-Woon University: Campus Tour* project.   

## Notice   

This project is internally defined list in `main.js` as default. 

or

You can use external server to get lists of models information, but your local address (i.g. 127.0.0.1/5000, localhost:3000 ...) will occur CORS violation (Access-Control-Allow-Origin).    
You need to ignore the CORS via Chrome extension or other ways possible, to load models successfully.    
<details>
   <summary> To Use Server </summary>
   from <code>main.js:345</code>:
   
   ```js
   // activate this fetch
   // fetch( "http://13.124.194.184:8080/buildings/info", {
   //   method: 'GET',
   // } )
   // .then( res => res.json() )
   // .then ( res => {
   //
   //   receivedData = res;
   //   receivedData.forEach( ( data ) => {
   //     createModel( gltfLoader, data );
   //   } );
   //
   // } );
   
   // deactivate this forEach()
   datas.forEach( ( data ) => {
     createModel( gltfLoader, data );
   } );
   ```
   
</details>

## How to Run

Follow steps bellow to run this project on your browser in local.

### Common

1. Clone this repository

2. Open this repository in your terminal and run below:
   ```bash
   npm install
   ```
   will install packages in need

[Run through Terminal](#run-through-terminal--npx-vite)

[Run through VSCode Extension](#run-through-vscode-extension)

### Run through Terminal

3. Then, run:
   ```bash
   npx vite
   ```
   or
   ```bash
   npx serve
   ```
   will give you local / network address

4. You can run this project from the given address

### Run through VSCode Extension

3. Open this repository in VSCode.

4. Install VSCode Extension with id `ritwickdey.LiveServer`

5. Open `index.html` in Live Server
