import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleIndicators" className={`${styles.carouselContainer} carousel slide`}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className={`carousel-item active ${styles.item}`}>
                                <img src="https://via.placeholder.com/150" className="d-block w-100" alt="..." />
                            </div>
                            <div className={`carousel-item ${styles.item}`}>
                                <img src="https://via.placeholder.com/150" className="d-block w-100" alt="..." />
                            </div>
                            <div className={`carousel-item ${styles.item}`}>
                                <img src="https://via.placeholder.com/150" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;