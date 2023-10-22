import { useState } from 'react';
import Banner from './components/Banner.jsx';
import CourseList from './components/CourseList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MenuPage from './components/MenuPage.jsx';
import Modal from './components/Modal';
import Cart from './components/Cart';
import { CompatibleClasses } from './utils/comp.js';
import Navigation from './components/Navigation.jsx';
import { Nav } from 'react-bootstrap';


const Main = ({data}) => {
  const [currTerm, setCurrTerm] = useState("Fall");
  //const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [selected, setSelected] = useState([]);
  const [Unselectable, setSelectable] = useState([]);


  const toggleSelected = (course) => {
    if(!CompatibleClasses(course,selected)){
      setSelected(selected.includes(course) ? selected.filter((x) => x !== course) : [...selected, course]);
    }}
   

  return (
  <div>
  <div className="top-row">
  <Navigation/>
  <Banner title = {data.title}></Banner>
  <MenuPage selection = {currTerm} setSelection = {setCurrTerm} />
  <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4">Cart</i></button>
      
      <Modal open={open} close={closeModal}>
        <Cart selected={selected}/>
      </Modal>
      </div>
      <CourseList courses={data.courses} selected={selected} Unselectable={Unselectable} toggleSelected={toggleSelected} currTerm={currTerm} ></CourseList>
   
      </div>
  );
  
}

const MainPage = ({data}) => {
  
  
  return (
    <div className="container">
      <Main data={data}/>
    </div>
  );
};

export default MainPage;
