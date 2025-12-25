const basic_info = `
<br>
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
<p><u>Education</u></p>
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


const rightText = `
<br>
<p>Experience <a href="https://google.com" class="highlight-link">Content</a></p>
`


document.getElementById('basic_info').innerHTML = basic_info;
document.getElementById('education').innerHTML = education;

document.getElementById('text2').innerHTML = rightText;