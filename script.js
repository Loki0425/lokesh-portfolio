const words = ["AI Engineer", "Deep Learning Specialist", "Full Stack Developer"];
let i = 0,
    j = 0,
    currentWord = "",
    isDeleting = false;

function type() {
    currentWord = words[i];
    document.getElementById("typing").textContent = currentWord.substring(0, j);

    if (!isDeleting && j < currentWord.length) j++;
    else if (isDeleting && j > 0) j--;
    else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();