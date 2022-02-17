// let ul = document.getElementById("ul1")
// let li = document.createElement("li")
// li.innerHTML = "4"
// ul.appendChild(li)

// let ul = document.getElementById('ul1')

// for (let a = 1; a<101; a++) {
//     let li = document.createElement('li');
//     li.innerHTML = a;
//     ul.appendChild(li);
// }

// let div = document.getElementById('div')
// for (let a = 1; a<7; a++) {
//     let div1 = document.createElement('div');
//     div1.innerHTML = a;
//     div.appendChild(div1);
//     div1.classList.add(`box_${a}`)
// }

let table = document.getElementById('table') 
for (let a = 1; a<6; a++){
    let tr = document.createElement("tr");
    for (let b = 1; b<7; b++){
        let td = document.createElement("td");
        // td.innerHTML = `<input type="text">`;
        tr.appendChild(td);
    }
    table.appendChild(tr)
}
let td = document.querySelectorAll('td');
for (let c = 0; c<td.length; c++) {
    td[c].addEventListener("click", function Fun(){
        let input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = ''
        this.appendChild(input);
        input.classList.add('active')
        this.classList.add('yacheyka')
        
        let element = this
        input.addEventListener("blur", function(){
            element.innerHTML = this.value;
            element.addEventListener("click", Fun);
        })
        this.removeEventListener("click", Fun);
    })
}