import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './home';
// import Innovation from './innovation';
import reportWebVitals from './reportWebVitals';

// export default function Cap() {
//   return(
//     <div>

//     </div>
//     // <BrowserRouter>
//     // <Routes>
//     //   <Route path='home'element={<Home />} />
//     //   <Route path='innovation'element={<Innovation />} />
//     // </Routes>
//     // </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Home /> */}
    {/* <Innovation /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
