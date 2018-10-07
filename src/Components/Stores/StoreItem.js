import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StoreItem extends Component {
    onDelete=(Id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(Id);
        }
        
    }
    render() {
        var { store, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{store.Id}</td>
                <td>{store.Name}</td>
                <td>{store.Addr}</td>
                <td>
                    <Link to={`/store/${store.Id}/edit`}
                        className="btn btn-primary"

                    >Sửa</Link>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(store.Id)}
                    >Xóa</button>
                </td>
            </tr>
        );

    }
}


export default StoreItem;
