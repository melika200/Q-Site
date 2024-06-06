import { Button, Col, Container, Row } from "react-bootstrap"
import { BsEasel } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
function Learn(){
    return(
        <>
        <Container >
            <Row style={{display:'flex',flexDirection:'row',margin:'30px 0px',justifyContent:'space-between',alignItems:'center'}}>
            <Col className="col-xl-5" style={{backgroundColor:'#d8f0f878',borderRadius:'20px'}}>
                <div style={{display:'flex',flexDirection:'column',padding:'20px',boxsizing:'border-box'}}>
                    <h3 style={{fontSize:'23px',margin:'15px 0px'}}>Neque ipsum omnis sapiente quod quia dicta</h3>
                    <span style={{color:'#3f4141a6',margin:'10px 0px',fontSize:'14px',paddingRight:'15px'}}>Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares</span>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <span style={{color:'#3f4141a6',fontSize:'16px'}}><BsEasel style={{color:'#388da8',fontSize:'30px',paddingRight:'8px'}} />Et corporis ea eveniet ducimus.</span>
                    <span style={{color:'#3f4141a6',fontSize:'16px'}}><BsPatchCheck style={{color:'#388da8',fontSize:'30px',paddingRight:'8px'}} />Exercitationem dolorem sapiente.</span>
                    <span style={{color:'#3f4141a6',fontSize:'16px'}}><FiSun style={{color:'#388da8',fontSize:'30px',paddingRight:'8px'}} />Veniam quia modi magnam.</span>
                    </div>
                    <Button style={{backgroundColor:'#388da8',color:'#fff',borderRadius:'5px',border:'1px solid #388da8',margin:'15px 0px',width:'110px',fontSize:'15px'}}>Learn More</Button>
                </div>
                </Col>
                <Col className="col-xl-6">
                <img style={{width:'650px',height:'100%',marginRight:'3%',borderRadius:'20px'}} src="https://d6interactive.com/wp-content/uploads/2018/05/BLOG-8-How-to-Make-Your-Site-Mobile-Friendly.jpeg" alt="MobileUser" />
                </Col>
              
            </Row>
        </Container>
    
        </>
    )
}
export default Learn