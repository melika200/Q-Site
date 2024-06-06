import { Button, Col, Container, Row } from "react-bootstrap"

function Provident(){
    return(
        <>
             <Container>
            <Row style={{display:'flex',flexDirection:'row',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
                <Col className="col-xl-6">
                <img style={{width:'650px',height:'100%',marginRight:'3%'}} src="https://images.ctfassets.net/dkgr2j75jrom/6PwiPez0PtGyr5KGClHxNO/fa48d6745969ea63c19147ec600a9fb5/Group_5068.png?w=1405&h=1349&q=50&fm=png&bg=transparent" alt="MobileUser" />
                </Col>
                <Col className="col-xl-4" style={{backgroundColor:'#d8f0f878',borderRadius:'20px'}}>
                <div className="" style={{display:'flex',flexDirection:'column',padding:'20px',boxsizing:'border-box',width:'95%'}}>
                    <h3 style={{fontSize:'18px',fontWeight:'bold',margin:'15px 0px'}}>Corporis temporibus maiores provident</h3>
                    <span style={{color:'#a4a4a4',margin:'10px 0px',fontSize:'16px',paddingRight:'15px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</span>
                    <Button style={{backgroundColor:'#388da8',color:'#fff',borderRadius:'5px',border:'1px solid #388da8',margin:'15px 0px',width:'110px',fontSize:'13px'}}>Learn More</Button>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Provident