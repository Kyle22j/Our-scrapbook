document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const polaroids = document.querySelectorAll('.polaroid');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalPhotos = document.querySelector('.modal-photos');

    // Open modal when clicking any polaroid
    polaroids.forEach(function(polaroid, index) {
        polaroid.style.cursor = 'pointer';

        polaroid.addEventListener('click', function() {
            // For now we only customize the seventh polaroid (index 6)
            if (index === 6) {
                modalTitle.textContent = "Shopping Day";
                modalMessage.textContent = "We came to shop... but somehow the memories were the best thing we took home 😂💕.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/shopping.jpeg" alt="Shopping memory">
                    <img src="images/Shopping 1.jpeg" alt="Shopping memory">
                    <img src="images/shopping 2.jpeg" alt="Shopping memory">
                    <img src="images/shopping 3.jpeg" alt="Shopping memory">
                `;
            } 

            modal.style.display = 'flex';
        });

         polaroid.addEventListener('click', function() {
            // For now we only customize the first polaroid (index 0)
            if (index === 0) {
                modalTitle.textContent = "High School Dump";
                modalMessage.textContent = "Where it all began, silly, carefree, and making memories we'd never forget 🥺.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/High school.jpeg" alt="High school memory">
                    <img src="images/high school 1.jpeg" alt="High school memory">
                    <img src="images/high school 2.jpg" alt="High school memory">
                    <img src="images/highschool 3.jpg" alt="High school memory">
                `;
            } 

            modal.style.display = 'flex';
        });

      polaroid.addEventListener('click', function() {
            // For now we only customize the second polaroid (index 1)
            if (index === 1) {
                modalTitle.textContent = "Fun Time Dump";
                modalMessage.textContent = "These are some of the best moments we share together, kwanza ukicomplain how tumetie kwa bawling 😅😅 then my bad voice during the karaoke 😌.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/fun time.jpeg" alt="Fun Time memory">
                    <img src="images/fun 1.jpeg" alt="Fun Time memory">
                    <img src="images/fun 2.jpeg" alt="Fun Time memory">
                    <img src="images/Fun time 3.jpeg" alt="Fun Time memory">
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the third polaroid (index 2)
            if (index === 2) {
                modalTitle.textContent = "Random Moments";
                modalMessage.textContent = "I know, at times ni mimi kusema let's take a pic ama wewe, but at the end of the day it's just us making ordinary moments unforgettable 🥱.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/random.jpeg" alt="Random memory">
                    <img src="images/Random 1.jpeg" alt="Random memory">
                    <img src="images/random 2.jpeg" alt="Random memory">
                    <img src="images/random 3.jpeg" alt="Random memory">
                `;
            } 

            modal.style.display = 'flex';
        });  


        polaroid.addEventListener('click', function() {
            // For now we only customize the fourth polaroid (index 3)
            if (index === 3) {
                modalTitle.textContent = "Uongozi Center Debuts";
                modalMessage.textContent = "Some places becomes special simply because of the memories we made there, tho hapa piaa kuna some bitter associated saltyness 😫.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/UC.jpeg" alt="UC memory">
                    <img src="images/UC 1.jpeg" alt="UC memory">
                    <img src="images/UC 2.jpeg" alt="UC memory">
                    <img src="images/UC 3.jpeg" alt="UC memory">
               
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the fifth polaroid (index 4)
            if (index === 4) {
                modalTitle.textContent = "Your Special Day 🎂";
                modalMessage.textContent = "A moment we finally got to fully celebrate you, another year of you, and I'm still grateful I get to call you my best friend and soulmate 😅😌.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/birthday.jpeg" alt="Birthday memory">
                    <img src="images/birthday 1.jpeg" alt="Birthday memory">
                    <img src="images/birthday 2.jpeg" alt="Birthday memory">
                    <img src="images/birthday 3.jpeg" alt="Birthday memory">
              
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the sixth polaroid (index 5)
            if (index === 5) {
                modalTitle.textContent = "University Life";
                modalMessage.textContent = "Ended up in a similar chapter again, different pages with different experiences and lessons, but got stuck in the same friendship -growing, learning, and figuring life out together, I'll never get tired of this.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/SCHOOL.jpeg" alt="School memory">
                    <img src="images/school 1.jpeg" alt="School memory">
                    <img src="images/school 2.jpeg" alt="School memory">
                    <img src="images/school 3.jpeg" alt="School memory">
               
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the eighth polaroid (index 7)
            if (index === 7) {
                modalTitle.textContent = "Best Pic Shots 🔥";
                modalMessage.textContent = "Proof that we really do looooook this goooodddd together 😌✨.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/Best shot.jpeg" alt="Best shot memory">
                    <img src="images/best shot 1.jpeg" alt="Best shot memory">
                    <img src="images/best shot 2.jpeg" alt="Best shot memory">
                    <img src="images/Best shot 3.jpg" alt="Best shot memory">
           
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the nineth polaroid (index 8)
            if (index === 8) {
                modalTitle.textContent = "Date 💕";
                modalMessage.textContent = "Just us two best friends, one little adventure, and a memory worth keeping ❤️.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/date.jpeg" alt="Date memory">
                    <img src="images/date 1.jpeg" alt="Date memory">
                    <img src="images/date 2.jpeg" alt="Date memory">
                    <img src="images/Date 3.jpeg" alt="Date memory">
            
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the tenth polaroid (index 9)
            if (index === 9) {
                modalTitle.textContent = "MMMHHH 💸💸";
                modalMessage.textContent = "Good food, beautiful culture, but that's never enjoyable without better company ❤️.";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/African.jpeg" alt="African memory">
                    <img src="images/african 1.jpeg" alt="African memory">
                    <img src="images/african 2.jpeg" alt="African memory">
                    <img src="images/African 3.jpeg" alt="African memory">
           
                `;
            } 

            modal.style.display = 'flex';
        });  

        polaroid.addEventListener('click', function() {
            // For now we only customize the eleventh polaroid (index 10)
            if (index === 10) {
                modalTitle.textContent = "Graduation 🎓";
                modalMessage.textContent = "We did get to see each other finalize this milestone together, held each other together when the difficult moments were forcing us to succumb to the pressure. We should be proud of where we came from and what we will achieve. Can't wait to add more on this space 🤝😊❤️";
                
                // Clear previous photos and add your photo
                modalPhotos.innerHTML = `
                    <img src="images/Graduation.jpeg" alt="Graduation memory">
                    <img src="images/graduation 1.jpeg" alt="Graduation memory">
                    <img src="images/graduation 2.jpeg" alt="Graduation memory">
                    <img src="images/Graduation 3.jpeg" alt="Graduation memory">
               
                `;
            } 

            modal.style.display = 'flex';
        });  
    });

    polaroids.forEach(function (polaroid) {
        polaroid.addEventListener('click', function () {
            const index = parseInt(polaroid.getAttribute('data-index'));
            const memory = memories[index];

            // Set title and message
            modalTitle.textContent = memory.title;
            modalMessage.textContent = memory.message;

            // Build the 3 photos
            modalPhotos.innerHTML = memory.photos.map(src => 
                `<img src="${src}" alt="memory photo">`
            ).join('');

            // ===== UNIQUE COLOURS =====
            const modalContent = document.querySelector('.modal-content');
            const washiTop = document.querySelector('.modal-washi.top');
            const washiBottom = document.querySelector('.modal-washi.bottom');

            // Change background colour of the popup
            modalContent.style.backgroundColor = memory.bg;
            modalContent.style.borderColor = memory.washi;

            // Change washi tape colours
            washiTop.style.background = `repeating-linear-gradient(45deg, ${memory.washi}, ${memory.washi} 10px, ${memory.bg} 10px, ${memory.bg} 20px)`;
            washiBottom.style.background = `repeating-linear-gradient(45deg, ${memory.washi}, ${memory.washi} 10px, ${memory.bg} 10px, ${memory.bg} 20px)`;

            
            // Show the modal
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});

function checkPassword() {
    const correctPassword = "2024";

    const passwordInput = document.getElementById("password-input");
    const passwordScreen = document.getElementById("password-screen");
    const scrapbook = document.getElementById("scrapbook-content");
    const errorMessage = document.getElementById("error-message");

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

       //  🎉 Launch the confetti first
        launchConfetti();

       // 📸 Reveal Polaroids one by one
    setTimeout(() => {
        revealPolaroids();
    }, 400);

       
        errorMessage.textContent = "";

        scrapbook.classList.add("show");
        passwordScreen.classList.add("unlocked");

        setTimeout(function () {
            passwordScreen.style.display = "none";
        }, 800);

    } else {

        errorMessage.textContent =
            "Oops! That's not the secret password 🥹💕";

        shakePasswordBox();
    }
}


function shakePasswordBox() {

    const passwordBox = document.querySelector(".password-box");

    if (!passwordBox) {
        return;
    }

    passwordBox.classList.add("shake");

    setTimeout(function () {
        passwordBox.classList.remove("shake");
    }, 500);
}


/* Allow the Enter key to unlock the scrapbook */
document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("password-input");

    if (passwordInput) {

        passwordInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                checkPassword();
            }

        });

    }

});

function launchConfetti() {

    const container = document.getElementById("confetti-container");

    const colors = [
        "#ff4081",
        "#ffcc33",
        "#7dd3fc",
        "#c084fc",
        "#fb7185",
        "#4ade80",
        "#f97316"
    ];

    const corners = [
        { x: "0%", y: "0%" },
        { x: "100%", y: "0%" },
        { x: "0%", y: "100%" },
        { x: "100%", y: "100%" }
    ];

    // 🎉 Create lots of large confetti
    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        const randomCorner =
            corners[Math.floor(Math.random() * corners.length)];

        confetti.classList.add("confetti");

        const color =
            colors[Math.floor(Math.random() * colors.length)];

        // 💖 Hearts
        if (Math.random() > 0.88) {

            confetti.classList.add("heart");
            confetti.innerHTML = "♥";
            confetti.style.color = color;

        } else {

            confetti.style.backgroundColor = color;

            // 🔵 Some circular pieces
            if (Math.random() > 0.7) {
                confetti.classList.add("circle");
            }

            // Random sizes for a more natural explosion
            const size =
                Math.floor(Math.random() * 25 + 15);

            confetti.style.width = size + "px";
            confetti.style.height =
                Math.floor(size * 0.7) + "px";
        }

        // Starting position
        confetti.style.left = randomCorner.x;
        confetti.style.top = randomCorner.y;

        // 💥 Large explosion movement
        const randomX =
            Math.floor(Math.random() * 1800 - 900) + "px";

        const randomY =
            Math.floor(Math.random() * 1400 - 700) + "px";

        confetti.style.setProperty("--x", randomX);
        confetti.style.setProperty("--y", randomY);

        // Different animation speeds
        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        // Slight delays make the explosion feel natural
        confetti.style.animationDelay =
            Math.random() * 0.4 + "s";

        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 4500);

    }

}

function revealPolaroids() {

    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach((polaroid, index) => {

        // Remove the class first in case the animation
        // has previously been triggered
        polaroid.classList.remove("show-polaroid");

        setTimeout(() => {

            polaroid.classList.add("show-polaroid");

        }, 500 + (index * 300));

    });

}


