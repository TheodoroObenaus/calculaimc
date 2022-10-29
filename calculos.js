
        function calculo_resultado() {

            let resposta = ""
            const nome = document.getElementById("nome").value
            const peso = Number(document.getElementById("peso").value);
            const altura = Number(document.getElementById("altura").value);

            let cor

            const calculo = peso / (altura * altura)

            if (calculo < 15.99) {
                resposta = (`Meu fi ${nome} tu ta muito Magrelin meno precisa comer mais (Magreza Grave) <br/> ${calculo}`)
                cor = "cuidado"
            } else if (calculo >= 16 && calculo <= 16.99) {
                resposta = (`Meu fi ${nome} tu ta Meio magrelo ainda precisa comer mais (Magreza Moderada) <br/> ${calculo}`)
                cor = "cuidadin"
            } else if (calculo >= 17 && calculo <= 18.5) {
                resposta = (`Meu fi ${nome} tu ta Magrelo come mas meu fi (Magreza Leve) <br/> ${calculo}`)
                cor = "cuidadin"
            } else if (calculo >= 18.5 && calculo <= 24.9) {
                resposta = (`Meu fi ${nome} tu ta saudavel meu fi (Saudável) <br/> ${calculo}`)
                cor = "safe"
            } else if (calculo >= 25 && calculo <= 29.99) {
                resposta = (`Meu fi ${nome} tu ta Gordin precisa fazer uma dietinha (Sobrepeso) <br/> ${calculo}`)
                cor = "cuidadin"
            } else if (calculo >= 30 && calculo <= 34.9) {
                resposta = (`Meu fi ${nome} tu ta Gordo precisa fazer uma dieta (Obesidade Grau 1) <br/> ${calculo}`)
                cor = "cuidado"
            } else if (calculo >= 35 && calculo <= 39.9) {
                resposta = (`Meu fi ${nome} tu ta meio Gordo precisa fazer um dietão (Obesidade Grau 2) <br/> ${calculo}`)
                cor = "cuidado"
            } else if (calculo >= 40) {
                resposta = (`Meu fi ${nome} tu ta Gordão se tu ta vivo é duvidoso (Obesidade Grau 3) <br/> ${calculo}`)
                cor = "cuidado"
            }

            document.getElementById("resposta").innerHTML = resposta
            document.getElementById("resposta").className = cor

        }
