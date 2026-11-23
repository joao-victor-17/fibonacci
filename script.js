 let one = +(prompt("Quantos números?"));

        let two = 0;
        let three = 1;
        let resultado = "";

        for (let contador = 0; contador < one; contador++) {
            resultado = resultado + two + " ";
            let proximo = two + three;
            two = three;
            three = proximo;
        }

        console.log(resultado);