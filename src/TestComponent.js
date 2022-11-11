import * as React from "react";
import { useState } from "react";

const Comp = ({ children }) => children(true);

export class TestComponent extends React.Component {
  state = { foo: 2 };

  testfunc = (bool) => {
    if (bool) {
      useState(0);
      return this.state.foo;
    } else {
      return "234";
    }
  }

  render() {
    return (//This one below will literally give no error
      <Comp> 
        {(bool) => {
          if (bool) {
            useState(0);
            return this.state.foo;
          } else {
            return "234";
          }
        }}
      </Comp>
      //<div>{useState(0)}</div> //This will give an error on the screen
      //<Comp>{this.testfunc(true)}</Comp> //this will give an error on the console but not the screen,
    );
  }
}
