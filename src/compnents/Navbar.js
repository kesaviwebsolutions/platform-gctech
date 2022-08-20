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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const [active, setActive] = useState(1);

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
            <MDBNavbarItem onClick={()=>setActive(1)}>
              <MDBNavbarLink
                aria-current="page"
                href="#"
                className={active===1 ? 'active' : ""}
              >
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem onClick={()=>setActive(2)}>
              <MDBNavbarLink href="#" className={active===2 ? 'active' : ""}>STAKING</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem onClick={()=>{setActive(3);}}>
              <MDBNavbarLink href="#" className={active===3 ? 'active' : ""}>ADMIN</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          {/* <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              type="Search"
            />
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
