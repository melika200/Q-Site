import { Accordion, Col, Container, Row } from "react-bootstrap"
import './According.css'
function According (){
    return(
        <>
        <Container fluid style={{backgroundColor:'#fff'}}>
        <h5 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="headerAccording">Frequently Asked Questions</h5>
         <Row style={{padding:'55px 0px'}}>
         <Accordion defaultActiveKey="0" flush>
        <Container>
        <Accordion.Item eventKey="0" style={{border:'1px solid #ccc',padding:'6px',margin:'18px 0px',borderRadius:'3px'}}>
        <Accordion.Header className="AccoHeader">Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{border:'1px solid #ccc',padding:'6px',margin:'18px 0px',borderRadius:'3px'}}>
        <Accordion.Header>Feugiat scelerisque varius morbi enim nunc faucibus?</Accordion.Header>
        <Accordion.Body>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{border:'1px solid #ccc',padding:'6px',margin:'18px 0px',borderRadius:'3px'}}>
        <Accordion.Header className="AccoHeader">Dolor sit amet consectetur adipiscing elit pellentesque?</Accordion.Header>
        <Accordion.Body>
        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{border:'1px solid #ccc',padding:'6px',margin:'18px 0px',borderRadius:'3px'}}>
        <Accordion.Header className="AccoHeader">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</Accordion.Header>
        <Accordion.Body>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" style={{border:'1px solid #ccc',padding:'6px',margin:'18px 0px',borderRadius:'3px'}}>
        <Accordion.Header className="AccoHeader">Tempus quam pellentesque nec nam aliquam sem et tortor?</Accordion.Header>
        <Accordion.Body>
        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" style={{border:'1px solid #ccc',padding:'6px',margin:'18px 0px',borderRadius:'3px'}}>
        <Accordion.Header className="AccoHeader">Perspiciatis quod quo quos nulla quo illum ullam?</Accordion.Header>
        <Accordion.Body>
        Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.
        </Accordion.Body>
      </Accordion.Item>
        </Container>
    </Accordion>
         </Row>
        </Container>
        </>
    )
}
export  default  According