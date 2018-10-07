import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
    onDelete=(Id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(Id);
        }
        
    }
    render() {
        var { product, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.Id}</td>
                <td>{product.Name}</td>
                <td>{product.CategoryId}</td>
                <td>{product.StoreId}</td>
                <td>{product.Price}</td>
                <td>
                    <Link to={`/product/${product.Id}/edit`}
                        className="btn btn-primary"

                    >Sửa</Link>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(product.Id)}
                    >Xóa</button>
                </td>
            </tr>
        );

    }
}


export default ProductItem;
