import { Col, Container, Row } from "react-bootstrap";
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import './Lorem.css'

function Lorem(){
    return(
        <>
        <Container fluid>
            <Row style={{margin:'35px 0px',padding:'35px 0px',backgroundColor:'#d8f0f878'}}>
            <Col className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="parent" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
             <span   ><BsBriefcase className="child" style={{backgroundColor:'#cfe5ed',color:'#0da0d5',fontSize:'85px',padding:'10px'}}  /></span>
             <p style={{margin:'0px 15px',display:'flex',flexDirection:'column'}}><b className="chicky">Lorem ipsum</b><span style={{marginTop:'10px'}} >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span></p>
            </div>
            </Col>
            <Col className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="parent" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <span  ><BsCardChecklist className="child"  style={{backgroundColor:'#cfe5ed',color:'#0da0d5',fontSize:'85px',padding:'10px'}} /></span>
            <p style={{margin:'0px 15px',display:'flex',flexDirection:'column'}}><b className="chicky">Lorem ipsum</b><span style={{marginTop:'10px'}} >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span></p>

            </div>
            </Col>
            <Col className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="parent" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <span ><BsBarChart className="child" style={{backgroundColor:'#cfe5ed',color:'#0da0d5',fontSize:'85px',padding:'10px'}} /></span>
                <p style={{margin:'0px 15px',display:'flex',flexDirection:'column'}}><b className="chicky">Lorem ipsum</b><span style={{marginTop:'10px'}} >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span></p>

            </div>
            </Col>
            </Row>
        </Container>
        </>
    )
}
export default Lorem