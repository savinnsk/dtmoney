import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer , Model } from 'miragejs'; 

createServer({

  models: {
    transaction : Model,
  },

  seeds(server){
    server.db.loadData ({
      transactions : [
      
    ]
    })
  },

  routes(){

  this.namespace = 'api'; // configuring router of mirage

  this.get('/transactions' , () => { //routes
    return this.schema.all('transaction') ; // return all transactions inside
   })

   this.post('/transactions', (schema , request) => {  //get data from form
     const data = JSON.parse(request.requestBody) // data comes as text, so convert it.
     return schema.create('transaction' , data )  // schema is our database
   })

  }

})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


