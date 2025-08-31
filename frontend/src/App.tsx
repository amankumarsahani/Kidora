import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StationeryPage from './pages/StationeryPage';
import ClothesPage from './pages/ClothesPage';
import ToysPage from './pages/ToysPage';
import AccessoriesPage from './pages/AccessoriesPage';
import BundlesPage from './pages/BundlesPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ComingSoonPage from './components/ComingSoonPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Routes without Header/Footer (Auth pages) */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Routes with Header/Footer */}
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/stationery" element={<StationeryPage />} />
                <Route path="/clothes" element={<ClothesPage />} />
                <Route path="/toys" element={<ToysPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/bundles" element={<BundlesPage />} />
                <Route path="/categories" element={<ComingSoonPage category="Categories" icon="ri-grid-line" description="Browse all our amazing product categories. We're organizing everything for the best shopping experience!" />} />
                <Route path="/products" element={<ComingSoonPage category="Products" icon="ri-shopping-bag-line" description="Our full product catalog is coming soon! Get ready to discover amazing items for your little ones." />} />
                <Route path="/categories/stationery" element={<StationeryPage />} />
                <Route path="/categories/clothes" element={<ClothesPage />} />
                <Route path="/categories/toys" element={<ToysPage />} />
                <Route path="/categories/accessories" element={<AccessoriesPage />} />
                <Route path="*" element={<ComingSoonPage category="Page Not Found" icon="ri-error-warning-line" description="Oops! The page you're looking for doesn't exist. Let's get you back to exploring our amazing products!" />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
