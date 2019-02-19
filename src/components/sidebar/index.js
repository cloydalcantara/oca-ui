import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#dash" aria-expanded="false" aria-controls="dash">
                    <i className="menu-icon mdi mdi-content-copy"></i>
                    <span className="menu-title">Basic UI Elements</span>
                    <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="dash">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i className="menu-icon mdi mdi-content-copy"></i>
                    <span className="menu-title">Basic UI Elements</span>
                    <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
  }
}
