import { Col, Container, Row } from "react-bootstrap"
import { BsBinoculars } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import './Feature.css'
import { useState } from "react";

function Feature(){
    const [url,setUrl]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq354QSypR69JSAYKUtNzJtE9RBiWnwF3mOc4aFRjWRFhq4q8I2LT50eYpvQZYH_CfUQ4&usqp=CAU')

    const featureItems=[
        {
            id:1,
            iconComponent:<BsBinoculars/>,
            header:'Modi sit est dela pireda nest',
            span:'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq354QSypR69JSAYKUtNzJtE9RBiWnwF3mOc4aFRjWRFhq4q8I2LT50eYpvQZYH_CfUQ4&usqp=CAU'

},
        {
            id:2,
            iconComponent:<FaBox/>,
            header:'Unde praesenti mara setra le',
            span:'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
             url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbERCZozL18uHmQmsVzyGPGiu7x5e59X1BpcROw5QaDXO4dAYzBnvjUcF0In1KyEHQh0&usqp=CAU'

        },
        {
            id:3,
            iconComponent:<IoSunnyOutline />,
            header:'Pariatur explica nitro dela',
            span:'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            url:'https://366e203a.rocketcdn.me/wp-content/uploads/2020/06/Businesswomen.jpg'

        }
    ]
    const ShowPicture=(url)=>{
      setUrl(url)
    }
    return(
        <>
        <h5 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="header-feature">Features</h5>
        <span style={{display:'block',margin:'auto',textAlign:'center',color:'#666',padding:'25px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</span>
        <Container>
            <Row style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'35px'}}>
                <Col style={{marginTop:'50px'}}>
                   {

                      featureItems.map((featureItem) => (
                        <div
                        style={{display:'flex',flexDirection:'row',margin:'25px 0px'}}
                         key={featureItem.id}
                         onClick={()=>ShowPicture(featureItem.url)}
                         >
                            <span style={{ fontSize:'25px',color:'#388da8',borderRadius:'20px',marginRight:'10px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;;',width:'30px',height:'30px'
                           ,display:'flex',flexShrink:'0',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',padding:'2px'
                            }} > {featureItem.iconComponent} </span>
                         <div style={{display:'flex',flexDirection:'column'}}>
                            <h5 style={{fontSize:'16px'}}> {featureItem.header}</h5>
                            <span style={{textAlign:'justify',fontSize:'15px',paddingRight:'85px',marginTop:'8px',color:'gray'}}> {featureItem.span} </span>   
                         </div>
                        </div>))

                   }
                </Col>
                <Col >
                   <img className="col-lg-6" style={{borderRadius:'20px',width:'100%',height:'520px',marginLeft:'15px'}} id="one" src={url}/> 
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Feature