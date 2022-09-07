import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";

import "css-to-go";
import { Button } from "lib-components/src/Button";

export function App() {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer
                    className="ctg-container"
                    style={{ textAlign: "center" }}
                >
                    &copy;{new Date().getFullYear()}
                </footer>
            </div>
        </Router>
    );
}
