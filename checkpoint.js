/*
Menu:
Pipoca = 1
Macarrão = 2
Carne = 3
Feijão = 4
Brigadeiro = 5
*/


function microondas(tempo, prato){ 

    switch (prato){
        case 1:
        var tempoPadrao = 10
        break
    
        case 2:
        var tempoPadrao = 8
        break
        
        case 3:
        var tempoPadrao = 15
        break
    
        case 4:
        var tempoPadrao = 12
        break
    
        case 5:
        var tempoPadrao = 8
        break

        default:
        console.log ("Prato inexistente")
        return
    
    }
    
       
    if (tempo > tempoPadrao * 3 ){
        console.log("Kabumm")
        }
        else if(tempo > tempoPadrao * 2){
        console.log("Comida queimou")
        }
      
         else if(tempo < tempoPadrao){
        console.log("Tempo insuficiente")
         }
        else {
            console.log("prato pronto, bom apetite!")
        }
        
     
    
}


tempo = 60
prato = 4


microondas(tempo,prato);