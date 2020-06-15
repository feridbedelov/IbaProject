import React from 'react'
import star from "../../assets/star.png";
import projects from "../../assets/projects.png";
import clock from "../../assets/clock.png";
import like from "../../assets/like.png";

function Stats() {
    return (
        <div>
            <section className="stats">
                <div className="container stats-container">
                    <div className="stat-box">
                        <img src={projects} alt="" className="statIcon" />
                        <div className="stat-details">
                            <span>548</span>
                            <span>Projects Completed</span>
                        </div>
                    </div>
                    <div className="stat-box">
                        <img src={clock} alt="" className="statIcon" />
                        <div className="stat-details">
                            <span>1465</span>
                            <span>Working Hours</span>
                        </div>
                    </div>
                    <div className="stat-box">
                        <img src={star} alt="" className="statIcon" />
                        <div className="stat-details">
                            <span>612</span>
                            <span>Positive Feedbacks</span>
                        </div>
                    </div>
                    <div className="stat-box">
                        <img src={like} alt="" className="statIcon" />
                        <div className="stat-details">
                            <span>735</span>
                            <span>Happy Clients</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats;