import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './styles.css';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import LogoTaverna from '/src/assets/img/taverna.png';
import LogoGoodTaste from '/src/assets/img/good.png';
import LogoMeltyWay from '/src/assets/img/melty.png';
import LogoSbarro from '/src/assets/img/sbarro.png'; 
import LogoApin from '/src/assets/img/apnia.png';
 import GroupIcon from '/src/assets/img/group.svg'; 
 import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router';
import { appRoutes } from '../../../../routes';

function ClientLogos() {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate(appRoutes.restaurantHome);
  };
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px'
        }
      }
    ]
  };

  const logos = [
    { src: LogoTaverna, alt: 'Taverna' },
    { src: LogoMeltyWay, alt: 'Melty Way' },
    { src: LogoGoodTaste, alt: 'Good Taste' },
    { src: LogoSbarro, alt: 'Sbarro' },
    { src: LogoApin, alt: 'Apin' },
    { src: LogoTaverna, alt: 'Taverna' },
    { src: LogoMeltyWay, alt: 'Melty Way' },
    { src: LogoGoodTaste, alt: 'Good Taste' },
    { src: LogoSbarro, alt: 'Sbarro' },
    { src: LogoApin, alt: 'Apin' },
  ];
  
  return (
    <Container className="my-5">
      <Row>
        <Col>

<h2 className="text-center mb-4">
    restaurants already trust in 
    <img 
        src={GroupIcon} 
        alt="Group of companies icon" 
        className='group-termbi'
    />
</h2>
          <div className="position-relative mx-5">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index} className="px-3">
                  <Card className="border-0" >
                    <Card.Body className="d-flex align-items-center justify-content-center">
                       <Image 
                         src={logo.src} 
                         roundedCircle 
                         fluid
                         className="logo-image"
                         onClick={handleLogoClick}
                         style={{ cursor: 'pointer' }}
                       />
                     
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ClientLogos;