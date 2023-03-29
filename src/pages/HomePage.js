import EventCarousel from "../components/EventCarousel";
import {Col, Row} from "react-bootstrap";

export default function HomePage() {
    return(
        <div>
            <section className="section">
                <h1>Virtual Science Fair</h1>
                <p>Description of virtual science fair.</p>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </section>
            <section className="section">
                <Row>
                    <Col>
                        <div>
                            <h2>Mission</h2>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Vision</h2>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="section" >
                <h2>Our Events</h2>
                <div style={{height:500,paddingTop:50}}>
                    <EventCarousel/>
                </div>
            </section>
            <section className='section'>
                <h2>Our Past Collaborators</h2>
                <p>Logos</p>
            </section>
        </div>
    )
}