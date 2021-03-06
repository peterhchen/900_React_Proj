import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        // We can use use the following statement due to JavaScript 
        // is asynchronously.
        // const posts = axios.get ('https://jsonplaceholder.typicode.com/posts')
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log('response:', response)
            this.setState({posts: response.data})
        })
    }

    render () {
        // new array posts[] fro map
        const posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} />
        })
        console.log ('render => posts: ', posts)
        return (
            <div>
                <section className="Posts">
                    {posts}                
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;