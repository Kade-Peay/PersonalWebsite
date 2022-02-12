const template = document.getElementById("topnav");

template.innerHTML = `
    <div class="topnav">
        <a id="home" href="/src/index.html">Home</a>
        <a id="projects" href="/src/projects.html">Projects</a>
        <a href="https://github.com/ThatOneDude14" target="_blank">GitHub</a>
    </div>
`;

var target = document.getElementById("welcome");
document.body.insertBefore(template.content, target);

if (document.title == "Home Page") {
	document.getElementById("home").classList.add("active");
}
if (document.title == "Projects Page") {
	document.getElementById("projects").classList.add("active");
}
