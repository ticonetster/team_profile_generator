// create a Manager card function
const generateManager = (manager) => {
    return `
    <div class="col-4 mt-5">
        <div class="card bg-light foldtl" >
            <div class="card-header">
                <h3>${manager.name}</h3>
                <div class="role"><i class="bi bi-cup"></i>  Manager</div>
            </div>
            <div class="card-body d-flex align-items-center justify-content-center">
                <ul class="list-group">
                    <li class="id list-group-item">ID: ${manager.id}</li>
                    <li class="email list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="office list-group-item">Office Number: ${manager.officeNum}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

// create an Engineer card function
const generateEngineer = (engineer) => {
    return `
    <div class="col-4 mt-5">
        <div class="card bg-light foldtl">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <div class="role"><i class="bi bi-eyeglasses"></i>  Engineer</div>
            </div>
            <div class="card-body d-flex align-items-center justify-content-center">
                <ul class="list-group">
                    <li class="id list-group-item">ID: ${engineer.id}</li>
                    <li class="id list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="id list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </div>
        </div>
    </div>
    `
}

// create an Intern card function
const generateIntern = (intern) => {
    return `
    <div class="col-4 mt-5">
        <div class="card bg-light foldtl">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <div class="role"><i class="bi bi-mortarboard"></i>  Intern</div>
            </div>
            <div class="card-body d-flex align-items-center justify-content-center">
                <ul class="list-group">
                    <li class="id list-group-item">ID: ${intern.id}</li>
                    <li class="id list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="id list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    cards = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cards.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cards.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cards.push(internCard);
        }
    }

    // joining strings 
    const employeeCards = cards.join('')

    // return to generated page
    const generateTeam = generateTeamHTML(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamHTML = (employeeCards) => {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        />
        <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
        <link 
            rel="stylesheet" 
            href="../dist/style.css"
        />
        <title>Team Profile</title>
    </head>
    <body>
        <nav>
            <div class="navbar-title gradient-custom bg-dark text-white d-flex align-items-center justify-content-center">
                My Team
            </div>
        </nav>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossorigin="anonymous"></script>
    </html>
`;
}

// export to index
module.exports = generateHTML;