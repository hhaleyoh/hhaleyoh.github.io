const basic_info = `
<strong><u>Haley Oh</u></strong>
<br>
<br>
haley.oh@gmail.com
<br>
650-946-7197
<br>
<br>
`

const education = `
<p><strong><u>Education</u></strong></p>
Oberlin College & Conservatory - Oberlin, OH
<br>
Bachelor of Arts: 

<details class="dropdown">
<summary class="highlight-link">Computer Science (Data Science)</summary>
<div class="dropdown-panel">
<p><u>Relevant Coursework:</u>
<br>Economics & Computations
<br>Applied Machine Learning
<br>Computer Architecture
</p>
</div>
</details>

<details class="dropdown">
<summary class="highlight-link">Economics</summary>
<div class="dropdown-panel">
<p><u>Relevant Coursework:</u>
<br>International Trade & Firm Dynamics
<br>Intermediate Macroeconomics
<br>Urban Economics
</p>
</div>
</details>

<details class="dropdown">
<summary class="highlight-link">Business</summary>
<div class="dropdown-panel">
<p><u>Relevant Coursework:</u>
<br>Strategy
<br>Oberlin Business Studios
<br>Advanced Methods in Marketing
</p>
</div>
</details>
`


const experience_header = `
<p><strong><u>Experience</u></strong>
<br>
<br>
`

const aeck_cs_research = `
<p>
<strong>Student Researcher</strong> @ <strong>Oberlin College Computer Science</strong>
<br>
September 2025 - Present
<ul style="margin-left: 20px;">
<li>content point</li>
<li>content point</li>
<li>content point</li>
</ul>
</p>
<br>
`

const busi_dept_work = `
<p>
<strong>Student Data & AI Researcher</strong> @ <strong>Oberlin College Business</strong>
<br>
September 2024 - September 2025
<ul style="margin-left: 20px;">
<li>content point</li>
<li>content point</li>
<li>content point</li>
</ul>
</p>
<br>
`

const foundation_intern = `
<p>
<strong>Applied Research Intern</strong> @ <strong>Foundation EGI</strong>
<br>
June 2024 - September 2024
<ul style="margin-left: 20px;">
<li>content point</li>
<li>content point</li>
<li>content point</li>
</ul>
</p>
<br>
`

const settings = `
<details class="dropdown">
<summary class="highlight-link">Settings</summary>
<div class="settings-panel">
<p><a href="https://google.com" class="highlight-link">Personal</a></p>
</div>
</details>
`


document.getElementById('basic_info').innerHTML = basic_info;
document.getElementById('education').innerHTML = education;

document.getElementById('experience_header').innerHTML = experience_header;
document.getElementById('aeck_cs_research').innerHTML = aeck_cs_research;
document.getElementById('busi_dept_work').innerHTML = busi_dept_work;
document.getElementById('foundation_intern').innerHTML = foundation_intern;

// document.getElementById('settings').innerHTML = settings;

document.getElementById("switch_personal").addEventListener('click', () => {

    switchContent("personal.html")

});

function switchContent(filename){

    const page = document.getElementById('home')
    fetch(filename)
    .then(response => {
        if (!response.ok) throw new Error("Page not found.");
        return response.text();
    })
    .then(html => {
        page.innerHTML = html;
        if (filename == "personal.html"){
            document.title = "Haley Oh // Personal";
        } else {
            document.title = "Haley Oh // Home";
        }
    })
    .catch(error => {
        console.error('Error loading page:', error);
        page.innerHTML = "<p>Sorry, content could not be loaded.</p>";
    });

}