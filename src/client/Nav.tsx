import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

export default class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="nav">
                <h1 className="text-secondary flex_item">chirper</h1>
                <button className="btn btn-info flex_item"><Link to="/addChirp">add chirp</Link></button>
                <button className="btn btn-info flex_item"><Link to="/">all chirps</Link></button>
            </div>
        )
    }

}

export interface INavProps {

}

interface INavState {

}