//1.-
const Emp = {
    name: "Pro-Designer",
    CIF: "B-12121212",
    func_CIF: function () {
        return this.CIF;
    }
}
//2.-
const Emp1 = {
    name: "Telefonica",
    CIF: "B-12345678",
    address: "C/Las Moreras, 1"
}
const Emp2 = {
    name: "NTT-Data",
    CIF: "B-87654321",
    address: "C/Las Moreras, 2"
}
function showInfo(company) {
    console.log(`La empresa ${company.name} tiene un CIF: ${company.CIF} y se ubica en ${company.address}`);
}
showInfo(Emp1);
showInfo(Emp2);
//3.-
console.log(Emp1);
Object.defineProperties(Emp1, { "phoneNumber": { enumerable: true, value: 679023456 } });
console.log(Emp1);
function showPhoneNumber(company) {
    console.log(`El teléfono de ${company.name} es ${company.phoneNumber}`);
}
showPhoneNumber(Emp1);
//4.-
const Operaciones = {
    Ventas: 2000,
    Compras: 1000,
    Ganancia: function () {
        return this.Ventas - this.Compras;
    }
}

const Operaciones1 = new Object();
let Operaciones2 = Object.create(Operaciones);
console.log(Operaciones1);
console.log(Operaciones2);

//5.-
const objetoClonado = Object.assign({}, Emp1);
console.log(objetoClonado);
objetoClonado2 = { ...Emp1 };
console.log(objetoClonado2);
//Una de la ventajas es que puedo modificar el objeto clonado sin afectar al original

//6.-
Object.defineProperties(Emp1, {
    "phoneNumber": { enumerable: true, value: 679023456 },
    "ventas": { enumerable: true, value: 12000 }
});
function process(company) {
    if (company.ventas > 10000) {
        console.log(`Empresa preferente`);
    } else {
        console.log(`Empresa no preferente`);
    }
}
process(Emp1);

//7.-
//El principio de "Modularidad" es que una función puede ser usada en varias partes
//de un programa. Mediante este principio se pueden diseñar módulos(funciones,objetos,...) que se pueden
//importar/exportar y usar en otros módulos o partes del programa.