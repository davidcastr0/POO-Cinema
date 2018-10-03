export class Sala{
        
    salaCine : string[];

    constructor(){
        this.salaCine = [];
    }
    
    criarSala(valor : number) : void{
        let a = 0;
        this.salaCine=[];
        while(a<valor){
            this.salaCine.push(" -- ");
            a ++;
        }    
    }

    addCliente(cli: string, poltrona : number) : void{
        let count = 0;
        let verificador : boolean = true;

        //verificar se o cliente já realizou uma reserva.
        
        while(count < this.salaCine.length){
            if (this.salaCine[count] == cli){
                console.log("\nO cliente já realizou uma reserva na poltrona: "+count);
                verificador = false;
                break;
            }
            count++;
        }
        //verificar se a poltrona já está ocupada
        count=0;
        if(verificador == true){
            if(this.salaCine[poltrona] != " -- " ){
                console.log("\nA poltrona selecionada já está ocupada");
                verificador = false;
            }
        }

        
        


        //se tudo estiver ok, adiciona o cliente na cadeira
        count =0;

        if (verificador == true){
            while(count <this.salaCine.length){
                if((poltrona == count) && (this.salaCine[count] == " -- ")){
                    this.salaCine[poltrona] = cli;
                }
                count++;
            }
        
        }   
    }
    mostrarSala() : void{
        if(this.salaCine.length == 0){
            console.log("\nNenhuma sala foi criada!!!");
        }else{
            console.log(this.salaCine);
        }   
    }
    
    excluirReserva(cli:string) : void{
        let count = 0;
        let teste : boolean = true;
        while(count < this.salaCine.length){
            if(this.salaCine[count] == cli){
                let b : number =this.salaCine.indexOf(cli);
                this.salaCine[b] =" -- ";
                teste = true;
                break;
            }else{
                teste = false;
            }
            count++;
        }
        if (teste == false){
            console.log("\nO cliente não realizou nenhuma reserva na sala!!!");
        }

        
        

    }




}