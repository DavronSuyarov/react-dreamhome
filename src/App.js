import { Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import Navbar from './components/Navbar.';
import Footer from './components/Footer';
import Properties from './pages/Properties';
import PropertiesMapPage from './pages/PropertiesMapPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import Agencies from './pages/Agencies';
import AgenciesDetail from './pages/AgenciesDetail';
import Agents from './pages/Agents';
import AgentsDetail from './pages/AgentsDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';
import DashboardReview from './pages/DashboardReview';
import DashboardProperties from './pages/DashboardProperties';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <div className='body counter-scroll'>
      <div id='wrapper'>
        <div id='pagee' className='clearfix'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePages />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/agencies' element={<Agencies />} />
            <Route path='/agencies-detail' element={<AgenciesDetail />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/agents-detail' element={<AgentsDetail />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog-detail' element={<BlogDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user'>
              <Route path='' element={<Dashboard />} />
              <Route path='profile' element={<DashboardProfile />} />
              <Route path='review' element={<DashboardReview />} />
              <Route path='properties' element={<DashboardProperties />} />
            </Route>
            <Route path='/faq' element={<Faq />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/properties-map' element={<PropertiesMapPage />} />
            <Route path='/properties-detail' element={<PropertyDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
