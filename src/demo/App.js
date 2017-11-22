import React from 'react';

import {
  Button
} from '../lib'

const App = () => (
  <div>
    <Button onClick={ () => alert('123') }>Click Me</Button>
    <Button onClick={ () => alert('456') }><span>Click Me</span></Button>
  </div>
);

export default App;
