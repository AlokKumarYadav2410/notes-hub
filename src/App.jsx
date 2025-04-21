import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Note from './components/Note'
import ViewNote from './components/ViewNote'
import About from './components/About'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
        <div>
          <Navbar />
          <Home />
        </div>,
    },
    {
      path: '/notes',
      element: 
        <div>
          <Navbar />
          <Note />
        </div>,
    },
    {
      path: '/notes/:id',
      element: 
        <div>
          <Navbar />
          <ViewNote />
        </div>,
    },
    {
      path:"/about", element:<div><Navbar /><About /></div>
    },
    {
      path: '*', // Catch-all route for invalid paths
      element: 
        <div>
          <Navbar />
          <NotFound />
        </div>,
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <Footer />

    </div>
  )
}

export default App


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Note from './components/Note';
// import ViewNote from './components/ViewNote'
// import About from './components/About';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen bg-gray-900">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path = '/notes/:id' element={<ViewNote />}/>
//             {/* <Route path="/create" element={<CreateNote />} /> */}
//             <Route path="/notes" element={<Note />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
