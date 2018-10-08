import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase';
import faSliders from '@fortawesome/fontawesome-free-solid/faSlidersH';
import faProject from '@fortawesome/fontawesome-free-solid/faProjectDiagram';
import faBook from '@fortawesome/fontawesome-free-solid/faBook';
import faLifeRing from '@fortawesome/fontawesome-free-solid/faLifeRing';
import faUserLock from '@fortawesome/fontawesome-free-solid/faUserLock';
import faShield from '@fortawesome/fontawesome-free-solid/faShieldAlt';

import Logo from './Logo';
import './Sidebar.css';

class Footer extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}
	}

	componentDidMount = () => {		

	}

	render() {
		return (
			<div className="sidebar">
                <div className="sidebar-content">
                    <div>
                        <div className="title center">
                            {/* <h3 className="text-400">Machinable</h3> */}
                            <Logo color={"#CCC"}/>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <NavLink to="/project/api" style={{display: "flex"}}>
                                        <FontAwesomeIcon className="center-self" style={{fontSize: "24px"}} icon={faProject} fixedWidth/>
                                        <div className="margin-left-more">
                                            API
                                            <p className="navlink-description">Manage defined API resources</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project/collections" style={{display: "flex"}}>
                                        <FontAwesomeIcon className="center-self" style={{fontSize: "24px"}} icon={faDatabase} fixedWidth/>
                                        <div className="margin-left-more">
                                            Collections                                    
                                            <p className="navlink-description">Store unstructured JSON</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project/access" style={{display: "flex"}}>
                                        <FontAwesomeIcon className="center-self" style={{fontSize: "24px"}} icon={faUserLock} fixedWidth/>
                                        <div className="margin-left-more">
                                            Access                                    
                                            <p className="navlink-description">Configure users and access</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project/security" style={{display: "flex"}}>
                                        <FontAwesomeIcon className="center-self" style={{fontSize: "24px"}} icon={faShield} fixedWidth/>
                                        <div className="margin-left-more">
                                            Security                                    
                                            <p className="navlink-description">View sessions and logs</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project/settings" style={{display: "flex"}}>
                                        <FontAwesomeIcon className="center-self" style={{fontSize: "24px"}} icon={faSliders} fixedWidth/>
                                        <div className="margin-left-more">
                                            Settings
                                            <p className="navlink-description">Project configuration and settings</p>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>                        
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        <ul className="links">
                            <li><a href="#"><FontAwesomeIcon className="center-self" icon={faBook} fixedWidth/> Documentation</a></li>
                            <li><a href="#"><FontAwesomeIcon className="center-self" icon={faLifeRing} fixedWidth/> Support</a></li>
                        </ul>
                    </div>
                </div>
			</div>
		  );
	}
}


export default Footer;