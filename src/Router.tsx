import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { DefaultLayout } from './Layouts/DefaultLayout';
import { Home } from './Pages/Home/Home';
import { Cart } from './Pages/Cart/Cart';
import { Loading } from './Components/Loading/Loading';

export function Router() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleStart();
    const timer = setTimeout(() => {
      handleComplete();
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}