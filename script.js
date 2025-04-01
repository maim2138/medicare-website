// $(document).ready(function(){
//     $('.feedback-slider').owlCarousel({
//         loop: false,
//         margin: 10,
//         nav: true,
//         items: 1,
//         autoplay: true,
//         navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
//     });

//     // stop animation on resize
//     let resizeTimer;
//     $(window).resize(function(){
//         $(document.body).addClass('resize-animation-stopper');
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(() => {
//             $(document.body).removeClass('resize-animation-stopper');
//         }, 400);
//     });

//     $('.navbar-show-btn').click(function(){
//         $('.navbar-box').addClass('navbar-box-show');
//     });

//     $('.navbar-hide-btn').click(function(){
//         $('.navbar-box').removeClass("navbar-box-show");
    
//     })

// })
    





document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".card-container");

    fetch("http://localhost:3000/doctors")
        .then((response) => response.json())
        .then((doctors) => {
            doctors.forEach((doctor) => {
                const card = document.createElement("div");
                card.classList.add("card");

                const fullName = document.createElement("h3");
                fullName.textContent =` ${doctor.fullname}`;
                card.appendChild(fullName);

                const age = document.createElement("p");
                age.textContent = `Age: ${doctor.age}`;
                card.appendChild(age);

                const location = document.createElement("p");
                location.textContent = `Location: ${doctor.location}`;
                card.appendChild(location);

                const bookButton = document.createElement("button");
                bookButton.className = "button";
                bookButton.textContent = "Book Appointment";
                bookButton.addEventListener("click", () => {
                    bookButton.textContent = "Booked";
                });
                card.appendChild(bookButton);

                // Append the card to the galleryContainer
                galleryContainer.appendChild(card);
            });
        })
        .catch((error) => console.error("Error fetching doctors:", error));
        
    
    const addDoctorsButton = document.getElementById("addDoctor");
    addDoctorsButton.addEventListener("click", () =>{
        const newDoctor = {};

        newDoctor.fullname = prompt("Enter full Name");
        newDoctor.age = prompt("Enter age");
        newDoctor.location = prompt("Enter location");

        if (
            newDoctor.fullname &&
            newDoctor.age &&
            newDoctor.location 
        ){
            fetch("http://localhost:3000/doctors",{
                method: "POST",
                body: JSON.stringify(newDoctor),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((newDoctors) => {
                const newCard = document.createElement("div");
                newCard.classList.add("card");

                const newFullName = document.createElement("h3");
                newFullName.textContent = `Name: ${newDoctors.fullname}`;
                newCard.appendChild(newFullName);

                const newAge = document.createElement("p");
                newAge.textContent = `Age: ${newDoctors.age}`;
                newCard.appendChild(newAge);

                const newLocation = document.createElement("p");
                newLocation.textContent = `Location: ${newDoctors.location}`;
                newCard.appendChild(newLocation);

                const newBookButton =document.createElement("button");
                newBookButton.className = "button";
                newBookButton.textContent = "Book Appointment";
                newBookButton.addEventListener("click", () => {
                    button.textContent = "Booked";
                });
                newCard.appendChild(newBookButton)
                galleryContainer.appendChild(newCard)
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to add item to the API");
            });
        } else {
            alert("Please enter all details to add a new doctor");
        }
   });
});

const modal = document.getElementById("signupModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration complete!");
    modal.style.display = "none";
});
