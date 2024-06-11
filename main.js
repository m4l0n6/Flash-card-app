const pythonCard = document.querySelectorAll(".python-card");
const jsCard = document.querySelectorAll(".js-card");
const htmlCard = document.querySelectorAll(".html-card");
const cssCard = document.querySelectorAll(".css-card");

const python = document.querySelector(".python-course")
const js = document.querySelector(".js-course")
const html = document.querySelector(".html-course")
const css = document.querySelector(".css-course")

const pythonButton = document.querySelector(".python-buton")
const jsButton = document.querySelector(".js-buton")
const htmlButton = document.querySelector(".html-buton")
const cssButton = document.querySelector(".css-buton")

const pythonRemember = document.querySelectorAll(".python-remember");
const jsRemember = document.querySelectorAll(".js-remember");
const htmlRemember = document.querySelectorAll(".html-remember");
const cssRemember = document.querySelectorAll(".css-remember");

const pythonForget = document.querySelectorAll(".python-forget");
const jsForget = document.querySelectorAll(".js-forget");
const htmlForget = document.querySelectorAll(".html-forget");
const cssForget = document.querySelectorAll(".css-forget");

const pythonProcess = document.querySelector(".python-process");
const jsProcess = document.querySelector(".js-process");
const htmlProcess = document.querySelector(".html-process");
const cssProcess = document.querySelector(".css-process");

const pythonPrevButton = document.querySelector(".python-prev");
const jsPrevButton = document.querySelector(".js-prev");
const htmlPrevButton = document.querySelector(".html-prev");
const cssPrevButton = document.querySelector(".css-prev");

const pythonNextButton = document.querySelector(".python-next");
const jsNextButton = document.querySelector(".js-next");
const htmlNextButton = document.querySelector(".html-next");
const cssNextButton = document.querySelector(".css-next");

const pythonCardquanity = document.querySelector(".python-card-quanity")
const jsCardquanity = document.querySelector(".js-card-quanity")
const htmlCardquanity = document.querySelector(".html-card-quanity")
const cssCardquanity = document.querySelector(".css-card-quanity")

const pythonStatus = document.querySelector(".python-status")
const jsStatus = document.querySelector(".js-status")
const htmlStatus = document.querySelector(".html-status")
const cssStatus = document.querySelector(".css-status")

const nextCourse = document.querySelector('.next-course')

let pythonRememberCount = 0;
let jsRememberCount = 0;
let htmlRememberCount = 0;
let cssRememberCount = 0;

let pythonCurrentIndex = 0;
let jsCurrentIndex = 0;
let htmlCurrentIndex = 0;
let cssCurrentIndex = 0;

// Các chức năng của liên quan đến flashcard của Python: bắt đầu
// In ra flashcard liên quan đến python
function showPython(){
    python.classList.toggle("hide")
    if (!python.classList.contains("hide")) {
        showPythonCard(pythonCurrentIndex);
        updatePythonRememberCount();
        jsButton.disabled = true
        htmlButton.disabled = true
        cssButton.disabled = true
        pythonButton.textContent = `Tạm dừng`
    }
    else{
        pythonCard.forEach((card, index) => {
            card.classList.remove('flip');
            card.classList.remove('active');
        })
        jsButton.disabled = false
        htmlButton.disabled = false
        cssButton.disabled = false
        pythonButton.innerHTML = `<a href="#course-container">Học tiếp</a>`
        nextCourse.classList.add("hide")
    }
}

// Lật thẻ đẻ hiện thị đáp án của python
pythonCard.forEach(function(cards) {
    cards.addEventListener("click", () => {
        cards.classList.toggle("flip");
    });
});

// Nút bấm đã nhớ của python
pythonRemember.forEach(function(correct, index) {
    correct.addEventListener("click", () => {
        let forgetButton = pythonForget[index];
        if (!correct.classList.contains("correct")) {
            pythonRememberCount++;
            correct.classList.add("correct");
            forgetButton.disabled = true;
        } else {
            pythonRememberCount--;
            correct.classList.remove("correct");
            forgetButton.disabled = false;
        }
        updatePythonRememberCount();
    });
});

// Nút bấm chưa nhớ của python
pythonForget.forEach(function(wrong, index) {
    wrong.addEventListener("click", () => {
        let rememberButton = pythonRemember[index];
        if (!wrong.classList.contains("wrong")) {
            wrong.classList.add("wrong");
            rememberButton.disabled = true;
        } else {
            wrong.classList.remove("wrong");
            rememberButton.disabled = false;
        }
    });
});

// Tính toán tiến độ của người học của python
function updatePythonRememberCount() {
    let congratulation = Math.round(((pythonRememberCount / pythonCard.length) * 100), 2);
    pythonProcess.textContent = `Tiến độ: ${congratulation}%`;
    if (congratulation == 100) {
        pythonStatus.textContent = `Đã hoàn thành`
        document.querySelector("#toast").classList.remove("hide")
        nextCourse.classList.remove("hide")
    }else{
        pythonStatus.textContent = `Chưa hoàn thành`
        document.querySelector("#toast").classList.add("hide")
    }
}

// Hiển thị thẻ và vị trí câu hỏi đang học của python
function showPythonCard(index) {
    pythonCard.forEach((cards, i) => {
        cards.classList.remove('active');
        if (i === index) {
            pythonCardquanity.innerHTML = ` ${index + 1}/${pythonCard.length}`
            cards.classList.add('active');
        }
        else{
            cards.classList.remove("flip")
        }
    });
}

// Chuyển về thẻ phía trước của python
pythonPrevButton.addEventListener("click", () => {
    if (pythonCurrentIndex > 0) {
        pythonCurrentIndex--;
        showPythonCard(pythonCurrentIndex);
    }
});

//Chuyển về thẻ phía sau của python
pythonNextButton.addEventListener("click", () => {
    if (pythonCurrentIndex < pythonCard.length - 1) {
        pythonCurrentIndex++;
        showPythonCard(pythonCurrentIndex);
    }
});

// Nút làm lại tiến độ
function pythonReset() {
    pythonRememberCount = 0;
    pythonCurrentIndex = 0;
    pythonCard.forEach((card, index) => {
        card.classList.remove('flip');
        card.classList.remove('active');
        card.querySelector('.python-remember').classList.remove('correct');
        card.querySelector('.python-forget').classList.remove('wrong');
        card.querySelector('.python-forget').disabled = false;
        card.querySelector('.python-remember').disabled = false;
    });
    showPythonCard(pythonCurrentIndex);
    updatePythonRememberCount();
}
// Các chức năng của liên quan đến flashcard của Python: Kết thúc

// Các chức năng của liên quan đến flashcard của Javascript: Bắt đầu
// In ra flashcard liên quan đến js
function showJs(){
    js.classList.toggle("hide")
    if (!js.classList.contains("hide")) {
        showJsCard(jsCurrentIndex);
        updateJsRememberCount();
        pythonButton.disabled = true
        htmlButton.disabled = true
        cssButton.disabled = true
        jsButton.textContent = `Tạm dừng`
    }
    else{
        jsCard.forEach((card, index) => {
            card.classList.remove('flip');
            card.classList.remove('active');
        })
        pythonButton.disabled = false
        htmlButton.disabled = false
        cssButton.disabled = false
        jsButton.innerHTML = `<a href="#course-container">Học tiếp</a>`
        nextCourse.classList.add('hide')
    }
    
}

// Lật thẻ đẻ hiện thị đáp án của js
jsCard.forEach(function(cards) {
    cards.addEventListener("click", () => {
        cards.classList.toggle("flip");
    });
});

// Nút bấm đã nhớ của js
jsRemember.forEach(function(correct, index) {
    correct.addEventListener("click", () => {
        let forgetButton = jsForget[index];
        if (!correct.classList.contains("correct")) {
            jsRememberCount++;
            correct.classList.add("correct");
            forgetButton.disabled = true;
        } else {
            jsRememberCount--;
            correct.classList.remove("correct");
            forgetButton.disabled = false;
        }
        updateJsRememberCount();
    });
});

// Nút bấm chưa nhớ của js
jsForget.forEach(function(wrong, index) {
    wrong.addEventListener("click", () => {
        let rememberButton = jsRemember[index];
        if (!wrong.classList.contains("wrong")) {
            wrong.classList.add("wrong");
            rememberButton.disabled = true;
        } else {
            wrong.classList.remove("wrong");
            rememberButton.disabled = false;
        }
    });
});

// Tính toán tiến độ của người học của js
function updateJsRememberCount(){
    let congratulation = Math.round(((jsRememberCount / jsCard.length) * 100), 2);
    jsProcess.textContent = `Tiến độ: ${congratulation}%`;
    if (congratulation == 100) {
        jsStatus.textContent = `Đã hoàn thành`
        document.querySelector("#toast").classList.remove("hide")
        document.querySelector('.next-course').classList.remove("hide")
    } 
    else{
        jsStatus.textContent = `Chưa hoàn thành`
        document.querySelector("#toast").classList.add("hide")
    }
}

// Hiển thị thẻ và vị trí câu hỏi đang học của js
function showJsCard(index) {
    jsCard.forEach((cards, i) => {
        cards.classList.remove('active');
        if (i === index) {
            jsCardquanity.innerHTML = `${index + 1}/${jsCard.length}`
            cards.classList.add('active');
        }
        else{
            cards.classList.remove("flip")
        }
    });
}

// Chuyển về thẻ phía trước của js
jsPrevButton.addEventListener("click", () => {
    if (jsCurrentIndex > 0) {
        jsCurrentIndex--;
        showJsCard(jsCurrentIndex);
    }
});

//Chuyển về thẻ phía sau của js
jsNextButton.addEventListener("click", () => {
    if (jsCurrentIndex < jsCard.length - 1) {
        jsCurrentIndex++;
        showJsCard(jsCurrentIndex);
    }
});

// Nút làm lại tiến độ
function jsReset() {
    jsRememberCount = 0;
    jsCurrentIndex = 0;
    jsCard.forEach((card, index) => {
        card.classList.remove('flip');
        card.classList.remove('active');
        card.querySelector('.js-remember').classList.remove('correct');
        card.querySelector('.js-forget').classList.remove('wrong');
        card.querySelector('.js-forget').disabled = false;
        card.querySelector('.js-remember').disabled = false;
    });
    showJsCard(jsCurrentIndex);
    updateJsRememberCount();
}
// Các chức năng của liên quan đến flashcard của Javascript: Kết thúc

// Các chức năng của liên quan đến flashcard của HTML: Bắt đầu
// In ra flashcard liên quan đến HTML
function showHtml(){
    html.classList.toggle("hide")
    if (!html.classList.contains("hide")) {
        showHtmlCard(htmlCurrentIndex);
        updateHtmlRememberCount();
        pythonButton.disabled = true
        jsButton.disabled = true
        cssButton.disabled = true
        htmlButton.textContent = `Tạm dừng`
    }
    else{
        htmlCard.forEach((card, index) => {
            card.classList.remove('flip');
            card.classList.remove('active');
        })
        pythonButton.disabled = false
        jsButton.disabled = false
        cssButton.disabled = false
        htmlButton.innerHTML = `<a href="#course-container">Học tiếp</a>`
    }
}

// Lật thẻ đẻ hiện thị đáp án của HTML
htmlCard.forEach(function(cards) {
    cards.addEventListener("click", () => {
        cards.classList.toggle("flip");
    });
});

// Nút bấm đã nhớ của HTML
htmlRemember.forEach(function(correct, index) {
    correct.addEventListener("click", () => {
        let forgetButton = htmlForget[index];
        if (!correct.classList.contains("correct")) {
            htmlRememberCount++;
            correct.classList.add("correct");
            forgetButton.disabled = true;
        } else {
            htmlRememberCount--;
            correct.classList.remove("correct");
            forgetButton.disabled = false;
        }
        updateHtmlRememberCount();
    });
});

// Nút bấm chưa nhớ của HTML
htmlForget.forEach(function(wrong, index) {
    wrong.addEventListener("click", () => {
        let rememberButton = htmlRemember[index];
        if (!wrong.classList.contains("wrong")) {
            wrong.classList.add("wrong");
            rememberButton.disabled = true;
        } else {
            wrong.classList.remove("wrong");
            rememberButton.disabled = false;
        }
    });
});

// Tính toán tiến độ của người học của HTML
function updateHtmlRememberCount(){
    let congratulation = Math.round(((htmlRememberCount / htmlCard.length) * 100), 2);
    htmlProcess.textContent = `Tiến độ: ${congratulation}%`;
    if (congratulation == 100) {
        htmlStatus.textContent = `Đã hoàn thành`
        document.querySelector("#toast").classList.remove("hide")
        document.querySelector('.next-course').classList.remove("hide")
    }
    else{
        htmlStatus.textContent = 'Chưa hoàn thành'
        document.querySelector('.next-course').classList.add("hide")
        document.querySelector("#toast").classList.add("hide")
    }
}

// Hiển thị thẻ và vị trí câu hỏi đang học của HTML
function showHtmlCard(index) {
    htmlCard.forEach((cards, i) => {
        cards.classList.remove('active');
        if (i === index) {
            htmlCardquanity.innerHTML = `${index + 1}/${htmlCard.length}`
            cards.classList.add('active');
        }
        else{
            cards.classList.remove("flip")
        }
    });
}

// Chuyển về thẻ phía trước của HTML
htmlPrevButton.addEventListener("click", () => {
    if (htmlCurrentIndex > 0) {
        htmlCurrentIndex--;
        showHtmlCard(htmlCurrentIndex);
    }
});

//Chuyển về thẻ phía sau của HTML
htmlNextButton.addEventListener("click", () => {
    if (htmlCurrentIndex < htmlCard.length - 1) {
        htmlCurrentIndex++;
        showHtmlCard(htmlCurrentIndex);
    }
});

// Nút làm lại tiến độ
function htmlReset() {
    htmlRememberCount = 0;
    htmlCurrentIndex = 0;
    htmlCard.forEach((card, index) => {
        card.classList.remove('flip');
        card.classList.remove('active');
        card.querySelector('.html-remember').classList.remove('correct');
        card.querySelector('.html-forget').classList.remove('wrong');
        card.querySelector('.html-forget').disabled = false;
        card.querySelector('.html-remember').disabled = false;
    });
    showHtmlCard(htmlCurrentIndex);
    updateHtmlRememberCount();
}
// Các chức năng của liên quan đến flashcard của HTML: Kết thúc

// Các chức năng của liên quan đến flashcard của CSS: Bắt đầu
// In ra flashcard liên quan đến CSS
function showCss(){
    css.classList.toggle("hide")
    if (!css.classList.contains("hide")) {
        showCssCard(cssCurrentIndex);
        updateCssRememberCount();
        pythonButton.disabled = true
        jsButton.disabled = true
        htmlButton.disabled = true
        cssButton.textContent = `Tạm dừng`
    }
    else{
        cssCard.forEach((card, index) => {
            card.classList.remove('flip');
            card.classList.remove('active');
        })
        pythonButton.disabled = false
        jsButton.disabled = false
        htmlButton.disabled = false
        cssButton.innerHTML = `<a href="#course-container">Học tiếp</a>`
    }
}

// Lật thẻ đẻ hiện thị đáp án của CSS
cssCard.forEach(function(cards) {
    cards.addEventListener("click", () => {
        cards.classList.toggle("flip");
    });
});

// Nút bấm đã nhớ của CSS
cssRemember.forEach(function(correct, index) {
    correct.addEventListener("click", () => {
        let forgetButton = cssForget[index];
        if (!correct.classList.contains("correct")) {
            cssRememberCount++;
            correct.classList.add("correct");
            forgetButton.disabled = true;
        } else {
            cssRememberCount--;
            correct.classList.remove("correct");
            forgetButton.disabled = false;
        }
        updateCssRememberCount();
    });
});

// Nút bấm chưa nhớ của CSS
cssForget.forEach(function(wrong, index) {
    wrong.addEventListener("click", () => {
        let rememberButton = cssRemember[index];
        if (!wrong.classList.contains("wrong")) {
            wrong.classList.add("wrong");
            rememberButton.disabled = true;
        } else {
            wrong.classList.remove("wrong");
            rememberButton.disabled = false;
        }
    });
});

// Tính toán tiến độ của người học của CSS
function updateCssRememberCount(){
    let congratulation = Math.round(((cssRememberCount / cssCard.length) * 100), 2);
    cssProcess.textContent = `Tiến độ: ${congratulation}%`;
    if (congratulation == 100) {
        cssStatus.textContent = `Đã hoàn thành`
        document.querySelector("#toast").classList.remove("hide")
        document.querySelector('.next-course').classList.remove("hide")
    }
    else{
        cssStatus.textContent = `Chưa hoàn thành`
        document.querySelector('.next-course').classList.add("hide")
        document.querySelector("#toast").classList.add("hide")
    }
}

// Hiển thị thẻ và vị trí câu hỏi đang học của CSS
function showCssCard(index) {
    cssCard.forEach((cards, i) => {
        cards.classList.remove('active');
        if (i === index) {
            cssCardquanity.innerHTML = `${index + 1}/${cssCard.length}`
            cards.classList.add('active');
        }
        else{
            cards.classList.remove("flip")
        }
    });
}

// Chuyển về thẻ phía trước của HTML
cssPrevButton.addEventListener("click", () => {
    if (cssCurrentIndex > 0) {
        cssCurrentIndex--;
        showCssCard(cssCurrentIndex);
    }
});

//Chuyển về thẻ phía sau của HTML
cssNextButton.addEventListener("click", () => {
    if (cssCurrentIndex < cssCard.length - 1) {
        cssCurrentIndex++;
        showCssCard(cssCurrentIndex);
    }
});

// Nút làm lại tiến độ
function cssReset() {
    cssRememberCount = 0;
    cssCurrentIndex = 0;
    cssCard.forEach((card, index) => {
        card.classList.remove('flip');
        card.classList.remove('active');
        card.querySelector('.css-remember').classList.remove('correct');
        card.querySelector('.css-forget').classList.remove('wrong');
        card.querySelector('.css-forget').disabled = false;
        card.querySelector('.css-remember').disabled = false;
    });
    showCssCard(cssCurrentIndex);
    updateCssRememberCount();
}
// Các chức năng của liên quan đến flashcard của CSS: Kết thúc

// Chắc năng làm rõ dần các thành phần khi scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
}) 
const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => observer.observe(el))

// Giới hạn thời gian cho người học
let cardsStudiedCount = 0;
const modal = document.getElementById('studyBreakModal');
const startTimerButton = document.getElementById('startTimerButton');
// Hàm hiển thị modal
function showModal() {
    modal.classList.remove('hide')
    // Thêm chức năng đếm ngược
    startTimerButton.addEventListener('click', startCountdown);
}
const modalContent = document.querySelector('.modal-content p');
// Hàm đếm ngược
function startCountdown() {
    let timeLeft = 3600; // 1 giờ (3600 giây)
    let countdownInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert('Bạn có thể tiếp tục học!');
            closeModal();
            resetCardInteraction();
        } else {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            modalContent.textContent = `Thời gian nghỉ ngơi còn: ${minutes} phút ${seconds} giây`;
        }
    }, 1000);
}

// Hàm đóng modal
function closeModal() {
    modal.classList.add('hide')
}

function resetCardInteraction() {
    document.querySelectorAll('.flashcard').forEach(card => {
        card.addEventListener('click', handleCardFlip);
    });
}

// Theo dõi số lượng thẻ đã học
function incrementCardsStudied() {
    cardsStudiedCount++;
    if (cardsStudiedCount >= 20) {
        showModal();
    }
}


// Gắn sự kiện lật thẻ cho tất cả các thẻ flashcard
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', handleCardFlip);
});

document.getElementById('closeModalButton').addEventListener('click', closeModal);
