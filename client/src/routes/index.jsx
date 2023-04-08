import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import ENVTab from '../pages/ENVTab';
import IRTab from '../pages/IRTab';
import Steps from '../pages/Steps';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/envtab" element={<ENVTab />} />
                <Route path="/irtab" element={<IRTab />} />
                <Route path="/steps" element={<Steps />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
