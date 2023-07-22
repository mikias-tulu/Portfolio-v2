let skillsData = [
	{
		frontend: [
			{
				icon: '<i class="fab fa-html5"></i>',
				tooltipText: 'HTML'
			},
			{
				icon: '<i class="fab fa-css3-alt"></i>',
				tooltipText: 'CSS'
			},
			{
				icon: '<i class="fab fa-sass"></i>',
				tooltipText: 'SCSS'
			},
			{
				icon: '<i class="fab fa-js-square"></i>',
				tooltipText: 'JavaScript'
			},
			{
				icon: '<i class="fab fa-react"></i>',
				tooltipText: 'React'
			},
			{
				icon:
					'<i class="fab fa-vuejs"></i>',
				tooltipText: 'Vue'
			},
			{
				icon:
					'<img loading="lazy" src="../../images/icons/next-js.svg" alt="next.js logo" class="icon-skill-img"/>',
				tooltipText: 'Next.js'
			},
			{
				icon:
					'<img loading="lazy" src="../../images/bootstrap-fill.svg" alt="bootstrap logo" class="icon-skill-img"/>',
				tooltipText: 'Bootstrap'
			}
		]
	},
	{
		backend: [
			{
				icon: '<i class="fab fa-php"></i>',
				tooltipText: 'PHP'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/sql.png" alt="SQL" class="icon-skill-img"/>',
				tooltipText: 'SQL'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/mysql.png" alt="MySQL" class="icon-skill-img"/>',
				tooltipText: 'MySQL'
			},
			{
				icon: '<i class="fab fa-symfony"></i>',
				tooltipText: 'Symfony'
			}
		]
	},
	{
		other: [
			{
				icon: '<i class="fab fa-wordpress"></i>',
				tooltipText: 'Wordpress'
			},
			{
				icon: '<i class="fab fa-python"></i>',
				tooltipText: 'Python'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/java.png" alt="Java" class="icon-skill-img"/>',
				tooltipText: 'Java'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/kotlin.png" alt="Kotlin" class="icon-skill-img"/>',
				tooltipText: 'Kotlin'
			},
			{
				icon: '<i class="fab fa-swift"></i>',
				tooltipText: 'Swift'
			},
			{
				icon: '<i class="fab fa-android"></i>',
				tooltipText: 'Android Studio'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/scrum.png" alt="Scrum" class="icon-skill-img"/>',
				tooltipText: 'Scrum'
			},
			{
				icon: '<i class="fab fa-git-square"></i>',
				tooltipText: 'Git'
			}
		]
	}
];

let educationData = [
	{
		year: '2019 - 2023',
		school: 'Addis Ababa University - Computer Science',
		description:
			"During my Computer Science degree at Addis Ababa University, I immersed myself in a comprehensive curriculum, gaining expertise in programming, algorithms, databases, and software development. I embraced the challenges of coursework, collaborated on team projects, and expanded my knowledge through practical experiences and internships."
	},
	{
		year: '2017 - 2019',
		school: 'Sandford International School - International Baccalaureate® (IB) Diploma',
		description:
			'During my studies, I pursued the International Baccalaureate® (IB) diploma, successfully completing 4 HL courses in Maths, Biology, ITGS, and Chemistry, with Amharic and English as SL. Additionally, I actively engaged in CAS activities and embraced the intellectual challenges of TOK.'
	}
];

const populateEducation = () => {
	const education = document.getElementById('timeline');

	for (const key in educationData) {
		if (educationData.hasOwnProperty(key)) {
			const element = educationData[key];
			education.innerHTML += `
                <div class="timeline-block timeline-block-right">
                    <div class="marker"></div>
                    <div class="timeline-content">
                        <h3>${element.year}</h3>
                        <span>${element.school}</span>
                        <p>${element.description}</p>
                    </div>
                </div>
            `;
		}
	}
};

const populateSkill = (tab, icon, tooltipText) => {
	tab.innerHTML += `
        <li>
            <div class="tooltip">${icon}
                <span class="tooltiptext">${tooltipText}</span>
            </div>
        </li>`;
};

const populateSkillTab = (array, type) => {
	const skillsFrontend = document.getElementById('skills-li-frontend');
	const skillsBackend = document.getElementById('skills-li-backend');
	const skillsOther = document.getElementById('skills-li-other');

	let i;
	for (i = 0; i < array.length; i++) {
		switch (type) {
			case 'FRONTEND':
				populateSkill(skillsFrontend, array[i].icon, array[i].tooltipText);
				break;
			case 'BACKEND':
				populateSkill(skillsBackend, array[i].icon, array[i].tooltipText);
				break;
			case 'OTHER':
				populateSkill(skillsOther, array[i].icon, array[i].tooltipText);
				break;
		}
	}
};

const populateSkills = () => {
	populateSkillTab(skillsData[0].frontend, 'FRONTEND');
	populateSkillTab(skillsData[1].backend, 'BACKEND');
	populateSkillTab(skillsData[2].other, 'OTHER');
};

export { populateSkills, populateEducation };
