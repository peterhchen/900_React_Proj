import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        // We can use use the following statement due to JavaScript 
        // is asynchronously.
        // const posts = axios.get ('https://jsonplaceholder.typicode.com/posts')
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 4)
            //const posts = response.data
            // post.userid, post.id, post.title, is an array
            // ...post is to distribute the post property 
            // (which is a array).
            const updatedPosts = posts.map (post =>{
                return {
                    ...post,
                    author: 'Peter'
                }
            })
            this.setState({posts: updatedPosts})
            // this.setState({posts: response.data})
            //console.log('response:', response)
        })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }
    render () {
        // new array posts[] fro map
        const posts = this.state.posts.map(post => {
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id) }    
                />
        })
        console.log ('render => posts: ', posts)
        return (
            <div>
                <section className="Posts">
                    {posts}                
                </section>
                <section>
                    <FullPost id = { this.state.selectedPostId } />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;