import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import{actAddCategoryRequest,actEditCategoryRequest,actUpdateCategoryRequest} from './../../Actions/index';
class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            cn: '',
            cnv: ''
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
            this.props.EditCategory(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps&&nextProps.categoryEditing){
            var {categoryEditing}=nextProps;
            this.setState({
                id:categoryEditing.Id,
                cn:categoryEditing.Name,
                cnv:categoryEditing.NameVn
            });
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var {id,cn,cnv}=this.state;
        var {history} =this.props;
        var category={
            Id:id,
            Name:cn,
            NameVn:cnv
        }
       if(id){
            this.props.UpdateCategory(category);
       }
       else{this.props.AddCategory(category);}
        history.goBack();    
       
       


    }

    
    
    
    render() {
        var { cn,cnv } = this.state;

        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label >Name: </label>
                        <input type="text"
                            className="form-control"
                            name="cn"
                            value={cn}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >NameVn: </label>
                        <input type="text"
                            className="form-control"
                            name="cnv"
                            value={cnv}
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
        categoryEditing:state.categoryEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
       AddCategory:(category)=>{
            dispatch(actAddCategoryRequest(category));
       },
       EditCategory:(Id)=>{
           dispatch(actEditCategoryRequest(Id));
       },
       UpdateCategory:(category)=>{
           dispatch(actUpdateCategoryRequest(category));
       }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
