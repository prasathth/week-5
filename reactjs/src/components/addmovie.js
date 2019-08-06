import React from 'react';
import Card from './Card.js';
import '../App.css';
import axios from 'axios';

export default class addmovie extends React.Component {

    constructor(){
        super();
        console.log(`called from the constructor of Main component..`);
        this.state={
            film : [

            ]
        }
    }

    
    componentDidMount(){
        console.log(`Component is mounted on the DOMhkjh`);

        console.log(this.props.match.params.id);
        let a = this.props.match.params.id;
        axios.get(`http://localhost:8000/api/movies/${a}`).then(res => this.setState({
            film : res.data.data
        })
        )
        
    }

    render(){
    
        return (
            
            <div className="row">
            {
                <div className="col-md-3" >
                    <Card title={this.state.film.name} body={this.state.film.director} d={this.state.film.actor} selected = {this.selectedProduct}/>
                </div>
                
            }
            </div>
            
            
        );
    }
}
