import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList></NameList>
      {/*<UserGreeting></UserGreeting>*/}
      {/*<ParentComponent></ParentComponent>*/}
      {/*<EventBind></EventBind>*/}
      {/*<FunctionClick></FunctionClick>*/}
      {/*<ClassClick></ClassClick>*/}
      { /*<Counter></Counter>*/ }
      { /*<Message></Message>*/ }
      { /*<Greet name="Lincoln" heroName="He-Man">
        Testando Props do React!  
        </Greet>*/ }      
      {/*<Greet  name="Vanessa" heroName="She-Ha">        
      </Greet>*/}             
      {/*<Welcome name="Mariana" heroName="Ladybug"></Welcome>*/}
      { /*<Hello></Hello>*/ }
    </div>
  );
}

export default App;
