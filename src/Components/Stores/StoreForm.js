import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import{actAddStoreRequest,actEditStoreRequest,actUpdateStoreRequest} from '../../Actions/Store';
class StoreForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            sn: '',
            sa: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
        
    }
    componentDidMount() {
        var { match } = this.props;
        
        if (match.params.id) {
            var id = match.params.id;
            this.props.EditStore(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps&&nextProps.storeEditing){
            var {storeEditing}=nextProps;
            this.setState({
                id:storeEditing.Id,
                sn:storeEditing.Name,
                sa:storeEditing.Addr
            });
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var {id,sn,sa}=this.state;
        var {history} =this.props;
        var store={
            Id:id,
            Name:sn,
            Addr:sa
        }
       if(id){
            this.props.UpdateStore(store);
       }
       else{this.props.AddStore(store);}
        history.goBack();    
       
       


    }

    
    
    
    render() {
        var { sn,sa } = this.state;

        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label >Name: </label>
                        <input type="text"
                            className="form-control"
                            name="sn"
                            value={sn}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Address: </label>
                        <input type="text"
                            className="form-control"
                            name="sa"
                            value={sa}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    

                    
                    {/* <Link to="/product-list" className="btn btn-danger">
                        Trở lại
                    </Link> */}
                    <button type="submit" className="btn btn-primary">Lưu lại</button>

                </form>

            </div>



        );
    }
}
const mapStateToProps = state => {
    return {
        storeEditing:state.storeEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
       AddStore:(store)=>{
            dispatch(actAddStoreRequest(store));
       },
       EditStore:(Id)=>{
           dispatch(actEditStoreRequest(Id));
       },
       UpdateStore:(store)=>{
           dispatch(actUpdateStoreRequest(store));
       }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreForm);
