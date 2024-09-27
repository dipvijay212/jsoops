class carName{
    constructor(name){
        this.Name=name;
    }
}
class Company extends carName{
    constructor(CompanyName,Name){
        super(Name);
        this.Company=CompanyName;
    }
}
class Price extends Company{
    constructor(Name,CompanyName,Pric){
        super(CompanyName,Name);
        this.Price=Pric;
    }
}
let obj=new Price('Fortuner',"TOYOTA",5300000);
console.log(obj);