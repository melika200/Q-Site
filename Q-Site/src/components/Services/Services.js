import { Col, Container, Row } from "react-bootstrap"
import './Services.css';
import { BsActivity } from "react-icons/bs";
import { BsEasel } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsChatSquareText } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
function Services(){
    const Left=[
        {
            id:1,
            icon:<BsActivity  style={{backgroundColor:'rgb(13 202 240 / 10%)',color:'#388da8',fontSize:'70px',border:'2px solid #388da8',
            padding:'8px',borderRadius:'10px'}}/>,
            header:'Nesciunt Mete',
            span:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            button:'Learn more'
        },
        {
            id:2,
            icon:<BsEasel style={{backgroundColor:'#20c99726',color:'#20c997',fontSize:'70px',border:'2px solid #20c997',padding:'8px',borderRadius:'10px'}} />,
            header:'LeDo Markt',
            span:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            button:'Learn more'
        },
        {
            id:3,
            icon:<SlCalender
            style={{backgroundColor:'#6610f224',color:'#6610f2',fontSize:'70px',border:'2px solid #6610f2', padding:'8px',borderRadius:'10px'}}/>,
            header:'Velet deporate',
            span:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            button:'Learn more'
        }
    ]
    const Right=[
        {
            id:1,
            icon:<BsBroadcast
            style={{backgroundColor:'#fd7e142b',color:'#fd7e14',fontSize:'70px',border:'2px solid #fd7e14', padding:'8px',borderRadius:'10px'}}/>,
            header:'Eosel Commide',
            span:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            button:'Learn more'
        },
        {
            id:2,
            icon:<BsBoundingBoxCircles
            style={{backgroundColor:'#df152936',color:'#df1529',fontSize:'70px',border:'2px solid #df1529', padding:'8px',borderRadius:'10px'}}/>,
            header:'Asperoate bundeling',
            span:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            button:'Learn more'
        },
        {
            id:3,
            icon:<BsChatSquareText
            style={{backgroundColor:'#f3268c30',color:'#f3268c',fontSize:'70px',border:'2px solid #f3268c', padding:'8px',borderRadius:'10px'}}/>,
            header:'Dolori moometai',
            span:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            button:'Learn more'
        }
    ]
    return(
        <>
        <Container fluid style={{backgroundColor:'#d1ebf329',paddingBottom:'30px'}}>
            <div >
                <h1 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="header-service">Services</h1>
                <span  style={{display:'block',margin:'auto',textAlign:'center',color:'#666',padding:'25px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</span>
            </div>
            <Row style={{margin:'0px 30px'}}>
                <Col>
                {
                    Left.map(item=>(
                        <div style={
                            {boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
                            display:'flex',
                            flexDirection:'row',
                            padding:'33px',
                            border:'2px solid #aab0b629',
                            borderRadius:'20px',
                            margin:'25px 0px',
                            backgroundColor:'#fff'
                            }
                            } >
                            <span>
                                {item.icon}
                                
                                </span>
                             <div style={{
                                display:'flex',
                                flexDirection:'column',
                                marginLeft:'25px'
                             }} >
                              <h6 style={{fontSize:'20px',color:'#3e50558a'}}>{item.header}</h6>
                              <span style={{fontSize:'14px',color:'#3e505563',padding:'15px 0px'}}>{item.span}</span>
                              <Link style={{
                                all:'unset',
                                color:'#388da8'
                              }}>{item.button}<FaArrowRight  style={{marginLeft:'5px'}}/></Link>
                             </div>
                        </div>
                    ))
                }
                </Col>
                <Col>
                
                {
                    Right.map(items=>(
                        <div style={
                            {boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
                            display:'flex',
                            flexDirection:'row',
                            padding:'33px',
                            border:'2px solid #aab0b629',
                            borderRadius:'20px',
                            margin:'25px 0px',
                            backgroundColor:'#fff'
                            }
                            } >
                            <span>
                                {items.icon}
                                
                                </span>
                             <div style={{
                                display:'flex',
                                flexDirection:'column',
                                marginLeft:'25px'
                             }} >
                              <h6 style={{fontSize:'20px',color:'#3e50558a'}}>{items.header}</h6>
                              <span style={{fontSize:'14px',color:'#3e505563',padding:'15px 0px'}}>{items.span}</span>
                              <Link style={{
                                all:'unset',
                                color:'#388da8'
                              }}>{items.button}<FaArrowRight  style={{marginLeft:'5px'}}/></Link>
                             </div>
                        </div>
                    ))
                }
                
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Services