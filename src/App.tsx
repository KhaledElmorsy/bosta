import Navbar from '@/components/nav/navbar/Navbar';
import { Route, Navigate, Routes } from 'react-router-dom';
import './App.scss';
import TrackingPage from '@/components/tracking/page/TrackingPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/track/:trackingNumber" element={<TrackingPage />} />
        <Route path="*" element={<Navigate to="/track/84043113" />} />
      </Routes>
    </>
  );
}

export default App;
