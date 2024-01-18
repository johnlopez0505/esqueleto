
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import StudenList from './studentList/StudentList';
import ListPersons from './studentList/ListPersons';

function App() {
  return (
    <div>
      <Header color='blue' size='40px'/>
      <List/>
      <StudenList/>
      <ListPersons/>
      <Footer/>
    </div>
    

  );
}

export default App;
