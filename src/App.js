import './App.css';
import {useState, useEffect} from 'react';

function Tabs({tabs, selectedTab}) {
    return (
        <div  style={{display: 'flex'}}>
            {tabs.map(tab =>
                <button
                    key={tab.title}
                    style={{
                        flex: 1 ,
                        height: '50px',
                        background: selectedTab === tab.title ? 'green' : 'lightgrey'}
                    }
                    onClick={tab.clickHandler}
                >
                    {tab.title}
            </button>)}
        </div>
    )
}

const PostList = ({posts}) => {
    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    )
}

const CommentList = ({comments}) => {
    return (
        <>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.title}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    )
}

const AlbumList = ({albums}) => {
    return (
        <>
            {albums.map((album) => (
                <div key={album.id}>
                    <h3>{album.title}</h3>
                    <p>{album.body}</p>
                </div>
            ))}
        </>
    )
}

const PhotoList = ({photos}) => {
    return (
        <>
            {photos.map((photo) => (
                <div key={photo.id}>
                    <h3>{photo.title}</h3>
                    <p>{photo.url}</p>
                </div>
            ))}
        </>
    )
}

const TodoList = ({todos}) => {
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>
                </div>
            ))}
        </>
    )
}

const UserList = ({users}) => {
    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    )
}


const urlBuilder = (resource) => `https://jsonplaceholder.typicode.com/${resource}`


function App() {
    const tabs = [
        {title: 'posts', clickHandler: () => setSelectedTab('posts')},
        {title: 'comments', clickHandler: () => setSelectedTab('comments')},
        {title: 'albums', clickHandler: () => setSelectedTab('albums')},
        {title: 'photos', clickHandler: () => setSelectedTab('photos')},
        {title: 'todos', clickHandler: () => setSelectedTab('todos')},
        {title: 'users', clickHandler: () => setSelectedTab('users')},
];

    const [selectedTab, setSelectedTab] = useState(tabs[0].title)
    const [list, setList] = useState([])

    const fetchData = async () => {
        const response = await fetch(urlBuilder(selectedTab));
        const data = await response.json();
        setList(data)
    }



    useEffect(() => {
        fetchData()
    }, [selectedTab])

    return (
        <div className="App">
            <Tabs tabs={tabs} selectedTab={selectedTab} />

            {selectedTab === 'posts' && <PostList posts={list}/>}
            {selectedTab === 'comments' && <CommentList comments={list}/>}
            {selectedTab === 'albums' && <AlbumList albums={list}/>}
            {selectedTab === 'photos' && <PhotoList photos={list}/>}
            {selectedTab === 'todos' && <TodoList todos={list}/>}
            {selectedTab === 'users' && <UserList users={list}/>}
        </div>

    );
}






export default App;
