import React from 'react';
import Card from './Card.js';
import '../App.css';
import axios from 'axios';

export default class Main extends React.Component {

    constructor(){
        super();
        console.log(`called from the constructor of Main component..`);
        this.state={
            users : [

            ]}
        }

    componentDidMount(){
        console.log(`Component is mounted on the DOM`);

        
        axios.get("http://localhost:8000/api/movies").then(res => this.setState({
            users : res.data.data
        })
        )
        
    }

    render(){
    
        return (
            
            <div className="row">
            {
                this.state.users.map((phon,index)=>
                <div className="col-md-3" key={index}>
                    <Card key={index} title={phon.name} body={phon.director} d={phon.actor}/>
                </div>)
            }
            </div>
            
            
        );
    }
}
