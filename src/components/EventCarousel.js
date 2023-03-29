import {Carousel} from "react-bootstrap";
import CF2 from '../assets/events/Career Fair 2.0.png'
import MA from '../assets/events/Mini Activities.png'

export default function EventCarousel() {
    return(
        <Carousel variant='dark'>
            <Carousel.Item>
                <div className='d-flex justify-content-center'>
                    <img
                        className="d-md-block-middle w-70"
                        src={CF2}
                        alt="Career Fair 2.0 Slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-center'>
                    <img
                        className="d-md-block-middle w-50"
                        src={MA}
                        alt="Mini Activities Slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    )
}