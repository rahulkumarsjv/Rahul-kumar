function pattern3(n: number): void{
    for(let i=n; i>=1;i--){
        let starscount: number=i;
        let spacescount: number =n-i;
        let s: string ="";
        for(let j=1; j<=starscount; j++){
            s+= " ";
        }
        for(let j=1; j<=starscount; j++){
            s+= "*";
        }
        console.log(s);
        
    }
}pattern3(5);