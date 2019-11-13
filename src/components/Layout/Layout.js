import React from 'react';
import Aux from '../../hoc/Aux';
import App from '../../App';
const layout = (props) => (
  //line below wil throw error because it is jsx element and cant return html. Soln is because we want json component lets go hoc: higher order component approx and create aux component
  <Aux>
  <div>TOOLBAR, SIDEDRAWER, BACKDROP</div>
  <main>
    {props.children}
  </main>
  </Aux>
);

export default App;