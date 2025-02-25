import React, { Fragment } from "react";
import { Grid, Typography, LinearProgress } from "@mui/material";

import "./styles/skills.css";

const Skills = () => {
	const frontend = [
		{ name: "React Js", level: 95 },
		{ name: "Next Js", level: 90 },
		{ name: "Angular Js", level: 50 },
		{ name: "JavaScript", level: 90 },
		{ name: "Redux", level: 90 },
		{ name: "Tailwind CSS", level: 95 },
		{ name: "MUI", level: 95 },
		{ name: "Bootstrap", level: 95 },
		{ name: "Typescript", level: 65 },
		{ name: "HTML/CSS", level: 95 },
	];

	const backend = [
		{ name: "Node Js", level: 40 },
		{ name: "MySQL", level: 40 },
	];

	const serverless = [
		{ name: "S3", level: 40 },
		{ name: "Firebase", level: 60 },
	];

	const tools = [
		{ name: "GitHub", level: 90 },
		{ name: "Vercel", level: 70 },
		{ name: "Jira", level: 85 },
		{ name: "Trello", level: 85 },
		{ name: "ClickUp", level: 95 },
		{ name: "Figma", level: 75 },
		{ name: "Builder.io", level: 85 },
	];

	return (
		<Fragment>
			<div>
				<h3>Frontend:</h3>
				<Grid container spacing={2}>
					{frontend.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>

			{/* <div style={{ marginTop: "40px" }}>
				<h3>Backend:</h3>
				<Grid container spacing={2}>
					{backend.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div> */}

			{/* <div style={{ marginTop: "40px" }}>
				<h3>Serverless:</h3>
				<Grid container spacing={2}>
					{serverless.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div> */}

			<div style={{ marginTop: "40px" }}>
				<h3>Tools:</h3>
				<Grid container spacing={2}>
					{tools.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</Fragment>
	);
};

export default Skills;
