// Here are the imports for the necessary styles and components which I implemented into my app.
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//// Here I Imported React Router for routing

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/read';
import Create from './components/create';
import Books from './components/books';

function App() {
  return (
  //// For this part I set up BrowserRouter for client-side routing

    <BrowserRouter>
    <div className="App">

    
// Here I have a navbar so users can decide which page they would like to view.
// The pages are Home, Read and Create.     
      
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
  // Here I defined route handling using React Router     
  <Routes>
  <Route path='/' element={<Content></Content>}></Route>
  <Route path='/read' element={<Read></Read>}></Route>
  <Route path='/create' element={<Create></Create>}></Route>
</Routes>      
      
      
    


     
    </div>
    </BrowserRouter>
  );
}

// Here is the export for the app
export default App;
