const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

module.exports = {
    jalgoarenaApiUrl: "https://sk-jalgoarena-api.herokuapp.com",
    title: "Start to solve your first problem",
    emailRegex,
    emailErrorMessage: "Please enter a valid email address",
    teams: ["Team A", "Team B", "Team C"],
    regions: ["Kraków", "Wrocław"]
};
