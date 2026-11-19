const textsave= document.getElementById("texting");
const text=JSON.parse(localStorage.getItem("info")) || [];
document.getElementById("filling").innerHTML= text.inputs || "";
textsave.addEventListener("submit", e=>{
    e.preventDefault();
    const savings={
        inputs: e.target.elements.something.value,
    };
    localStorage.setItem("info", JSON.stringify(savings))
    document.getElementById("filling").innerHTML=savings.inputs;
});