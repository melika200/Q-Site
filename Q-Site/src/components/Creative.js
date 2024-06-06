import { Button, Col, Container, Row } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function Creative(){
    return(
        <>
        <Container fluid style={{margin:'50px 0px'}}>
            <Row style={{display:'flex',flexDirection:'row',width:'90%',margin:'auto'}}>
                <Col style={{textAlign:'justify'}}>
                <span style={{color:'#3d4348',fontSize:'22px',fontWeight:'lighter'}}>WHO WE ARE</span>
                <h2 style={{fontSize:'30px',margin:'15px 0px'}}>Unleashing Potential with Creative Strategy</h2>
                <span style={{color:'#3d4348',fontSize:'16px',lineHeight:'35px',marginBottom:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                <div style={{marginTop:'15px'}}>
                <p style={{color:'#3d4348',margin:'10px 0px',fontSize:'15px'}}><FaRegCircleCheck style={{color:'#388da8',fontSize:'15px',marginRight:'0px 8px'}} />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p style={{color:'#3d4348',margin:'10px 0px',fontSize:'13px'}}><FaRegCircleCheck style={{color:'#388da8',fontSize:'15px',marginRight:'0px 8px'}} />Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                <p style={{color:'#3d4348',margin:'10px 0px',fontSize:'15px',lineHeight:'35px'}}><FaRegCircleCheck style={{color:'#388da8',fontSize:'15px',marginRight:'0px 8px'}} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                </div>
                <Button style={{borderColor:'#388da8',backgroundColor:'#388da8',margin:'10px 0px'}}>Read me <FaArrowRightLong  style={{color:'white'}}/></Button>
                </Col>
                <Col>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'15px'}}>
                    <img style={{width:'369px',height:'550px',borderRadius:'20px'}} src="https://www.teambonding.com/wp-content/uploads/2024/05/group-dynamics-at-work-400x400.jpg" />
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <img style={{width:'290px',height:'250px',borderRadius:'20px',margin:'0px 25px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxEC-nUyFNn8cDg6fmL2ojI3aUQmjX-MFWO4W5C4dHA&s" />
                        <img style={{width:'290px',height:'250px',borderRadius:'20px',margin:'0px 25px',marginTop:'33px'}} src="https://www.empoweradventures.com/wp-content/uploads/2018/03/shutterstock_737994433.jpg" />
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Creative