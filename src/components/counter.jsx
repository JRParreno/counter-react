import React, { Component } from 'react';

class Counter extends Component {
    render() {
        
        return (
            <>
            <div className="d-flex">
                { this.props.children }
                </div>
            <div className="d-flex justify-content-around p-2">
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm m-2'>Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge rounded-pill m-2 fs-5 bg-";
        classes += (this.props.counter.value === 0) ? "warning text-dark" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;