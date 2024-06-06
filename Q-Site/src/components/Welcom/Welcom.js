import { Button, Col, Container, Row } from "react-bootstrap";
import { FaRegPlayCircle } from "react-icons/fa";
import './Welcom.css';
import Lorem from "../Lorem/Lorem";

function Welcom(){
    return(
        <>
        <Container fluid>
            <Row style={{display:'flex',flexDirection:'column'}} className="hero">
               <Col style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'50px'}}>
               <h1 style={{letterSpacing:'6px',fontWeight:'bold',color:'#383737'}}>Welcome to <span style={{color:'#77b6ca'}}>QuickStart</span></h1>
               <h6 style={{color:'#969393',margin:'35px 0px'}}>Quickly start your project now and set the stage for success</h6>
               <div className="btn-hero" style={{display:'flex',flexDirection:'row',margin:''}}>
                <Button href="#" style={{backgroundColor:'#388da8',borderRadius:'20px',border:'1px solid #77b6ca',padding:'6px 20px'}}>Get Started</Button>
                <Button href="#
                " style={{all:'unset',display:'flex',flexDirection:'row',alignItems:'center',margin:'0px 10px'}}><FaRegPlayCircle style={{fontSize:'30px',color:'#77b6ca'}} /><p style={{marginTop:'13px',margin:'0px 3px'}}>Watch Video</p></Button>
               </div>
               </Col>
               <Col>
               <img src="https://www.comm100.com/wp-content/uploads/2023/08/image/png/Pillar-blog-hero-banner-Personalized-Customer-Service.png" className="img-hero"/>
               </Col>
            </Row>
        </Container>
        <Lorem />
        </>
    )
}
export default Welcom