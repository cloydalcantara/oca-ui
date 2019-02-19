import React, { Component } from 'react';
import logo from '../assets/oca-logo.png';
import logo1 from '../assets/oca-logo1.png';
import Sidebar from '../components/sidebar/index'

export class loginLayout extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                        <a className="navbar-brand brand-logo" href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <a className="navbar-brand brand-logo-mini" href="/">
                            <img src={logo1} alt="logo" />
                        </a>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center">
                        <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/" data-toggle="dropdown">
                            <i className="mdi mdi-bell"></i>
                            <span className="count">4</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <a className="dropdown-item">
                                <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
                                </p>
                                <span className="badge badge-pill badge-warning float-right">View all</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                <div className="preview-icon bg-success">
                                    <i className="mdi mdi-alert-circle-outline mx-0"></i>
                                </div>
                                </div>
                                <div className="preview-item-content">
                                <h6 className="preview-subject font-weight-medium text-dark">Application Error</h6>
                                <p className="font-weight-light small-text">
                                    Just now
                                </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                <div className="preview-icon bg-warning">
                                    <i className="mdi mdi-comment-text-outline mx-0"></i>
                                </div>
                                </div>
                                <div className="preview-item-content">
                                <h6 className="preview-subject font-weight-medium text-dark">Settings</h6>
                                <p className="font-weight-light small-text">
                                    Private message
                                </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                <div className="preview-icon bg-info">
                                    <i className="mdi mdi-email-outline mx-0"></i>
                                </div>
                                </div>
                                <div className="preview-item-content">
                                <h6 className="preview-subject font-weight-medium text-dark">New user registration</h6>
                                <p className="font-weight-light small-text">
                                    2 days ago
                                </p>
                                </div>
                            </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown d-none d-xl-inline-block">
                            <a className="nav-link dropdown-toggle" id="UserDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
                            <span className="profile-text">Hello, Richard V.Welsh !</span>
                            <img className="img-xs rounded-circle" src="images/faces/face1.jpg" alt="Profile image" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                            <a className="dropdown-item p-0">
                                <div className="d-flex border-bottom">
                                    
                                </div>
                            </a>
                            <a className="dropdown-item mt-2">
                                Manage Accounts
                            </a>
                            <a className="dropdown-item">
                                Change Password
                            </a>
                            <a className="dropdown-item">
                                Check Inbox
                            </a>
                            <a className="dropdown-item">
                                Sign Out
                            </a>
                            </div>
                        </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                               
                    </div>
                </div>
            </div>
        );
    }
};