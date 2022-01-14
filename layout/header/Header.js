import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import logo from "../../assets/images/logos/green-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("isSticky") : setStickyClass("");
    }
  };
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-6"></div>
            <div className="col-12 col-md-6 col-sm-6">
              <div className="float-right">
                <Link href="/login">
                  <a href="#" className="">
                    <span className="mr-2  icon-twitter"></span>{" "}
                    <span className=" d-md-inline-block">Login</span>
                  </a>
                </Link>
                <span className="mx-md-2 d-inline-block">|</span>
                <Link href="/login">
                  <a href="#" className="">
                    <span className="icon-facebook"></span>{" "}
                    <span className=" d-md-inline-block">Register</span>
                  </a>
                </Link>
                <span className="mx-md-2 d-inline-block"></span>
                <Link href="/cart">
                  <i
                    className="fa fa-shopping-cart"
                    style={{
                      color: "#fff",
                      backgroundColor: "#838441",
                      padding: "6px",
                      borderRadius: "20px",
                      paddingRight: "inherit",
                      cursor:'pointer'
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#000",
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#fff",
                        padding: "6px",
                        borderRadius: "50%",
                        marginLeft: "5px",
                      }}
                    >
                      1
                    </span>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`topbar ${stickyClass}`} id="top">
        <div className="header6">
          <Container className="po-relative">
            <Navbar className="navbar-expand-lg h6-nav-bar">
              <NavbarBrand href="/">
                <Image src={logo} alt="wrapkit" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle}>
                <span className="ti-menu"></span>
              </NavbarToggler>
              <Collapse
                isOpen={isOpen}
                navbar
                className="hover-dropdown ml-auto"
                id="h6-info"
              >
                <Nav navbar className="ml-auto">
                  <NavItem>
                    <Link href="/">
                      <a
                        className={
                          router.pathname == "/"
                            ? "text-white nav-link"
                            : "text-white nav-link"
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/basic">
                      <a
                        className={
                          router.pathname == "/order"
                            ? "text-white nav-link"
                            : "text-white nav-link"
                        }
                      >
                        How it Works
                      </a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/location">
                      <a
                        className={
                          router.pathname == "/basic"
                            ? "text-white nav-link"
                            : "text-white nav-link"
                        }
                      >
                        Support
                      </a>
                    </Link>
                  </NavItem>
                  {!stickyClass ? null : (
                    <NavItem>
                      <Link href="/cart">
                        <a
                          className={
                            router.pathname == "/basic"
                              ? "text-white nav-link"
                              : "text-white nav-link"
                          }
                        >
                          {" "}
                          <i
                            className="fa fa-shopping-cart"
                            style={{
                              color: "#fff",
                              backgroundColor: "#838441",
                              padding: "6px",
                              borderRadius: "20px",
                            }}
                          ></i>
                        </a>
                      </Link>
                    </NavItem>
                  )}
                </Nav>
                {/* <div className="act-buttons">
                <NavLink
                  href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                  className="btn btn-light font-14"
                  target="_blank"
                >
                  Download Free
                </NavLink>
              </div> */}
              </Collapse>
            </Navbar>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
