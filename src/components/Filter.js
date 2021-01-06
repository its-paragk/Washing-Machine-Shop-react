import React, { Component } from 'react'; 

export default class filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                Order
                <select>
                <option >Newest</option>
                <option value="Lowest">Lowest</option>
                <option value="Higest">Higest</option>

                </select></div>
                <div className="filter-price">
                Filter<select>

                    <option value="5000">5000 to 10000</option>  
                    <option value="7000">10000 to 15000</option>
                    <option value="10000">15000 to 20000</option>
                    <option value="15000">20000 to 25000</option>
                  
        
                      
                </select></div>
                            
            </div>
        )
    }
}
