import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Filters extends Component {
    render() {
        return (
            <ul className="filters">
                <NavLink to='/all'>
                    <li>
                        <button className="selected">All</button>
                    </li>
                </NavLink>
                <NavLink to='/active'>
                    <li>
                        <button>active</button>
                    </li>
                </NavLink>
                <NavLink to='/completed'>
                    <li>
                        <button>completed</button>
                    </li>
                </NavLink>
            </ul>
        );
    }
}
