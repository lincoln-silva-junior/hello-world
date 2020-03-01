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
import { RefsDemo } from './components/RefsDemo';
import InputParent from './components/InputParent';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Lincoln">
        <ComponentC />
      </UserProvider>      
    </div>
  );
}

export default App;

/* <CounterTwo>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
    </CounterTwo>
    <CounterTwo>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
    </CounterTwo> */
/* <ClickCounterTwo />
<HoverCounterTwo /> */
/* <ClickCounter name="Lincoln"/>      
<HoverCounter /> */
/*<ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>*/
/* <PortalDemo></PortalDemo> */
/* <FRParentInput></FRParentInput> */
/* <InputParent></InputParent> */
/* <RefsDemo /> */
/* <ParentComp></ParentComp> */
/* <Table></Table> */
/* <FragmentDemo></FragmentDemo> */
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
