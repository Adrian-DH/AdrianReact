import { useState } from 'react';
import Banner from './components/Banner.jsx';
import SelectedCourses from './components/SelectedCourses.jsx';
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
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  
  
  return (
  <div>
  <Banner title = {data.title}></Banner>
  <MenuPage selection = {currTerm} setSelection = {setCurrTerm} />
  <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i></button>
      <Modal open={open} close={closeModal}>
        <Cart selected={selected} />
      </Modal>
  <SelectedCourses courses= {data.courses} currTerm = {currTerm}></SelectedCourses>  
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
