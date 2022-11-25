import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResults';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/results' element={<SearchResults />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
