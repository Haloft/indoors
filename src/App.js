import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './App.css';
import './pages/Projects'
import DashBoard from "./components/DashBoard";
import Projects from "./pages/Projects";
import AddHours from "./pages/AddHours";
import Home from "./pages/Home";
import Login from './components/Login'
import { initProjects } from "./actions";
import { initTasks } from './actions'
import loginService from './services/login'
//import taskService from './services/tasks'


function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initProjects())
    dispatch(initTasks())
  }, [dispatch])


  const handleLogin = async event => {
    event.preventDefault()

   
      const user = await loginService.login({
        user: {
          email,
          password
        }
      })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      //taskService.setToken(user)
      setUser(user)    
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
    console.log('logout')
  }


  if (user === null) {
    return (
      <Login
        handleLogin={handleLogin}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    )
  }

  return (
    <>
      <div className="content">
        <Router>
          <DashBoard handleLogout={handleLogout} />
          <Switch>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/hours">
              <AddHours />
            </Route>
            <Route exact path="/">
              <Home className="home" />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
