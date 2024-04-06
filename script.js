const btns = document.querySelectorAll(".btn");
const AC = document.querySelector(".AC");
const inp = document.querySelector('input');
let string = "";

function click(btn){
    btn.addEventListener('click',()=>{
        btn.style.border = "2px solid aqua"
        btn.style.boxShadow = "none";
        setTimeout(()=>{
            btn.style.border = "0px solid white";
            btn.style.boxShadow = "2px 2px 6px white";
        },200);
    });
};
for(btn of btns){
    click(btn);
}

function ac(btn){
    string="";
    inp.value="";
}
AC.addEventListener('click',ac);

let btnsN = document.querySelectorAll("#n");

function operate(btn){
    btn.addEventListener('click',()=>{
        string+= btn.value;
        inp.value=string;
    });
}

for(i of btnsN){
    operate(i);
}

document.querySelector('.ans').addEventListener('click',()=>{
    inp.value = eval(inp.value);
});

document.querySelector(".deci").addEventListener('click',()=>{
    string+=document.querySelector(".deci").value;
    inp.value=string;
});

document.querySelector('.delete').addEventListener('click',()=>{
    string=string.slice(0,string.length-1);
    inp.value=string;
});