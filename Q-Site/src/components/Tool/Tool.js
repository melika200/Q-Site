import { Col, Container, Row } from "react-bootstrap";
import { BsEasel } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
function Tool(){
    const Equipment=[
        {
            id:1,
            icon:<BsEasel style={{fontSize:'50px',color:'#388da8'}} />,
            header:'Lorem Ipsum',
            text:'Voluptatum deleniti atque corrupti quos dolores et quas molestias'
        },
        {
            id:2,
            icon:<BsPatchCheck style={{fontSize:'50px',color:'#388da8'}} />,
            header:'Nemo Enim',
            text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        },
        {
            id:3,
            icon:<IoSunnyOutline style={{fontSize:'50px',color:'#388da8'}} />,
            header:'Dine Pad',
            text:'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit'
        },
        {
            id:4,
            icon:<IoSunnyOutline style={{fontSize:'50px',color:'#388da8'}} />,
            header:'Tride clov',
            text:'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit'
        }

    ]
    return(
        <>
        <Container fluid style={{backgroundColor:'#fff'}}>
            <Row style={{paddingTop:'7%',paddingBottom:'8%'}}>
                <Col style={{marginLeft:'11%'}}>
                <h3 style={{fontSize:'24px'}}>Enim quis est voluptatibus aliquid consequatur</h3>
                <p style={{fontSize:'14px' ,marginTop:'16px',marginBottom:'20px'}}>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {
                      Equipment.map((toolItem) => (
                        <div
                        className="col-lg-6"
                        style={{display:'flex',flexDirection:'row',marginTop:'18px'}}
                         key={toolItem.id}
                         >

                           {toolItem.icon}

                           <div style={{display:'flex',flexDirection:'column' ,marginLeft:'8px',marginTop:'9px',marginRight:'10px'}}>

                           <h3 style={{fontSize:'17px'}}>{toolItem.header}</h3>

                            <span style={{fontSize:'12px'}}>{toolItem.text}</span>

                           </div>

                           </div>
                        
                    ))
                 }
                </div>
                </Col>
                <Col >

                <img  src="https://cdn.ultramobile.com/wp-content/themes/ultramobile/v3/assets/images/wifiCallingLp/wifiCallingHero.png"/>
                
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Tool