const precioOriginal = 120;

// forma de crear Arrays Tipo OBjetos (Contienen 2 valores en una misma variable)
const cupones = [
    {
        name: "Cupon1",
        discount: 15,
    },
    {   name: "Cupon2",
        discount: 30,
    },   
    {    name: "Cupon3",
        discount: 40,
    },
];


function calcularPrecioConDescuento(precio,descuento){
    const porcenajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcenajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function buttonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;
    
    const isCuponValueValid  = function(cupones){
            return cupones.name === cuponValue
                     
    };

    const userCupon = cupones.find(isCuponValueValid);

    if (!userCupon){
        alert("El nombre del Cupon que digitaste : (" + cuponValue + ") No es Valido !!!");
        }else {
                const descuento = userCupon.discount;
                const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

                const ResultP = document.getElementById("ResultP");
                ResultP.innerText = "El precio con descuento del " + cuponValue;
                const ResultP1 = document.getElementById("ResultP1");
                ResultP1.innerText = " saldo a cancelar es de $ " + precioConDescuento + " incluido IVA";
            };   

    };


/*console.log({
    precioOriginal,
    descuento,
    porcenajePrecioConDescuento,
    precioConDescuento
});*/

