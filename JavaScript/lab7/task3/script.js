var ScientificDepartment = {
    "Location": "20 El Shatpy Street Alexandria",
    "city" : "Alexandria",
    "street" : "El Shatpy",
    "code" : "20",
}

function display(obj){
    Object.keys(obj).forEach((prop)=> console.log(prop));
}

display(ScientificDepartment)