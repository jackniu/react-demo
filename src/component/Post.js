import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'
// import axios from 'axios';

export class Post extends React.Component {
    // state = {
    //     post: null
    // }
    // componentDidMount() {
    //     // console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     console.log(id);
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
    //         console.log(res);
    //         this.setState({
    //             post: res.data,
    //         })
    //     })
    // }
    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleDelete}>删除博客</button>
                </div>
            </div>
        ) :
            (
                <div className="container">
                    博客正在加载中...
                </div>
            );
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps', ownProps)
    let id = ownProps.match.params.post_id;
    console.log('state', state)
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deletePost: (id) => dispatch({
        //     type: 'DELETE_POST',
        //     id: id,
        // })
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
