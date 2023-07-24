import { generateId } from '../content/projects.js';

const experienceData = [
	{
		id: generateId(),
		elemId: 'DallolTech-content',
		company: 'DallolTech',
		companyLogoUrl: '/images/dalloltech_logo.png',
		role: 'Intern, Mobile App Development',
		date: 'December 2023 - Now (internship)',
		roles: [
			'Developed separate mobile applications for drivers and riders/passengers using Flutter framework.',
			'Designed and implemented features specific to each app, including driver tracking, route optimization, and passenger booking.',
			'Integrated user authentication, real-time notifications, and payment processing functionalities into both apps.',
			'Collaborated with a team of developers and designers to ensure consistent user experience and seamless app integration.',
			'Created a landing page to promote key features of the delivery app, optimizing user experience and engagement.',
			'Acquired hands-on experience in Flutter, Dart programming language, mobile app development best practices, and version control systems.',
			
		
		],
		tech: [ 'Flutter', 'Firebase', 'React', 'Figma', 'Google Maps API', 'Git'  ]
	},
	/* {
		id: generateId(),
		elemId: 'codeerschool-content',
		company: 'Hét Codeerbedrijf',
		companyLogoUrl: '/images/codeerbedrijf_logo.jpg',
		role: 'Developer',
		date: 'October 2020 - February 2022',
		roles: [
			'Create front-end and functionality of several different projects based on designs provided (Android & web).',
			'Creating custom fullstack web applications.',
			'IT support, bug fixing and creating Wordpress websites.'
		],
		tech: [ 'Java', 'React', 'PHP', 'Wordpress', 'HTML/CSS', 'Javascript', 'SQL', 'Next.js' ]
	}, */
	{
		id: generateId(),
		elemId: 'tsb-content',
		company: 'The Student Broker',
		companyLogoUrl: '/images/tsb-logo.png',
		role: 'Front-end Developer',
		date: 'April 2020 - March 2021',
		roles: [
			'Built front-end of the main website where students can sign up and find all information and landlords can get in contact.',
			'Built admin panel where employees can view all necessary information concerning all the data.',
			'Implemented analytics tools such as Google Analytics and Hotjar',
			'Maintaining and improving website based on testing and user feedback by building new features.'
		],
		tech: [ 'HTML/CSS', 'Javascript', 'Javascript', 'jQuery', 'Bootstrap', 'PHP' ]
	},
	{
		id: generateId(),
		elemId: 'codingclub-content',
		company: 'codingclub',
		companyLogoUrl: '/images/gladwellacademy_logo.jpg',
		role: 'Coding Club Founder & Mentor - Developer',
		date: 'January 2018 - February 2019',
		roles: [
			'Founded and organized a coding club, creating a platform for students to explore their coding passion.',
			'Organized coding events, workshops, and competitions to foster a vibrant coding community.',
			'Utilized various technologies to contribute as a developer and mentor club members.',
			'Cultivated leadership, teamwork, and a passion for coding through this experience.',
		],
		tech: [ 'Wordpress', 'HTML/CSS', 'Javascript', 'Python' ]
	}
];

const displayEducationDOM = () => {
	const contentExperience = document.getElementById('content-experience');

	experienceData.map((item, index) => {
		contentExperience.innerHTML += `
            <div id="${item.elemId}" class="tabcontent-vertical">
                <h4 class="job-title">${item.role}<img loading="lazy" src="${item.companyLogoUrl}" class="img-company-logo"></h4>
                <p class="job-date">${item.date}</p>
                <ul class="job-activities">
                    ${populateList(item, 'activities')}
                </ul>
                <h6 class="job-tech">Used technologies:</h6>
                <ul class="horizontal-list">
                    ${populateList(item, 'tech')}
                </ul>
            </div>
        `;

		// If property item default open is true then display that tab, the rest is hidden at first
		if (index == 0) {
			document.getElementById(item.elemId).style.display = 'block';
		}
	});
};

const populateList = (item, type) => {
	let listElement = '';
	switch (type) {
		case 'activities':
			for (let i = 0; i < item.roles.length; i++) {
				listElement += `<li><span>${item.roles[i]}</span></li>`;
			}
			return listElement;
		case 'tech':
			for (let i = 0; i < item.tech.length; i++) {
				listElement += `<li>${item.tech[i]}</li>`;
			}
			return listElement;
		default:
			break;
	}
};

export { displayEducationDOM };
