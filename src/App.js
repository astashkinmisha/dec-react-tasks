import Users from "./Components/UsersComponent/Users";
import Posts from "./Components/PostsComponent/Posts";
import Comments from "./Components/CommentsComponent/Comments";
import './App.css';

function App() {
    return (
        <div className="App">
            <div className={'wrap'}>
                <div className={'usersPosts'}>
                    <Users/>
                    <Posts/>
                </div>
                <div className={'commentsBlock'}>
                    <Comments/>
                </div>

            </div>

        </div>
    );
}

export default App;
