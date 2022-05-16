import firebase from 'firebase/app'

import Header from '../header/index';
import Search from '../header/header-search';
import Category from '../category/category';
import Catalog from '../catalog';
import Footer from '../footer';

import './app.css'

function App() {
    return (
        <div className="app-container">
            <Header />
            <Search/>
            <Category/>
            <Catalog/>
            <Footer />
        </div>
    );
}

export default App;