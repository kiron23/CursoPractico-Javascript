function generarTabla() {
    document.getElementById("tabla").innerHTML="";
    let n1 = Number(document.getElementById("camp1").value);
    let n2 = Number(document.getElementById("camp2").value);
    let n3 = Number(document.getElementById("camp3").value);
    if(n1>0){
        for(i = 1; i <= n2; i++){
            ca = n1 / n2;
            d1 = ca.toFixed(2); //El metodo .toFixed toma un numero y solo muestra los decimales que le indiquemos en el () ejemplo (2) decimales.
            i2 = ((n1*n3)/100)/n2;
            d2 = i2.toFixed(2);
            r  = ca + i2;
            d3 = r.toFixed(2);
            document.getElementById("tabla").innerHTML=document.getElementById("tabla").innerHTML +
                `<tr>
                    <td>${i}</td>
                    <td>${d1}</td>
                    <td>${d2}</td>
                    <td>${d3}</td>
                </tr>`;
                
        }
        n4 = n1.toFixed(2);
        t_i = i2 * n2;
        d4 = t_i.toFixed(2);
        t_p = r * n2;
        d5 = t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n4;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;
    }else{
        alert("Falta ingresar un Numero");
    }
};
function limpiar() {
    document.getElementById("camp1").value = "";
    document.getElementById("camp2").value = "";
    document.getElementById("camp3").value = "";
    document.getElementById("camp1").focus();
    
};
