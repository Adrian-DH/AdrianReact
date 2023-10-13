import {Routes, Route, useParams} from "react-router-dom";
import Posts from './Posts';
import MainPage from '../MainPage';
//import UserForm from './UserForm';

const UserFormForUrl = ({users}) => {
    const { id } = useParams();
    return <UserForm id={id} user={users[id]} />;
  };
const Dispatcher = () => (

    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/Posts" element={<Posts/>} />
    </Routes>
);

export default Dispatcher;