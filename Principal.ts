import{Cliente} from "./Cliente";
import{Sala} from "./Sala";
declare function require(msg : string) : any;
var readline = require('readline-sync');

let cliente : Cliente = new Cliente();
let sala: Sala = new Sala();

console.log("\n(sair) - Para sair\n(criar) - para criar uma sala\n(reservar) - para reservar uma cadeira para um cliente\n(mostrar) - para mostrar as poltronas da sala\n(cancelar) - para cancelar a reserva de um cliente\n");
while(true){
    let cmd= readline.question("\nDigite o comando desejado: ");
    if(cmd == 'sair'){
        break;
    }else{
        switch(cmd){

            case 'criar':
                let n1 : number= Number(readline.question("\nDigite o tamanho da sala: "));
                let a : boolean = true;
                
                while(n1 <= 0){
                        n1= readline.question("\nDigite o tamanho da sala corretamente: ");
                        
                }

                sala.criarSala(n1);

                console.log("\nSala criada com sucesso:!!!\n");
                break;

            case 'reservar':
                if (sala.salaCine.length==0){
                    console.log("\nNenhuma sala foi criada!!!");
                }    
                //avisar se a sala estiver cheia!!!
                let count: number = 0;
                let soma :  number = 0;
                while(count < sala.salaCine.length){
                    if (sala.salaCine[count] != " -- "){
                        soma++;
                    
                     }
                    count++;
                }
                if(soma == sala.salaCine.length){
                    console.log("Sala cheia!!!");
                }else{
                

                let idcli : string = readline.question("\nDigite o Id do cliente: ");
                let foncli : string = readline.question("\nDigite o fone do cliente: ");
                let polt :number = Number(readline.question("\nDigite o numero da poltrona: "));
               
                // avisa se o usuário digitou o numero da poltrona corretamente

                while(polt >= sala.salaCine.length){
                    polt = Number(readline.question("\nDigite o numero da poltrona corretamente: ")); 
                        
                    }
            
            
                cliente.setId(idcli);
                cliente.setFone(foncli);
                sala.addCliente(cliente.toString(),polt);
                }
                break;

            case 'mostrar':
                sala.mostrarSala();
                break;

            case 'cancelar':
            if (sala.salaCine.length==0){
                console.log("\nNenhuma sala foi criada!!!");
            }else{
                let idcli = readline.question("\nDigite o Id do cliente a ser excluido: ");
                let foncli = readline.question("\nDigite o fone do cliente a ser exluido: ");
                cliente.setId(idcli);
                cliente.setFone(foncli);
                sala.excluirReserva(cliente.toString());
            }
                break;
            default:
                console.log("\nDigite o comando corretamente");
                break;
        }

    }


}




