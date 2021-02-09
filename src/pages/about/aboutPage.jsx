import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Dhana from '../../assets/img/dhana.jpg'
import Yopy from '../../assets/img/yopy.png'
import Teddy from '../../assets/img/teddy.jpg'
import Sugianto from '../../assets/img/sugianto.jpg'
import Denisa from '../../assets/img/denisa.jpg'
import Elia from '../../assets/img/elia.jpg'
import Farida from '../../assets/img/farida.jpg'
import Yogo from '../../assets/img/yogo.jpg'
import Maszul from '../../assets/img/maszul.jpg'
import './style.css'

const AboutPage = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <h1 className="about-title">MEET OUR TEAM!</h1>
            <br />
            <h4 className="about-subtitle">We are all very different. We were born in different cities, at different times, we love<br />different music, food, movies. But we have something that unites us all. It is<br />our product! We are its heart. We are not just a team, we are a family.</h4>
            <br />
            <br />
            <br />
            <br />
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="user col-md-8">
                            <img src={Maszul} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Zulfikar I. Ramadhan</h4>
                            <h5>Product Owner</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Dhana} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Rahardyan Nandiwardhana</h4>
                            <h5>Scrum Master</h5>
                            <h5>React Native</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Yopy} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Yopy Tri Buana</h4>
                            <h5>Stack Lead</h5>
                            <h5>React Native</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Teddy} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Teddy Ferdian Abrar Amrullah</h4>
                            <h5>Stack Lead</h5>
                            <h5>Front End</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Sugianto} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Sugianto Rusli</h4>
                            <h5>Front End</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Denisa} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Putri Ayu Denisa Pramastuty</h4>
                            <h5>Front End</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Elia} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Elia Ramadhini</h4>
                            <h5>Stack Lead</h5>
                            <h5>Back End</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Farida} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Farida Purnama Sari</h4>
                            <h5>Back End</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="user col-md-8">
                            <img src={Yogo} class="dev-profile" alt="..." />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Yogo Adi</h4>
                            <h5>Back End</h5>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default AboutPage