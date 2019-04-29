let input = document.querySelector('input');

function updateValue(){
    let percent = document.querySelector("span");
    percent.textContent = this.value;
    document.documentElement.style.setProperty("--light", this.value/100);
    document.documentElement.style.setProperty("--glow", this.value/4 +"px");
}

input.addEventListener('change', updateValue);
input.addEventListener('mousemove', updateValue);

