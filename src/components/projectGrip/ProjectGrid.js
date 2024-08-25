import React, { useEffect } from 'react';
import './projectGrid.css';

import LinkLogo from '../../img/linkLogo.svg';

function ProjectGrid({ projectList }) {
	useEffect(() => {
		const projects = document.querySelectorAll('.project');

		projects.forEach((project) => {
			project.addEventListener('mouseover', () => {
				projects.forEach((p) => {
					if (p !== project) {
						p.classList.add('dimmed');
					} else {
						p.classList.add('highlighted');
					}
				});
			});

			project.addEventListener('mouseout', () => {
				projects.forEach((p) => {
					p.classList.remove('dimmed', 'highlighted');
				});
			});
		});
	}, []);

	return (
		<div id="projectGrid">
			{projectList?.map((project, index) => (
				<div key={index} className="project" style={{ backgroundImage: `url(${project?.photo})` }}>
					<div className="projectContent">
						<div className="projectTitle">{project?.name}</div>
						<img src={LinkLogo} height="20px" alt="" />
					</div>
				</div>
			))}
		</div>
	);
}
export default ProjectGrid;
