//do imports, make sure everything is wired together first!
import Comment from './Comment';
import CreateComment from './CreateComment';

function App(){
    return (
        <div>
            <h1>Hello from APP!</h1>
            <Comment />
            <CreateComment />
        </div>
    )
}

export default App;