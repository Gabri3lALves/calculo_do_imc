class Imc{
    calcularimc(peso,altura){
        var valorimc =  peso/(altura*altura) 
        
        if (valorimc < 19){
            return "Magreza"
        } else if(valorimc >= 19 && valorimc < 24){
            return "Peso normal"
        }else if (valorimc >= 24 && valorimc < 29){
            return "Acima do peso"
        }else{
            return "Obesidade"
        }


    }
}

module.exports = Imc