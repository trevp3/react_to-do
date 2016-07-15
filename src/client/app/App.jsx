'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Foot             from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'
// import TaskItems        from './TaskItems.jsx'

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
    addTask( newTask ){
        console.log( newTask )
    }

    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
    render(){
        return(
            <container>
                <Nav />
                <header>
                </header>
                <div className="container">
                    <TaskForm addTask={this.addTask.bind(this)}/>
                    <div className="row">
                    {/*everything goes in here*/}
                    </div>
                </div>
                <Foot />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
