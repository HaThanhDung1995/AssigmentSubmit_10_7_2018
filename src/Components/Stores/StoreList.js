import React, { Component } from 'react';
import { actFetchStoresRequest,actDeleteStoreRequest } from '../../Actions/Store';
import { connect } from 'react-redux';
import StoreItem from '../Stores/StoreItem';

class StoreList extends Component {
    componentDidMount() {
        this.props.fetchAllStores();
    }
    onDelete=(Id)=>{
        this.props.onDelete(Id);
    }
    showCategories = (categories) => {
        var result = null;
        if (categories.length > 0) {
            result = categories.map((item, index) => {
                return (
                    <StoreItem
                        key={index}
                        store={item}
                        index={index}
                        onDelete={this.onDelete}
                    ></StoreItem>
                )
            })
        }
        return result;
    }
    render() {
        var { stores } = this.props;
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên Tiếng Anh</th>
                                <th>Tên Tiếng Việt</th>
                                
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.showCategories(stores)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        stores: state.stores
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStores: () => {
            dispatch(actFetchStoresRequest());
        },
        onDelete :(id)=>{
            dispatch(actDeleteStoreRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreList);
