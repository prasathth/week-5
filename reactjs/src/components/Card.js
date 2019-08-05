import React,{Component} from 'react';

export default class Card extends Component {
    //constructor(){
    //    super();
        //this.details = this.details.bind(this);
    //}
    //details(){
    //    console.log('Came inside the click event handler');
    //}
    render(){
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                <h5 className="card-title">{this.props.id}</h5>
                    <h5 className="card-title">{this.props.title.toUpperCase()}</h5>
                    <p className="card-text">{this.props.body}</p>
                    <button href="#" className="btn btn-primary" onClick={()=>this.props.selected(this.props)}>Go somewhere</button>
                </div>
            </div>
        );
    }
}