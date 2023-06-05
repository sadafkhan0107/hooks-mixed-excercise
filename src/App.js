import './App.css';
import { useList } from './context/list-context';


function App() {
  const {data} = useList();
  console.log(data);
  return (
    <div className="App">
      {data.map((user) => <p key={user.id}>{user.firstName} {user.lastName} {user.email} {user.age}</p>)}
    </div>
  );
}

export default App;
