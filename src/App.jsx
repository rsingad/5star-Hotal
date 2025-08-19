import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutSection from './components/About';
import AmenitiesSection from './components/AmenitiesSection';
import ContactSection from './components/ContactSection';
import DiningSection from './components/DiningSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RoomsSection from './components/RoomSection';
import SpaWellnessSection from './components/SpaWellnessSection';
import TamarindusDetails from './components/TamarindusDetails';
import TamarindusHeader from './components/TamarindusRestorent/TamarindusHeader';
import TamarindusHeroSection from './components/TamarindusRestorent/TamarindusHeroSection';
import TamarindusAboutSection from './components/TamarindusRestorent/TamarindusAboutSection';
import TamarindusMenuSection from './components/TamarindusRestorent/TamarindusMenuSection';
import TamarindusGallerySection from './components/TamarindusRestorent/TamarindusGallerySection';
import TamarindusContactSection from './components/TamarindusRestorent/TamarindusContactSection';
import TamarindusFooter from './components/TamarindusRestorent/TamarindusFooter';
import TamarindusAmenitiesSection from './components/TamarindusRestorent/TamarindusAmenitiesSection';
import Cloud9Header from './components/Cloud-9/Cloud9Header';
import Cloud9HeroSection from './components/Cloud-9/Cloud9HeroSection';
import Cloud9AboutSection from './components/Cloud-9/Cloud9AboutSection';
import Cloud9MenuSection from './components/Cloud-9/Cloud9MenuSection';
import Cloud9GallerySection from './components/Cloud-9/Cloud9GallerySection';
import Cloud9ContactSection from './components/Cloud-9/Cloud9ContactSection';
import Cloud9Footer from './components/Cloud-9/Cloud9Footer';
import JazzBanquetHallSection from './components/JazzBanquetHall/JazzBanquetHallSection';
import JazzBanquetHallHeroSection from './components/JazzBanquetHall/JazzBanquetHallHeroSection';
import JazzBanquetHallAboutSection from './components/JazzBanquetHall/JazzBanquetHallAboutSection';
import JazzBanquetHallGallerySection from './components/JazzBanquetHall/JazzBanquetHallGallerySection';
import JazzBanquetHallContactSection from './components/JazzBanquetHall/JazzBanquetHallContactSection';
import JazzBanquetHallFooter from './components/JazzBanquetHall/JazzBanquetHallFooter';
import InfinityPoolAboutSection from './components/InfinityPool/InfinityPoolAboutSection';
import InfinityPoolContactSection from './components/InfinityPool/InfinityPoolContactSection';
import InfinityPoolGallerySection from './components/InfinityPool/InfinityPoolGallerySection';
import InfinityPoolSection from './components/InfinityPool/InfinityPoolSection';
import InfinityPoolFooter from './components/InfinityPool/InfinityPoolFooter';
import ParadiseWeddingGardenHeroSection from './components/ParadiseWeddingGarden/ParadiseWeddingGardenHeroSection';
import ParadiseWeddingGardenAboutSection from './components/ParadiseWeddingGarden/ParadiseWeddingGardenAboutSection';
import ParadiseWeddingGardenGallerySection from './components/ParadiseWeddingGarden/ParadiseWeddingGardenGallerySection';
import ParadiseWeddingGardenContactSection from './components/ParadiseWeddingGarden/ParadiseWeddingGardenContactSection';
import ParadiseWeddingGardenFooter from './components/ParadiseWeddingGarden/ParadiseWeddingGardenFooter';
import ElevateGymHeroSection from './components/ElevateGym/ElevateGymHeroSection';
import ElevateGymAboutSection from './components/ElevateGym/ElevateGymAboutSection';
import ElevateGymGallerySection from './components/ElevateGym/ElevateGymGallerySection';
import ElevateGymContactSection from './components/ElevateGym/ElevateGymContactSection';
import ElevateGymFooter from './components/ElevateGym/ElevateGymFooter';
import BlissSpaHeroSection from './components/BlissSpa/BlissSpaHeroSection';
import BlissSpaServicesSection from './components/BlissSpa/BlissSpaServicesSection';
import BlissSpaAboutSection from './components/BlissSpa/BlissSpaAboutSection';
import BlissSpaGallerySection from './components/BlissSpa/BlissSpaGallerySection';
import BlissSpaFooter from './components/BlissSpa/BlissSpaFooter';
import RoomDetail from './components/RoomDetail';
import RoomList from './components/RoomList';
import { headerConfigs } from './components/headerConfigs';
import BlissSpaContactSection from './components/BlissSpa/BlissSpaContactSection';
import InfinityPoolHero from './components/InfinityPool/InfinityPoolHero';
import WeddingGardenSection from './components/WeddingGardenSection';
import ElevateGymSection from './components/ElevateGymSection';

function App() {
  return (
    <Router>
      <div className='hm'>
        <Header />
      </div>

      <Routes>

        <Route path="/" element={
          <>
            <HeroSection />
            <DiningSection />
            <RoomsSection />
            {/* <RoomList/> */}
            <InfinityPoolSection />
            <SpaWellnessSection />
            <WeddingGardenSection/>
            <ElevateGymSection/>
            <GallerySection />
            <AmenitiesSection />
            {/* <TamarindusDetails /> */}
            <AboutSection />
            <ContactSection />



          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/dining" element={<DiningSection />} />
        <Route path="/TamarindusRestaurant" element={
          <>
            {/* <TamarindusHeader /> */}
            <TamarindusHeroSection />
            <TamarindusAboutSection />
            <TamarindusMenuSection />
            <TamarindusGallerySection />
            <TamarindusContactSection />
            <TamarindusAmenitiesSection />
            {/* <TamarindusFooter /> */}

          </>
        }

        />
        <Route path="/Cloud-9" element={
          <>
            {/* <Cloud9Header /> */}
            <Cloud9HeroSection />
            <Cloud9AboutSection />
            <Cloud9MenuSection />
            <Cloud9GallerySection />
            <Cloud9ContactSection />
            {/* <Cloud9Footer /> */}


          </>
        }

        />

        <Route path="/JazzBanquetHall" element={
          <>
            {/* <Cloud9Header /> */}
            <JazzBanquetHallHeroSection />
            <JazzBanquetHallSection />
            <JazzBanquetHallAboutSection />
            <JazzBanquetHallGallerySection />
            <JazzBanquetHallContactSection />
            {/* <JazzBanquetHallFooter /> */}
            {/* <Cloud9ContactSection /> */}

          </>
        }

        />
        <Route path="/InfinityPool" element={
          <>
            {/* <InfinityPoolSection />
            <InfinityPoolGallerySection/>
            <InfinityPoolContactSection />
            <InfinityPoolFooter /> */}

            {/* <InfinityPoolSection /> */}
            <InfinityPoolHero/>
            <InfinityPoolAboutSection />
            <InfinityPoolGallerySection />
            <InfinityPoolContactSection />
            {/* <InfinityPoolFooter /> */}
            {/* <InfinityPoolAboutSection /> */}
            {/* <JazzBanquetHallContactSection /> */}
            {/* <JazzBanquetHallFooter/> */}
            {/* <Cloud9ContactSection /> */}

          </>
        }

        />

        <Route path="/ParadiseWeddingGarden" element={
          <>
            <ParadiseWeddingGardenHeroSection />
            <ParadiseWeddingGardenAboutSection />
            <ParadiseWeddingGardenGallerySection />
            <ParadiseWeddingGardenContactSection />
            {/* <ParadiseWeddingGardenFooter /> */}


          </>
        }

        />
        <Route path="/ElevateGym" element={
          <>
            <ElevateGymHeroSection />
            <ElevateGymAboutSection />
            <ElevateGymGallerySection />
            <ElevateGymContactSection />
            {/* <ElevateGymFooter /> */}


          </>
        }

        />
        <Route path="/BlissSpa" element={
          <>
            <BlissSpaHeroSection />
            <BlissSpaAboutSection />
            <BlissSpaServicesSection />
            <BlissSpaGallerySection />
            <BlissSpaContactSection />
            {/* <BlissSpaFooter /> */}


          </>
        }

        />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/rooms" element={<RoomsSection />} />
        <Route path="/rooms/:roomName" element={<RoomDetail />} />
        <Route path="/spa-wellness" element={<SpaWellnessSection />} />
        <Route path="/amenities" element={<AmenitiesSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;