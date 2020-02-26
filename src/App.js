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
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import MountLifeCycleA from './components/MountLifeCycleA';
import UpdateLifeCycleA from './components/UpdateLifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp></ParentComp>
      {/* <Table></Table> */}
      {/* <FragmentDemo></FragmentDemo> */}
    </div>
  );
}

export default App;

/* <UpdateLifeCycleA></UpdateLifeCycleA>       */
/* <MountLifeCycleA></MountLifeCycleA> */
/* <Form /> */
/* <h1 className='error'>Error</h1> */
/* <h1 className={ styles.success }>Success</h1> */
/*<Inline></Inline>*/
/* <StyleSheet primary={ true }></StyleSheet> */
/*<NameList></NameList>*/
/*<UserGreeting></UserGreeting>*/
/*<ParentComponent></ParentComponent>*/
/*<EventBind></EventBind>*/
/*<FunctionClick></FunctionClick>*/
/*<ClassClick></ClassClick>*/
/*<Counter></Counter>*/ 
/*<Message></Message>*/ 
/*<Greet name="Lincoln" heroName="He-Man">
  Testando Props do React!  
  </Greet>*/ 
/*<Greet  name="Vanessa" heroName="She-Ha">        
</Greet>*/
/*<Welcome name="Mariana" heroName="Ladybug"></Welcome>*/
/*<Hello></Hello>*/ 
