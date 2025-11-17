/* ============================
   THEME SWITCHER
=============================== */
const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeSwitch.checked);
    document.body.classList.toggle("light", !themeSwitch.checked);

    showToast(themeSwitch.checked ? "Dark Mode Enabled" : "Light Mode Enabled", "success");
});


/* ============================
   NAVIGATION (Train button)
=============================== */
document.getElementById("trainNav").onclick = () => {
    window.location.href = "/train";
};


/* ============================
   TOAST
=============================== */
function showToast(msg, type="info") {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.className = "show " + type;

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 2500);
}


/* ============================
   FORM VALIDATION
=============================== */
const form = document.getElementById("predictForm");

form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.classList.add("input-error");
        } else {
            input.classList.remove("input-error");
        }
    });

    if (!valid) {
        e.preventDefault();
        showToast("Please fill all fields!", "error");
    }
});
