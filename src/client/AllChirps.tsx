import React from 'react';
import { Link } from 'react-router-dom';

export default class AllChirps extends React.Component<IAllChirpsProps, IAllChirpsState> {

    constructor(props: IAllChirpsProps) {
        super(props);

        this.state = {
            chirps: []
        }
    }

    async componentWillMount() {
        let res = await fetch('/api/chirps');
        let data = await res.json();
        let chirps = Object.keys(data).map(key => {
            return {
                id: key,
                user: data[key].user,
                text: data[key].text
            }
        })
        chirps.pop();
        chirps.reverse();
        this.setState( { chirps });
    }

    render() {
        return <div className="list-chirps">
            {this.state.chirps.map(chirp => {
                return (
                    <div key={chirp.id} className="single-chirp">
                        <div className="user">
                            {chirp.user}
                            {/* <Link to={`/${chirp.id}`}>{chirp}</Link> */}
                        </div>
                        <div className="chirp">
                            {chirp.text}
                            {/* <Link to={`/${chirp.id}`}>{chirp}</Link> */}
                        </div>
                        <div>
                            <button className="btn btn-secondary"><Link to={`/${chirp.id}/admin`}>Admin</Link></button>
                        </div>
                    </div>
            )})}
        </div>
    }

}

interface IAllChirpsProps {
        
}

interface IAllChirpsState {
    // chirps: Array<object>;
    // id: number;
    chirps: { 
        id: string,
        user: string, 
        text: string
    }[];
}