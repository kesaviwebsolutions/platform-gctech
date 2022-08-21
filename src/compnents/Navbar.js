import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBCardImage,
} from "mdb-react-ui-kit";
import meta from "../images/meta.png";
import connect from "../images/connect.svg";

export default function App({Metamask,acount}) {
  const [showBasic, setShowBasic] = useState(false);
  const [active, setActive] = useState(1);

  const slicewallet = (add) =>{
    const first = add.slice(0,5);
    const second = add.slice(37)
    return first + "..." + second;
  }

  return (
    <MDBNavbar expand="lg" light bgColor="transparent">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-center">
            <MDBNavbarItem onClick={() => setActive(1)}>
              <MDBNavbarLink
                aria-current="page"
                href="#"
                className={active === 1 ? "active" : ""}
              >
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem onClick={() => setActive(2)}>
              <MDBNavbarLink href="#" className={active === 2 ? "active" : ""}>
                STAKING
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem
              onClick={() => {
                setActive(3);
              }}
            >
              <MDBNavbarLink href="#" className={active === 3 ? "active" : ""}>
                ADMIN
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <button
            type="button"
            className="connectButton"
            onClick={()=>Metamask()}
          >
            {acount ? slicewallet(acount)  : "Connect Wallet"}
          </button>

          {/* <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              xaddd..tr
            </button>
            <ul
              className="dropdown-menu disconnect"
              aria-labelledby="dropdownMenuButton"
            >
              <li>Disconnect</li>
            </ul>
          </div> */}
        </MDBCollapse>
      </MDBContainer>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title ms-auto fw-bold"
                id="exampleModalLabel"
              >
                Please Connect Your Wallet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-evenly align-items-center">
              <MDBCardImage
                src={meta}
                position="top"
                alt="..."
                style={{ width: "100px", cursor: "pointer" }}
              />
              <MDBCardImage
                src={connect}
                position="top"
                alt="..."
                style={{ width: "70px", cursor: "pointer" }}
              />
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </MDBNavbar>
  );
}
