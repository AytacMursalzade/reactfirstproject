import React, { Component } from 'react';
import Cardapp from './components/CardApp/Cardapp';




class App extends Component {
  render() {
    return (
      <>
       <Cardapp  
        name = "Doe Jone"
        salary = "5000$"
        department = "Anka"
       />

       <Cardapp
        name = "Alex"
        salary = "3000$"
        department = "Anka"
         
       />

        <Cardapp
          name = "Dilver"
        
          department = "Anka"
        
        />
      </>
    );
  }
}

export default App;
