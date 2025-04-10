import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateUser />} />
        <Route path='/user-info' element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       {/* CreateUser */}
//         <Route path='/' element={<CreateUser />} /> 
//         <Route path='/user-info' element={<UserInfo />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
export default App;