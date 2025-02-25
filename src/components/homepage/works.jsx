import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import QisstPayLogo from "../../assets/images/qisstpay_logo.png";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://circle.ooo/logo.svg"
								alt="Circle.ooo"
								className="work-image"
								style={{
									background: "#000",
								}}
							/>
							<div className="work-details">
								<div className="work-title">
									Circle.ooo (Freelance)
								</div>
								<div className="work-date">
									<div className="work-subtitle">
										Front-end Engineer
									</div>
									<div className="work-duration">
										Aug 2023 - Present
									</div>
								</div>
							</div>
						</div>

						<div className="work">
							<img
								src="./harvv.jpg"
								alt="Harvv"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">
									Harvv Financing
								</div>
								<div className="work-date">
									<div className="work-subtitle">
										Front-end Engineer (Remote)
									</div>
									<div className="work-duration">
										Aug 2022 - Present
									</div>
								</div>
							</div>
						</div>

						<div className="work">
							<img
								src="./codeaza.png"
								alt="Codeaza Technologies"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">
									Codeaza Technologies
								</div>
								<div className="work-date">
									<div className="work-subtitle">
										Front-end Engineer
									</div>
									<div className="work-duration">
										Nov 2021 - Aug 2022
									</div>
								</div>
							</div>
						</div>
						<div className="work">
							<img
								src="https://ora-tech.com/assets/img/logo_home.png"
								alt="Ora-Tech Systems"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">
									Ora-Tech Systems
								</div>
								<div className="work-date">
									<div className="work-subtitle">
										Software Engineer (Internship)
									</div>
									<div className="work-duration">
										July 2019 - Sep 2019
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
