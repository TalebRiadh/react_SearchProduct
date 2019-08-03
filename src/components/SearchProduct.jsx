
import React, {Component} from 'react'



class SearchProduct extends Component{
    state= {
        value:""
    };

    handleChange = event =>{
        this.setState({value: event.target.value})
    };
    handleSumbit = event =>{
        event.preventDefault();
        const SearchName = this.state.value;
        this.props.onAdd(SearchName)
    };

render(){
    return(
        <form onSubmit={this.handleSumbit}>
            <label>
                <input placeholder="Product Name" className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="btn btn-primary btn-md  ml-3" type="submit" value="Search" />
        </form>
    )
}
}

export default SearchProduct