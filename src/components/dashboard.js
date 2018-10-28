import React, { Component } from 'react';
import Style from '../Compartido/Estilo';
import Tareas from './Tareas';
import AddTareas from './AddTareas';
import store from '../Compartido/store';
import { logoutSatate, loginState} from '../Compartido/acciones';
import { fAuth, fProvider} from '../Dbase/firebase-config'



class Dashboard extends Component {
  constructor(){
    super ();
    this.state={
      user: null,
      tasks:[],
    };
    this.bindingState();
    
  }
  
  componentWillMount() {
    fAuth.onAuthStateChanged(user =>{
      store.dispatch(loginState(user));
    });
  }
  bindingState() {
    store.subscribe(()=> {
      this.setState({
        user: store.getState().user,
        tasks: store.getState().tasks,
      });
    });
  }

  login() {
    fAuth.signInWithPopup(fProvider).then().catch();
  };
  logout() {
    fAuth.signOut().then(
      response => store.dispatch(logoutSatate())
    ).catch();
 }
  render() {
    return(
      
      <div> 
        <nav style={Style.nav}>
         <div style={Object.assign({},Style.navHeader, Style.navStart)}>
            <span style={Style.navSpan} ><img src="/src/image/Proax1.png" className="img"/></span>
             <span className="titulo">Tareas :)</span>
          </div> 
          <div style={Object.assign({}, Style.navHeader, Style.navEnd)}>
            <span style={Style.navSpan}>
            {this.state.user?
               <div className="aab-flex"> 
                <img style={Style.avatar}  src={this.state.user.photoURL}/>
                <span> {this.state.user.displayName}</span>
                <button onClick={() => this.logout()} style={Style.button2}>Salir</button>
               </div>:
               <button onClick={()=> this.login()} className="aab-flex" style={Style.button2}>Empezar</button>
            }   
            </span>
          </div>
        </nav>
       
        { this.state.user?
        <div style={Style.card}>
             <AddTareas/>
             <Tareas/>  
                     
        </div>
        :<div className="wellcome">
          <div>
            <span>  <i></i> Administrador de Tareas!</span>
              <br></br>
              <br></br>
            <span> <i ></i>  Para iniciar con tus tareas; puedes hacerlo con tu cuenta de google.</span>
            
          </div>
        </div>
        }
      </div>
     
    );
  }
} export default Dashboard;