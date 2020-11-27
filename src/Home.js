import React from 'react'
// import Rainbow from './hoc/Rainbow'
import axios from 'axios';

class Home extends React.Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res);
            this.setState({
                posts: res.data.slice(0, 20),
            })
        })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <div className="card-title">{post.title}</div>
                            <div>{post.body}</div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">没有博客文章进行展示！</div>
            );
        return (
            <div>
                <div className="container">
                    <h1 className="center">Home页面</h1>
                    <div>{postList}</div>
                </div>
            </div>
        )
    }
}

export default Home
