import React from "react";
import { Container,Nav,Navbar} from "react-bootstrap";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Amer from "./Amer";
import Kumar from "./Kumar";
import Mani from "./Mani";

const NavBar=()=>{
return(
    <div className="container">
       <BrowserRouter>
       <Navbar bg="info" variant="violet">
<Container>
    <Nav>
        <Nav.Link href="/">Amer</Nav.Link>
        <Nav.Link href="/kumar">Kumar</Nav.Link>
        <Nav.Link href="/mani">Mani</Nav.Link>
    </Nav>
</Container>
</Navbar>
<Routes>
    <Route path="/" element={<Amer/>}></Route>
    <Route path="/kumar" element={<Kumar/>}></Route>
    <Route path="/mani" element={<Mani/>}></Route>
</Routes>
      
       </BrowserRouter>
    </div>
);
}
export default NavBar;