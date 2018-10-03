export class Cliente{
 
//atributos

private  id:string;
private fone:string; 

//construtor

 constructor(){
     this.id = '';
     this.fone = '';
}

//gets e sets
public getId() : string{
    return this.id;
}
public setId(id : string) : void{
    this.id = id;
}
public getFone() : string{
    return this.fone;
}
public setFone(fone : string) : void{
    this.fone=  fone;
}
//metodo toString



public toString() : string{
    let toStr :string = '';
    toStr = this.id+':'+this.fone;
    return toStr;

}




}