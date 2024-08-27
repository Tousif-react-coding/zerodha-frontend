import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
function Navbar() {

  const [open, setOpen] = useState(false);

  const openDialogue = () => {
    setOpen(true);
  };

  const closeDialogue = () => {
    setOpen(false);
  };
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
            
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
           
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/price">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/openaccount">
                  Open Account
                </Link>
              </li>
              <div>
      <li className="nav-item">
        <Link className="nav-link active" to='dashboard' >
      Dashboard
      <img src="logo.png" alt="logo" className="logo mx-2" />
        </Link>
      </li>

      {/* <Dialog open={open} onClose={closeDialogue}   className="custom-dialog" >
        <DialogTitle>
          <img src="logo.png" alt="logo" className="logo" />
          <h2>Kite</h2></DialogTitle>
        
        <DialogContent>
          {/* Add your dialog content here */}
          
          {/* <a href="http://localhost:5173/" className="mx-2">Explore the Trading Platform.</a>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialogue} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog> */} 
    </div>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;