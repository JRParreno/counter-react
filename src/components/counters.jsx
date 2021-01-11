import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        
        const {onReset, counters, onDelete, onIncrement} = this.props;
        
        return (
            <div className="container">
                <div className="row vh-100 justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-5 m-5">
                    <div className="d-flex justify-content-center">
                        <div className="card border-5">
                        <img className="img-fluid" src="https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png" alt="user"/>
                            <div className="card-body bg-dark">
                                <div id="root" className="d-flex flex-column">
                                    <div>
                                    <button onClick={ onReset } className="btn btn-primary btn-sm m-2">Reset</button>
                                    { counters.map(counter => (
                                    <Counter key={ counter.id } 
                                        onDelete={ onDelete } 
                                        onIncrement={ onIncrement } 
                                        counter={counter}/>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Counters;