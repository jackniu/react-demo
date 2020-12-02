import React from 'react';
import { connect } from 'react-redux';
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
    render() {
        // console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
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
    // console.log('id', id)
    return {
        post: state.posts.find(post => post.id === id)
    }
}
export default connect(mapStateToProps)(Post)
