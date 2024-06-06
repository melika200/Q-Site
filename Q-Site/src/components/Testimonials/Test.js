import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import'./Test.css';
import { MdOutlineStarPurple500 } from "react-icons/md";
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
function Test(){
    const Slids=[
        {
            id:1,
            iconPart:<MdOutlineStarPurple500 />,
            textPart:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5HDjDPRN6x4LMZ3OIJLejrdnaILx7BybY_btZyE5AX09zVE8HsfnZ-CNzxSMs96xgqU&usqp=CAU',
            name:'Jack Westoon',
            job:'web Development'
        },
        {
            id:2,
            iconPart:<MdOutlineStarPurple500 />,
            textPart:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGh1WnQbwLnOgF91L9gBxA9kDb-CI2rC4t0QfYbbDwRghF5AZpIIyfSbWO8LpNW6vmFCw&usqp=CAU',
            name:'Lusia macDonald',
            job:'Web Designer'
        },
        {
            id:3,
            iconPart:<MdOutlineStarPurple500 />,
            textPart:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrGi0P-IaTc6uhsQv4arhvTmRpBeLKQUvE7q9qNlh4CVJR7pxaadenDS0xoh_tH_Q5PY&usqp=CAU',
            name:'Osman Alavi',
            job:'Manager'
        },
        {
            id:4,
            iconPart:<MdOutlineStarPurple500 />,
            textPart:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CgwK7S5BdgLc04k-gWwNFFQErTcOcBzdeTu0ZjajvVpivhJks_rk8pfsoSDUU3LwvRg&usqp=CAU',
            name:'David merson',
            job:'Bussiness Manager'
        },
        {
            id:5,
            iconPart:<MdOutlineStarPurple500 />,
            textPart:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LOuPJUFQ8mcuaWPKwamXPOxqTZioy6Kg8OgKRmSOaxJfSrAt4Wk3czTQdJRPS3OQKf4&usqp=CAU',
            name:'Mohammad Khajaviyan',
            job:'Ex/Ux Designer'
        }
    ]
   
    return(
          <>
          <Container fluid style={{backgroundColor:'#e1f2f638',padding:'50px 0px'}}>
          <h5 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="headerTest">Testimonials</h5>
          <span style={{display:'block',margin:'auto',textAlign:'center',color:'#666',padding:'25px'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</span>
            <Row style={{width:'90%',margin:'auto'}}>
        <Swiper style={{paddingBottom:'50px'}}
        pagination={{
          clickable: true,
        }}
        spaceBetween={3}
        slidesPerView={3}
        navigation
        autoplay={true}
        scrollbar={{ draggable: true }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        <Col>
            {
                Slids.map((slid)=>(
                 <SwiperSlide style={{padding:'0px 65px'}} >
                 <div  className='mySwiper' style={{  display:'flex',boxShadow:' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
                 flexDirection:'column',justifyContent:'center',textAlign:'center',
                 alignItems:'center',padding:'50px',margin:'55px 0px'
                 }}>
                 <p style={{color:'#ffc107de'}}>  {slid.iconPart}<MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> </p>
                  <p style={{fontSize:'15px',fontStyle:'italic',paddingBottom:'16px'}}>  {slid.textPart} </p>
                  <img style={{width:'100px',borderRadius:'50%',height:'100px'}} src={slid.url} />
                  <p style={{paddingTop:'13px'}}> {slid.name} </p>
                  <p style={{paddingTop:'8px',color:'#a9a9a9'}}>  {slid.job} </p>
                 </div>
                 </SwiperSlide>
                ))
            }
        </Col>
       
      </Swiper>
            </Row>
          </Container>
      
        </>
    )
}
export default Test