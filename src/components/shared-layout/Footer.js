import {Col, Container,  Row} from "react-bootstrap";
import vsfLogo from '../../assets/logo/VSF Logo Transparent Full.svg'
const Footer = () => {
    return(
        <Container style={{fontSize:14}}>
            <Row>
                <Col sm>
                    <img
                        src={vsfLogo}
                        alt='VSF Logo Full'
                        width="180"
                    />
                    <p>All rights reserved.</p>
                    <p>Designed and built by Izzat Hafizuddin.</p>
                </Col>
                <Col sm>
                    <h4><b>About UMSF</b></h4>
                    <p><a
                        href='/About'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">About
                    </a></p>
                    <p><a
                        href='/Objectives'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Objectives
                    </a></p>
                    <p><a
                        href='/History'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">History
                    </a></p>
                    <p><a
                        href='/Collaborators'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Collaborators
                    </a></p>
                </Col>
                <Col sm>
                    <h4><b>Events</b></h4>
                    <p style={{color:"gray"}}><b>2023 Events</b></p>
                    <p>
                        <a
                            href='/STEMCompetitions'
                            target='_blank'
                            rel='noreferrer'
                            className="FooterLink">STEM Competitions
                        </a>
                    </p>
                    <p>
                        <a
                            href='/STEMCareerFairExhibition'
                            target='_blank'
                            rel='noreferrer'
                            className="FooterLink">STEM Career Fair & Exhibition
                        </a>
                    </p>
                    <p style={{color:"gray"}}><b>Previous Events</b></p>
                    <p>
                        <a
                            href='/EventArchive'
                            target='_blank'
                            rel='noreferrer'
                            className="FooterLink">Events Archive
                        </a>
                    </p>
                </Col>
                <Col sm>
                    <h4><b>Connect With Us</b></h4>
                    <p><a
                        href='https://www.facebook.com/UMScienceFair/'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Facebook</a></p>
                    <p><a
                        href='https://www.instagram.com/umsciencefair/'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Instagram</a></p>
                    <p><a
                        href='https://twitter.com/UMScienceFair'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Twitter</a></p>
                    <p><a
                        href='#Telegram'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Telegram</a></p>
                    <p><a
                        href='https://www.linkedin.com/in/virtual-science-fair-um-ba4353222/?originalSubdomain=my'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">LinkedIn</a></p>
                    <p><a
                        href='mailto:info.virtualsciencefair@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                        className="FooterLink">Email</a></p>
                </Col>
                <Col sm>
                    <h4><b>Address</b></h4>
                    <iframe
                        title="UM Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8977884763312!2d101.6514979932391!3d3.121728654190021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb47024217187%3A0x1e85ebc65d47d641!2sUniversiti%20Malaya!5e0!3m2!1sen!2smy!4v1680000175022!5m2!1sen!2smy"
                        width="270"
                        height="150"
                        style={{border:0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p>Universiti Malaya,</p>
                    <p>14, Jalan Prof Diraja Ungku Aziz,</p>
                    <p>50603 Kuala Lumpur, KL, Malaysia</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;