import logo from './logo.svg';
import './App.css';
import InputItem from "./components/InputItem/InputItem"
import TodoItem from "./components/TodoItem/TodoItem"
import TodoList from "./components/TodoList/TodoList"

import React, { Component } from 'react'

export default class App extends Component {

  state={
    taches:[
           {id:1,tache:"voir les notification"},
           {id:2,tache:"faire du sport"},
           {id:3,tache:"lire livre"}

    ],
    item:"",
    editItem:false
  }

  ChangementInput=(event)=>{
    this.setState({
      item:event.target.value
    });
  }
soumissionFormulaire=(event)=>{
  event.preventDefault();

 let nouvellesTaches=[]
   if(this.state.taches.length ==0){
    const newTache={
      tache:this.state.item,
      id:1,
    }  

    nouvellesTaches=[...this.state.taches,newTache];
   }
   else{
    const lastIndex=this.state.taches.length -1;
    const dernierElement=this.state.taches[lastIndex];
    const newTache={
      tache:this.state.item,
      id:dernierElement.id +1,
    }
    nouvellesTaches=[...this.state.taches,newTache];

   }


  this.setState({
    taches:nouvellesTaches
  })
}
supression=(id) =>{
console.log(id);
const tacheFiltrees=this.state.taches.filter(function(item){
  return item.id != id;
})
this.setState({taches:tacheFiltrees
})
}
 modification=(id) =>{
  const tacheFiltrees=this.state.taches.filter(function(item){
    return item.id != id;
  })

  const tacheModifie=this.state.taches.filter(function(item){
    return item.id == id;
  })
  this.setState({
    taches:tacheFiltrees,
    item:tacheModifie[0].tache,
    editItem:true


  })
  
 } 
clearList=()=>{
  this.setState({
  taches:[]
  })
}


  render() {
    console.log(this.state.item)
    
    return (
      <div className="container">
        <InputItem 
        editItem={this.state.editItem}
        ChangementInput2={this.ChangementInput}
        soumissionFormulaire2={this.soumissionFormulaire} 
        item={this.state.item}
        />
        <TodoList
        clearlist={this.clearList}
        taches={this.state.taches}
        supression2={this.supression}
        modification2={this.modification}/>
      </div>
    )
  }
}
