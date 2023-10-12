import { useState } from 'react';
import Banner from './components/Banner.jsx';
import CourseList from './components/CourseList.jsx';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MenuPage from './components/MenuPage.jsx';
import { useQuery } from '@tanstack/react-query';
import Modal from './components/Modal';
import Cart from './components/Cart';

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};

export const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery([url], () => fetchJson(url));
  return [ data, isLoading, error ];
};
const queryClient = new QueryClient();
const Main = () => {
  const [currTerm, setCurrTerm] = useState("Fall");
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [selected, setSelected] = useState([]);
  const [Unselectable, setSelectable] = useState([]);

  

  const toggleSelected = (course) => setSelected(
    selected.includes(course) && !Unselectable.includes(course)
    ? selected.filter((x) => x !== course) 
    : [...selected, course]
  );
  const UnselectableHandler =(course, action) =>{
    let res = CompatibleClasses();
    if (1){
      null;
    }
  }
  const toggleSelected1 = (course) => {
    if (selected.includes(course)){
      setSelected(selected.filter((x) => x !== course));
      UnselectableHandler(course, remove);
    }
    else if (!selected.includes(course) && !Unselectable.includes(course)){
      setSelected([...selected, course]);
      UnselectableHandler(course, add);
    }
  }
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  console.log(selected);
  
  return (
  <div>
  <div className="top-row">
  <Banner title = {data.title}></Banner>
  
  <MenuPage selection = {currTerm} setSelection = {setCurrTerm} />
  <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i></button>
      
      <Modal open={open} close={closeModal}>
        <Cart selected={selected} />
      </Modal>
      </div>
      <CourseList courses={data.courses} selected={selected} Unselectable={Unselectable} toggleSelected={toggleSelected} currTerm={currTerm} /> 
  </div>
  );
  
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
    </QueryClientProvider>);
};

export default App;
