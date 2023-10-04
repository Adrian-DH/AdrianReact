import { useState } from 'react';
import Banner from './components/Banner.jsx';
import CourseList from './components/CourseList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';

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
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (<div>
  <Banner title = {data.title}></Banner>
  <CourseList courses= {data.courses}></CourseList>
    </div>)
  
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
