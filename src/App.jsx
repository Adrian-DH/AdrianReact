
import { BrowserRouter} from 'react-router-dom';
import Dispatcher from './components/Dispatcher.jsx';
import { useDbData } from './utils/firebase';

const App = () => {
  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  return (
    <BrowserRouter>
      <Dispatcher data={data}/>
    </BrowserRouter>);
};

export default App;
