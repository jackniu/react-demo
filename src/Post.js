import React from 'react';
import axios from 'axios';

export class Post extends React.Component {
    state = {
        post: null
    }
    componentDidMount() {
        // console.log(this.props);
        let id = this.props.match.params.post_id;
        console.log(id);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            console.log(res);
            this.setState({
                post: res.data,
            })
        })
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
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

export default Post
