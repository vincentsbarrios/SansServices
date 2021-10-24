import './App.scss';
import React, { Component, useState  } from "react";
import { Row, Col, Dropdown, Button, Menu, Image, Divider, Modal } from 'antd';
import logo from './contents/logo0.png'
import dots from './contents/dots.PNG'
import goldTitle from './contents/gold-title.png'
import fiveStart from './contents/five-stars-premium.png'  
import sponsers from './contents/sponser1.png'
import servsafe from './contents/servsafe.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import coctails from './contents/coctails.png'
import logo1 from './contents/logo1.png'
import wineOne from './contents/wine.png'
import wineTwo from './contents/wine2.png'

const photos = [
  {
    name: 'photo1',
    url: 'https://mycaribbeanluxury.com/wp-content/uploads/2019/11/LatitudesCover-1024x467.png'
  },
  {
    name: 'photo2',
    url: 'https://www.honeymoonsinc.com/wp-content/uploads/2020/10/sandals-south-coast-overwater-firepit-900x500.jpg'
  }
]

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Reservation
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Contact Us
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        About Us
      </a>
    </Menu.Item>
  </Menu>
);

const menuSlide = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Reservation
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Bar Drinks
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Menu Bar
      </a>
    </Menu.Item>
  </Menu>
);



function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };




    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };

    

    return (
      <div className="App">
        
        <div className="NavBar">
          <Row justify="end">
          <Button className='nav-btn'  href="https://www.beaches.com/awards/" span={2}>Local Tours</Button>
          <Button className='nav-btn' href="https://www.beaches.com/brochure/" span={2}>Red Lane© Spa</Button>
          <Button className='nav-btn' href="https://www.aliyun.com" span={2}>Before You Arrive</Button>
          <Button className='nav-btn' href="https://www.beaches.com/extras/" span={2}>Already Booked?</Button>
          <Col span={6}>
          <form>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search..."></input>
            </div>
          </form>   
          </Col>
          </Row>
        </div>
  
        <Row className="top-banner">
          <Col span={8}>
              <img className="logo" src={logo} ></img>
          </Col>
          <Col span={1.5} offset={9}>
              <div >BOOK NOW</div>
              <Row>
                <Col  span={20}><div className="botton-text">CHECK & AVAILIBILITY</div></Col>
              </Row>
          </Col>
          <Col span={2}>
              <Dropdown Dropdown className="top-menu" overlay={menu} placement="bottomCenter">
                <Button > 
                  <img className="top-logo2"  src={dots} ></img>
                </Button>
              </Dropdown>
          </Col>
        </Row>
        
        
        <div className="main-content">
          <div className="main-text">
            <Col span={1.5} offset={9}>
                <div >Only The World's Best Servers</div>
            </Col>
            <Col className="main-botton-text" span={20}><div>THE WORLD'S BEST</div></Col>
            <div><img className="gold-title" src={goldTitle} ></img></div>
          </div>
          <div>
            <img className="five-star" src={fiveStart} ></img>
           </div>
        </div>
  
        <div className="main-content2" >
          <div className="content-text2">
              Hallmark of Excellence
          </div>
          <div className="content-text-lower">As part of the 5-Star Luxury included© experience, Beaches only serves premium brand</div>
          <div className="content-text-lower2">liquors-and they're always included and unlimited. Quality and excellence are the hallmarks of</div>
          <div className="content-text-lower3">Beaches, making us one of the most trusted brands in the world. Its's this proven track record</div>
          <div className="content-text-lower4">and best-in-class approach that has our guests returning time and time again.</div>
          <div className="content-sponser">
            <img className="sponser" src={sponsers} ></img>
          </div>
          <div className="videoFrame">
            <iframe width="600" height="350"
              src="https://www.youtube.com/embed/RQ3tXlwr7vc">
            </iframe>
          </div>
        </div>
  
        <Row className="content3">
          <Col className="content3-leftside">
            <div className="content3-text">A Bar to Match</div>
            <div className="content3-text2">Every Mood</div>
            <div className="content3-text-lower">With unlimited drinks in as many as 15 bars per resort, nobody knows how to party like Beaches.</div>
            <div className="content3-text-lower">By day, swim-up bars, oceanside bars, and beachside divans invite you to indulge in chilled rum</div>
            <div className="content3-text-lower">concotions and any beverage of your choise. By night, go to bar shopping or dance barefoot to the </div>
            <div className="content3-text-lower">exotic rthythms  of island music at bechside watering holes--all under a canopy of stars.</div>
          </Col>
          <Col className="content3-rightside">
              <img className="content3-logo" src={servsafe} ></img>
          </Col>
        </Row>
        
        <Col xs={12} x={10} className="slideshow">
          <Slider {...settings}>
            {photos.map((photo) => {
              return(
                <div>
                  <img className="slideshow-image" src={photo.url}></img>
                  <Dropdown className="menu-slide" overlay={menuSlide} placement="topCenter" >
                    <Button>MORE DETAILS</Button>
                  </Dropdown>
                </div>
              )
            })}
          </Slider>
        </Col>
        
        <Row className="cocktail-content">
            <Col className="cocktail-text">Speacility</Col>
            <Col className="cocktail-text2">Cocktails</Col>
            <Col className="cocktail-text3">IN OURS BARS & PUBS</Col>
            <Divider className='cocktail-line' />
            <Col className="cocktail-text4">OUR BARTENDERS ARE EXPERTS AT PURING</Col>
            <Col className="cocktail-text5">& MIXING THE BEST COCKTAILS.</Col>    
            <Divider className='cocktail-line'/>
            <Col className="cocktail-img" >
              <img src={coctails} ></img>
            </Col>
            <Divider className='cocktail-line'/>
            <Row className='cocktail-bottom'>
              <Col>AND AMNY MORE WITH OUR PREMIUM LIQUORS AT</Col>  
              <Col className="cocktail-bottom-text">NO EXTRA COST!</Col> 
            </Row>
            <Divider className='cocktail-line'/>
        </Row>

        <Row>
          <Col className='wineLeftContainer'>
            <img className='wine-img' src={wineOne} ></img>
              <div className='premium-text-container'>
                <Col>We've raised the bar by partering with Robert</Col>
                <Col>Mondavi Twin Oaks®. Selected for Sandals Resorts,</Col>
                <Col>there are 6 varietals to choose from, each one</Col>
                <Col>complementing our gourmet dinning perfectly.</Col>
                <Button href="https://www.sandals.com/barbados/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_cO3hoPJJhCI9Ys6mMFnU1MvOD787SZOArkkcBsM27Ze92AgbNf0ucaAn_OEALw_wcB&gclsrc=aw.ds" className='wine-link' type="link">Learn More</Button>
                <i class="fa fa-caret-right"></i>
              </div>
          </Col>
          <Col className='wine-left-container2'>
            <img className='wine-img2' src={wineTwo} ></img>
            <div className='premium-text-container2'>
                <Col>An iconic Jamaica product and internationally</Col>
                <Col>acclaimed run brand, is poured at all Beaches</Col>
                <Col>Resorts throughout the Caribbean.</Col>
                <Button href="https://www.sandals.com/barbados/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_cO3hoPJJhCI9Ys6mMFnU1MvOD787SZOArkkcBsM27Ze92AgbNf0ucaAn_OEALw_wcB&gclsrc=aw.ds" className='wine-link2' type="link">Learn More</Button>
                <i class="fa fa-caret-right"></i>
              </div>
          </Col>
        </Row>

        <div className="video-background">
              <div className='video-box'>
              <Row>
                    <Col>
                      <div onClick={showModal} class="play-button-outer">
                        <div class="play-button"></div>
                        <div className="play-text">PLAY VIDEO</div>
                      </div>
                      
                      <Modal style={{width:'600px'}}title="Beaches Resort" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                          <iframe width="470" height="350"
                            src="https://www.youtube.com/embed/RQ3tXlwr7vc"> 
                            
                            //https://youtu.be/2D1t1RDLJ9s / Link not working.

                          </iframe>
                      </Modal>
                    </Col>
                    <Col className='video-text-content'>
                      <Col className='video-text'>
                        UNLIMITED
                      </Col>
                      <Col className='video-text'>
                        PREMIUM
                      </Col>
                      <Col className='video-text'>
                        LIQUORS
                      </Col>
                      <Col className='video-text2'>
                        ARE INCLUDED AT BEACHES
                      </Col>
                    </Col>
                  </Row>
              </div>
        </div>
        
        <div className='bottom-content'>
          <img className='bottom-logo' src={logo1} ></img>
          <Col className='bottom-text'>More Quality Inclusions</Col>
          <Col className='bottom-text2'>THAN ANY OTHER RESORTS ON THE PLANET</Col>
          <Button href="https://www.beaches.com/all-inclusive/" className='bottom-btn'>View All Inclusions</Button>
        </div>
      </div>
    );

  

  
}

export default App;
