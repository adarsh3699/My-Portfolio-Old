import React, { useEffect, useState, useCallback } from 'react';

// import Modal from '../modal/Modal';
import { Modal } from 'react-responsive-modal';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'react-responsive-modal/styles.css';
import './projectGrid.css';

import LinkLogo from '../../img/linkLogo.svg';

function ProjectGrid({ projectList }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState({});
	console.log(modalData);

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

	const handleModal = useCallback(
		(item) => {
			if (!isModalOpen) {
				setModalData(item);
			} else {
				setModalData({});
			}
			setIsModalOpen((prev) => !prev);
		},
		[isModalOpen]
	);

	return (
		<>
			<div id="projectGrid">
				{projectList?.map((project, index) => (
					<div
						key={index}
						className="project"
						onClick={() => handleModal(project)}
						style={{ backgroundImage: `url(${project?.img?.[0]})` }}
					>
						<div className="projectContent">
							<div className="projectTitle">{project?.name}</div>
							<img src={LinkLogo} height="20px" alt="" />
						</div>
					</div>
				))}
			</div>
			{isModalOpen && (
				<RenderModal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					handleModal={handleModal}
					modalData={modalData}
				/>
			)}
		</>
	);
}

function RenderModal({ isModalOpen, setIsModalOpen, handleModal, modalData }) {
	return (
		<Modal
			open={isModalOpen}
			onClose={() => setIsModalOpen()}
			classNames="modal"
			handleModal={handleModal}
			isModalOpen={isModalOpen}
			modalData={modalData}
			center
		>
			<div className="modal-bar">
				<span>{modalData?.name?.toUpperCase()}</span>
				<span className="closeBtn" onClick={handleModal}>
					&times;
				</span>
			</div>
			<div className="modal-content">
				<Slide transitionDuration="700" duration="2000" indicators={true} autoplay={true} easing="ease">
					{modalData?.img?.map((each, index) => (
						<div key={index} className="each-slide-effect">
							<div className="sliderImg" style={{ backgroundImage: `url(${each})` }}></div>
						</div>
					))}
				</Slide>
				<h1 className="title">{modalData.name}</h1>
				{modalData?.description?.map((each, index) => (
					<div key={index} className="modalDescription aboutPoints">
						{each}
					</div>
				))}
			</div>
		</Modal>
	);
}

export default ProjectGrid;
