import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Context from './lib/context';
import Decider from './lib/decider';

export default function App() {
  const [authenticate, setAuthenticate] = useState({});

  return (
    <Context.Provider value={ [authenticate, setAuthenticate] }>
      <StatusBar style='auto'/>
      <Decider />
    </Context.Provider>

  );
}

