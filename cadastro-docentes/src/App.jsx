import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Menu from './components/Menu';
import Welcome from './components/Welcome';
import DocenteForm from './components/DocenteForm';
import ListDocentes from './components/ListDocentes';

function App() {
  const [docentes, setDocentes] = useState([]);
  const [activeScreen, setActiveScreen] = useState('login');
  const [docenteToEdit, setDocenteToEdit] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
    setActiveScreen('welcome');
  }

  function handleLogout() {
    setLoggedIn(false);
    setActiveScreen('login');
    setDocenteToEdit(null);
  }

  function handleSubmit(docente) {
    if (docenteToEdit) {
      setDocentes(
        docentes.map((item) =>
          item.id === docente.id ? docente : item
        )
      );

      setDocenteToEdit(null);
      setActiveScreen('lista');
    } else {
      setDocentes([...docentes, docente]);
      setActiveScreen('lista');
    }
  }

  function handleDeleteDocente(id) {
    setDocentes(
      docentes.filter((docente) => docente.id !== id)
    );
  }

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Menu
        setActiveScreen={setActiveScreen}
        onLogout={handleLogout}
      />

      {activeScreen === 'welcome' && (
        <Welcome />
      )}

      {activeScreen === 'cadastro' && (
        <DocenteForm
          docenteToEdit={docenteToEdit}
          handleSubmit={handleSubmit}
          setActiveScreen={setActiveScreen}
        />
      )}

      {activeScreen === 'lista' && (
        <ListDocentes
          docentes={docentes}
          setDocenteToEdit={setDocenteToEdit}
          setActiveScreen={setActiveScreen}
          handleDeleteDocente={handleDeleteDocente}
        />
      )}
    </div>
  );
}

export default App;