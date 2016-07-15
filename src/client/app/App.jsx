'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Foot             from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'
import TaskList         from './TaskList.jsx'
import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
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

    //this is fired right after the component is mounted to the screen
    componentDidMount(){
        //go to the database and get the freshest tasks
        ajax.getTasks().then( data=>/*update state*/
            this.setState({tasks: data.indexByKey('task_id') })
                    //when the data comes back update the state

        )
    }
    // note that classes do **not** have commas between their methods
    addTask( newTask ){
        ajax.createTask(newTask)
            .then(data => {
                this.state.tasks[data.task_id] = data //create a new task at the id of newTask.task_id that is newTask
                this.setState({tasks: this.state.tasks})
        })
        //give the database our params

    }
    toggleTask( key ){
        let myTask = this.state.tasks[key];

        myTask.completed = !myTask.completed;
        //send out this new change to the DB (ajax)
        ajax.updateTask( myTask )
            .then( data=>{
                this.state.tasks[ data.task_id ] = data
                this.setState({tasks: this.state.tasks})
            })
        //bring in AJAX data here!
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
                    <section className="row">
                        {/*OPEN ITEMS*/}
                        <article className="col-md-6">
                            <h3> Open Items </h3>
                            <TaskList
                                list={this.state.tasks}
                                f={x=>!x}
                                action={this.toggleTask.bind(this)}/>
                        </article>
                        {/*Completed ITEMS*/}
                        <article className="col-md-6">
                            <h3> Completed Items </h3>
                            <TaskList
                                list={this.state.tasks}
                                f={x=>x}
                                action={this.toggleTask.bind(this)}/>
                        </article>
                    {/*everything goes in here*/}
                    </section>
                </div>
                <Foot />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
