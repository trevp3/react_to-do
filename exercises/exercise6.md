#6. Exercise 6 

##All-in: React.js

### Step 1 
Let's start creating our first React components. We'll need the proper folder layout that our compiler is expecting:

```
/src
└── client
    ├── app
    │   ├── App.jsx
    │   └── main.jsx
    ├── css
    │   └── styles.css
    └── helpers
```

  1. `/src/client/app` is where your application will live. 
  2. Webpack will start looking at `/src/client/app/main.jsx` to begin the compilation. 
  2. `App.jsx` is the 'top' of your React application
  3. Copy `starter_resources/styles.css` into `/src/client/css`

### Step 2

In `main.jsx`, we need to make some declarations about which files/assets we'll need in our project. These should be pretty self-explanatory. _(note that the `import` syntax is part of es6's package management feature, while `require` is npm's)_

```
import App from './App.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css')
```

We'll need to create a wrapper for our _stateful_ core component that uses React. **We'll be using es6 _class_ syntax to build our components.** 

####Inside `App.jsx` 
```
'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'

// create a React Component called _App_
export default class App extends React.Component{

    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          tasks : {}
        }
    }
    // note that classes do **not** have commas between their methods

    // 90% of your components will render()
    // REMEMBER you can only return ONE root element from a render fn.
    render(){
        return(
            <container>
                <header>
                    <p>Hello world example</p>
                </header>
                <div className="container">
                    <div className="row">
                    {/*everything goes in here*/}
                    </div>
                </div>
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
```




