// function profile infos
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

// function softSkills
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

// function hardSkills
function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

// function languages
function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

// function education
function updateEducation(profileData) {
    const education = document.getElementById('profile.education')
    education.innerHTML = profileData.education.certificates.map(certificate => `<a href="${certificate.url}" target="_blank"><li><img src="${certificate.logo}" alt="${certificate.name}" title="${certificate.name}"></li> </a>`).join('')
}

// function course 
function updateCourse(profileData) {
    const course = document.getElementById('profile.education2.course')
    course.innerHTML = profileData.education.courses.map(education => `<li><h3 class="title">${education.college}</h3> <span>${education.info}</span> <span class="calendar-college">${education.period}</span> </li>`)
}

// function portfolio
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="title github"' : ''}>
                    ${project.name}
                </h3>
                <a href="${project.url}" target="_blank">
                    ${project.url}
                </a>
            </li>
        `
    }).join('')
}

// function professional experience
function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(professionalExperience => {
        return `
            <li>
                <h3 class="title">${professionalExperience.name}</h3>
                <p class="period">${professionalExperience.period}</p>
                <p>${professionalExperience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateEducation(profileData)
    updateCourse(profileData)
})()