import {Routes, Route, useParams} from "react-router-dom";
import Posts from './Posts';
import MainPage from '../MainPage';

//import UserForm from './UserForm';

const UserFormForUrl = ({users}) => {
    const { id } = useParams();
    return <UserForm id={id} user={users[id]} />;
  };
const Dispatcher = ({data}) => { 
  return(
    <Routes>
      <Route path="/" element={<MainPage data={data}/>} />
      <Route path="course/:id/edit" element={<Posts data={data}/>} />
    </Routes>)
};

export default Dispatcher;