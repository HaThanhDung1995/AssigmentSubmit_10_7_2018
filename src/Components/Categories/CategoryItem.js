import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CategoryItem extends Component {
    onDelete=(Id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(Id);
        }
        
    }
    render() {
        var { category, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{category.Id}</td>
                <td>{category.Name}</td>
                <td>{category.NameVn}</td>
                <td>
                    <Link to={`/category/${category.Id}/edit`}
                        className="btn btn-primary"

                    >Sửa</Link>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(category.Id)}
                    >Xóa</button>
                </td>
            </tr>
        );

    }
}


export default CategoryItem;
