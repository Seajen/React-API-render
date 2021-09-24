import './App.css';
import {useState, useEffect} from 'react';
import Tabs from "./components/Tabs/Tabs";
import {PostList} from "./components/PostList/PostList";
import {CommentList} from "./components/CommentList/CommentList";
import {AlbumList} from "./components/AlbumList/AlbumList";
import {PhotoList} from "./components/PhotoList/PhotoList";
import {TodoList} from "./components/TodoList/TodoList";
import {UserList} from "./components/UserList/UserList";


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
