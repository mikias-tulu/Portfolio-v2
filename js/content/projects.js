const CLASS_RIGHT_CONTENT = 'right-content';
const CLASS_LEFT_CONTENT = 'left-content';

export const generateId = () => {
	return Math.floor(Math.random() * Date.now());
};

// Projects data
const projects = [
	{
		id: generateId(),
		title: 'Accounting: Financial and accounting management platform',
		description:
			'A multitenant Saas where startup and smallscale companies create accounts with a desired subdomain to manage financial and accounting tasks of their company.',
		technologies: [ 'Laravel', 'HTML/CSS', 'PHP', 'Postgres', 'valet', 'Bootstrap' ],
		linkGithub: null,
		linkWebsite: 'https://accounting-miki.netlify.app/',
		img: '/images/projects/accounting_project.png',
		directionContent: CLASS_RIGHT_CONTENT
	},
	{
		id: generateId(),
		title: 'getJOBS - Freelancer Mobile Application',
		description:
			'getJOBS: Streamlined job app for freelancers. Secure platform to connect, communicate, and hire. Features: Skill-based job search, secure authentication, real-time messaging, profile management.',
		technologies: [ 'Flutter', 'Firebase Authentication', 'Firebase Cloud Firestore', 'Firebase Cloud Messaging', 'Firebase Storage' ],
		linkGithub: 'https://github.com/mikias-tulu/getJOBS-freelance-app',
		linkWebsite: 'https://github.com/mikias-tulu/getJOBS-freelance-app/releases/download/v1.0/app-release.apk',
		img: '/images/projects/getJOBS_app.png',
		directionContent: CLASS_LEFT_CONTENT
	},
	{
		id: generateId(),
		title: 'Catering-Website - Robust and Scalable Catering Solution',
		description:
			'Catering-Website is a robust and scalable catering solution built using .NET, ASP.NET, C#, and MongoDB. The website offers a comprehensive platform for catering services, enabling efficient management and seamless interactions with clients. With a user-friendly interface and reliable technologies, the Catering-Website ensures a smooth and delightful catering experience for both clients and caterers.',
		technologies: [ '.NET', 'ASP.NET', 'C#', 'MongoDB' ],
		linkGithub: 'https://github.com/mikias-tulu/Catering-Website',
		linkWebsite: 'https://github.com/mikias-tulu/Catering-Website',
		img: '/images/projects/catering.png',
		directionContent: CLASS_RIGHT_CONTENT
	},
	{
		id: generateId(),
		title: 'GEBETA - Restaurant-Review : Scalable Restaurant Review Website',
		description:
			"GEBETA - Restaurant-Review: Scalable PHP-based website for user reviews and ratings of restaurants. Smooth and maintainable experience for discovering the best dining spots.",
		technologies: [ 'JavaScript', 'jQuery', 'MySQL', 'PHP', 'HTML/CSS' ],
		linkGithub: 'https://github.com/mikias-tulu/Restaurant-Review',
		linkWebsite: 'https://github.com/mikias-tulu/Restaurant-Review',
		img: '/images/projects/gebeta.png',
		directionContent: CLASS_LEFT_CONTENT
	}
];

const displayProjectsDOM = () => {
	// Get element
	const container = document.getElementById('projects-container');

	for (var property in projects) {
		if (projects.hasOwnProperty(property)) {
			const element = projects[property];

			const columnImg = `
                <div class="col-lg-6" data-aos="zoom-in-right" data-aos-duration="1000">
                    <a href="${element.linkWebsite}" target="_blank"
                    rel="noreferrer"><img loading="lazy" src="${element.img}" alt="${element.title}" class="project-img"></a>
                </div>
            `;

			const columnContent = `
                <div class="col project-content ${element.directionContent}" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h3 class="project-title">${element.title}</h3>
                    <div class="project-card">
                        <p class="project-description">${element.description}</p>
                    </div>
                    <ul class="horizontal-list project-tech" id="project-tech-${element.id}"></ul>
                    <ul class="horizontal-list project-links">
                        <li id="link-github-${element.id}"><a href="${element.linkGithub}" target="_blank"
                                rel="noreferrer"><i class="fab fa-github"></i></a></li>
                        <li><a href="${element.linkWebsite}" target="_blank"
                                rel="noreferrer"><i class="fas fa-external-link-alt"></i></a></li>
                    </ul>
                </div>
            `;

			// Determine direction of content (lef or right) based on class of element
			if (element.directionContent == CLASS_RIGHT_CONTENT) {
				container.innerHTML += `
                    <div class="row project">
                        ${columnImg}
                        ${columnContent}
                    </div>
                `;
			} else {
				container.innerHTML += `
                <div class="row project">
                    ${columnContent}
                    ${columnImg}
                </div>
            `;
			}

			// Populate list of tech
			const techList = document.getElementById(`project-tech-${element.id}`);
			element.technologies.forEach((element) => {
				techList.innerHTML += `<li>${element}</li>`;
			});

			// Hide github icon if there is no public repo (null)
			const linkGithub = document.getElementById(`link-github-${element.id}`);
			if (element.linkGithub == null) {
				linkGithub.style.display = 'none';
			}
		}
	}
};

/** PROJECTS PAGE */
const projectsAll = [
	{
		title: 'Men Spa / Barbershop',
		description: "Male barbershop/spa that displays the shop's information about service and costs.",
		img: '../../images/projects/barbershop.jpg',
		linkWebsite: 'https://men-spa.vercel.app/'
	},
	{
		title: 'Easybank',
		description: 'Simple landing page challenge from Frontend Mentor to practice some layouts and SCSS.',
		img: '../../images/projects/easybank-landing-page.jpg',
		linkWebsite: 'https://easybank-landing-page.brunofigueiredo2k.vercel.app/'
	},
	{
		title: 'Nono Cakes',
		description: 'Wordpress website build for company called Nono Cakes.',
		img: '../../images/projects/nonocakes_website.jpg',
		linkWebsite: 'https://www.nonocakes.com/'
	}
];

const displayProjectsPage = () => {
	// Push data from home page projects to this array of all projects
	projects.map((project) => {
		projectsAll.push(project);
	});

	const row = document.getElementById('projects-row');
	// Get projects and populate DOM of all projects
	projectsAll.map((project) => {
		row.innerHTML += `
        <div class="project col-4" data-aos="zoom-in-up">
            <div class="content">
                <img loading="lazy" src="${project.img}"/>
                <div class="bottom">
                    <h2 class="title">${project.title} <a href="${project.linkWebsite}" target="_blank" rel="noreferrer">
                        <i class="fas fa-external-link-alt sm-icon"></i></a></h2>
                    <p class="description">${project.description.slice(0, 65) + '...'}</p>
                </div>
            </div>
        </div>
        `;
	});
};

export { displayProjectsDOM, displayProjectsPage };
