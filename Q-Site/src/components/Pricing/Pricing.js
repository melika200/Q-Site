import { Button, Col, Container, Row } from "react-bootstrap"
import './Pricing.css'
import { FaDollarSign } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

function Pricing(){
    const Prices=[
        {
            id:1,
            header:'Free Plan',
            text:'Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater',
            money:'0',
            month:'/month',
            btn:'Start free trial',
            span:'No credit card required',
            a:'Quam adipiscing vitae proin',
            b:'Nec feugiat nisl pretium',
            c:'Nulla at volutpat diam uteera',
            no:'Pharetra massa massa ultricies',
            noo:'Massa ultricies mi quis hendrerit',
            nooo:'Voluptate id voluptas qui sed aperiam rerum',
            noooo:'Iure nihil dolores recusandae odit voluptatibus'
        }]
        const PricesVasat=[
            
            {
                id:2,
                famouse:'popular',
                header:'Bussiness Plan',
                text:'Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater',
                money:'29',
                month:'/month',
                btn:'Start free trial',
                span:'No credit card required',
                a:'Quam adipiscing vitae proin',
                b:'Nec feugiat nisl pretium',
                c:'Nulla at volutpat diam uteera',
                d:'Pharetra massa massa ultricies',
                e:'Massa ultricies mi quis hendrerit',
                f:'Voluptate id voluptas qui sed aperiam rerum',
                noinclude:'Iure nihil dolores recusandae odit voluptatibus'
            }
        ]
         const PricesAkhar=[
                
            {
                id:3,
                header:'Develope Plan',
                text:'Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater',
                money:'49',
                month:'/month',
                btn:'Start free trial',
                span:'No credit card required',
                a:'Quam adipiscing vitae proin',
                b:'Nec feugiat nisl pretium',
                c:'Nulla at volutpat diam uteera',
                d:'Pharetra massa massa ultricies',
                e:'Massa ultricies mi quis hendrerit',
                f:'Voluptate id voluptas qui sed aperiam rerum',
                g:'Iure nihil dolores recusandae odit voluptatibus'
            }
         ]
     
     

    
    return(
        <>
        <Container fluid style={{backgroundColor:'#fff'}}>
            <Row>
            <h5 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="headerPricing">Pricing</h5>
            <span style={{textAlign:'center',padding:'15px 0px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</span>
                     
                     <Row style={{paddingTop:'5%',width:'80%',margin:'auto',paddingBottom:'30px'}}>
                           
                     <Col style={{backgroundColor:'#d1ebf329',borderRadius:'20px',padding:'35px'}}>
                
                {

                     Prices.map((price) => (
                        <Col style={{marginTop:'30px'}}>
                      
                      <h6 style={{fontSize:'21px'}}> {price.header} </h6>
                      <span style={{fontSize:'14px',color:'#a8a8a8'}}> {price.text} </span>

                      <div style={{display:'flex',flexDirection:'row'}}>
                      <p style={{fontSize:'28px',color:'#388da8'}}><FaDollarSign /></p>
                        <span > <b style={{color:'#388da8',fontSize:'55px'}}> {price.money} </b></span>
                        <span style={{color:'#a8a8a8',marginTop:'46px'}}> {price.month} </span>
                      </div>
                       
                       <div style={{textAlign:'center',display:'flex',flexDirection:'column',paddingBottom:'19px'}}>
                        <Button style={{all:'unset',backgroundColor:'black',borderRadius:'10px',color:'#fff',padding:'10px',letterSpacing:'1.5px'}}> {price.btn} </Button>
                        <h6 style={{paddingTop:'10px',fontSize:'13px'}}> {price.span} </h6>
                       </div>

                        <div>

                        <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.a} </p>
                        <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.b} </p>
                        <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.c} </p>
                        <p style={{color:'#a8a8a8',fontSize:'15px',textDecoration:'line-through'}}><TiDeleteOutline style={{marginRight:'1px',fontSize:'30px'}}/>{price.no} </p>
                        <p style={{color:'#a8a8a8',fontSize:'15px',textDecoration:'line-through'}}><TiDeleteOutline style={{marginRight:'1px',fontSize:'30px'}}/>{price.noo} </p>
                        <p style={{color:'#a8a8a8',fontSize:'15px',textDecoration:'line-through'}}><TiDeleteOutline style={{marginRight:'1px',fontSize:'30px'}}/>{price.nooo} </p>
                        <p style={{color:'#a8a8a8',fontSize:'15px',textDecoration:'line-through'}}><TiDeleteOutline style={{marginRight:'1px',fontSize:'30px'}}/>{price.noooo} </p>

                        </div>


                        </Col>
                     ))

                }
                
                
                         </Col>

                         
                         <Col style={{backgroundColor:'#d1ebf329',borderRadius:'20px',padding:'35px',margin:'0px 12px'}}>
                         
                        {

                             PricesVasat.map((price) => (
                               <Col>
                              <Button style={{all:'unset',backgroundColor:'#388da8',color:'#fff',borderRadius:'10px',padding:'8px 13px',fontSize:'13px',float:'right'}}> {price.famouse} </Button>
                              <h3 style={{clear:'right',fontSize:'21px'}}> {price.header} </h3>
                              <span style={{fontSize:'14px',color:'#a8a8a8'}}> {price.text} </span>

                                        
                               <div style={{display:'flex',flexDirection:'row'}}>
                               <p style={{fontSize:'28px',color:'#388da8'}}><FaDollarSign /></p>
                                 <span > <b style={{color:'#388da8',fontSize:'50px'}}> {price.money} </b></span>
                                 <span style={{color:'#a8a8a8',marginTop:'46px'}}> {price.month} </span>
                               </div>
  
                               <div style={{textAlign:'center',display:'flex',flexDirection:'column',paddingBottom:'19px'}}>
                        <Button style={{all:'unset',backgroundColor:'#388da8',borderRadius:'10px',color:'#fff',padding:'10px',letterSpacing:'1.5px'}}> {price.btn} </Button>
                        <h6 style={{paddingTop:'10px',fontSize:'13px',paddingBottom:'3px'}}> {price.span} </h6>
                       </div>

                        

                                <div>

                                <p style={{color:'#8a8787'}}> <FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.a} </p>
                                <p style={{color:'#8a8787'}}> <FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.b} </p>
                                <p style={{color:'#8a8787'}}> <FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.c} </p>
                                <p style={{color:'#8a8787'}}> <FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.d} </p>
                                <p style={{color:'#8a8787'}}> <FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.e} </p>
                                <p style={{color:'#8a8787'}}> <FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.f} </p>
                                <p style={{color:'#a8a8a8',fontSize:'15px',textDecoration:'line-through'}}><TiDeleteOutline style={{marginRight:'1px',fontSize:'30px'}}/>  {price.noinclude} </p>
                                </div>


                               </Col>
))

}
                        
                         
                         </Col>

                        
                        <Col style={{backgroundColor:'#d1ebf329',borderRadius:'20px',padding:'35px'}}>
                         {

                                          PricesAkhar.map((price) => (
                                             <Col style={{marginTop:'30px'}}>
 
                                           <h3 style={{fontSize:'21px'}}> {price.header} </h3>
                                           <span style={{fontSize:'14px',color:'#a8a8a8'}}> {price.text} </span>

                                           <div style={{display:'flex',flexDirection:'row'}}>
                      <p style={{fontSize:'28px',color:'#388da8'}}><FaDollarSign /></p>
                        <span > <b style={{color:'#388da8',fontSize:'55px'}}> {price.money} </b></span>
                        <span style={{color:'#a8a8a8',marginTop:'46px'}}> {price.month} </span>
                      </div>
  
                      <div style={{textAlign:'center',display:'flex',flexDirection:'column',paddingBottom:'19px'}}>
                        <Button style={{all:'unset',backgroundColor:'black',borderRadius:'10px',color:'#fff',padding:'10px',letterSpacing:'1.5px'}}> {price.btn} </Button>
                        <h6 style={{paddingTop:'10px',fontSize:'13px'}}> {price.span} </h6>
                       </div>

                                             <div>

                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.a} </p>
                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.b} </p>
                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.c} </p>
                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.d} </p>
                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.e} </p>
                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} /> {price.f} </p>
                                             <p style={{color:'#8a8787'}}><FaCheck style={{paddingRight:'8px',fontSize:'22px',color:'#059652'}} />  {price.g} </p>
                                            
                                             </div>


                                             </Col>
                                          ))

                                          }
                         
                        
                        </Col>
                     </Row>


            </Row>
        </Container>
        </>
    )
}
export default Pricing