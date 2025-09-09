import React from 'react'
import './Home.css';
import Header from '../../components/header/header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';


const Home = ( category,setCategory) => {
  return (
    <div>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home;
