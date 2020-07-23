import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class SingleChirp extends React.Component<ISingleChirpProps, ISingleChirpState> {
    constructor(props: ISingleChirpProps) {
        super(props);
        this.state = {
            user: '',
            text: ''
            // chirp: this.props.match.params.chirp
        };
        this.editText = this.editText.bind(this);
        this.deleteText = this.deleteText.bind(this);
    
    }

    //make a get request for the specific chirp
    async componentDidMount() {
        let id = this.props.match.params.id
        try {
            let chirpResponse = await fetch(`/api/chirps/${id}`);
            let chirp = await chirpResponse.json();
            console.log('chirp: ' + JSON.stringify(chirp));
            this.setState({ 
                user: chirp.user, 
                text: chirp.text
            })
        } catch(err) {
            console.log(err);
        }
    }

    //send user back to main page when chirp is deleted
    async deleteText() {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'DELETE'
            });
            this.props.history.push('/');
        }
        catch(err) {
            console.log(err);
        }
    } 

    //make a put request for that chirp with a save edit button and send user back to main page
    async editText(e: React.MouseEvent<HTMLButtonElement>) {
        let id = this.props.match.params.id;
        let data = {
            user: this.state.user,
            text: this.state.text
        }
        e.preventDefault();

        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            });
            this.props.history.replace('/');
        } catch(err) {
            console.log(err);
        }
    };
    
    //added user: this.state.user, need to make user remain when text is updated
    textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: e.target.value, user: this.state.user});
    }

    render() {
    // return <h1>{this.state.chirp}</h1>;
    return (
    <div className="admin-div">
        <div>
            <div className="edit">
                <h2>edit chirp</h2>
                <input type="text" defaultValue={this.state.text} onChange={this.textChange}/>
                <button className="btn btn-warning" onClick={this.editText}>edit chirp</button>
            </div>
        </div>
        <div className="delete">
            <h2>delete chirp</h2>
        <button className="btn btn-danger" onClick={this.deleteText}>delete</button>
        </div>
    </div>
    )
    }

}

interface ISingleChirpProps extends RouteComponentProps<{ id: string }> {

}

interface ISingleChirpState {
    user: string,
    text: string
}