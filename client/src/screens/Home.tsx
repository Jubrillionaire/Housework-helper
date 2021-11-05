import '../styles/Home.css'
import mechanic from '../images/png1.png'
import { Button, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {


    return (
        <div className='home-container'>
            <div className="section-one">

                <ScrollAnimation duration={2} className='section-one-first' animateIn="bounceInLeft">
                    <h1>
                        Hire a worker in
                        <br /> just a second!

                    </h1>
                    <Link className='btn' to='#section-two' >Learn More</Link>
                </ScrollAnimation>

                <div className="section-one-second">
                    <img src={mechanic} alt='mechanic' />
                </div>

            </div>

            <div className="section-two" id="section-two">
                <h2>
                    Our Services Will Help <br />
                    Improve Your Daily lives
                </h2>

                <p className='sub-p'>
                    Our experts are able to find new growth opportunities in your business
                </p>

                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Escrow Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Escrow Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Escrow Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Escrow Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Escrow Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Escrow Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                </div>
            </div>

        </div>
    )
}

export default Home
