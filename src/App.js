import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import './App.css';
import { DefaultLayout } from 'components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'redux/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'SSStutter';
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router basename="/ssstutter">
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.components;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
