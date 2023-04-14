export function appendOptionsHelper(parent, values){
    values.forEach(el=>{
        let option = document.createElement("option");
        option.classList.add("options")
        option.text = el.text;
        option.setAttribute('value', el.value);
        parent.appendChild(option);
    })
}

export function exportSelectedValue(selectEl){
   return parseInt(selectEl.options[selectEl.selectedIndex].value)
}
