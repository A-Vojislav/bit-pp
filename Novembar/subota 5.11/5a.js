// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

function generate(quotes){
    quotes=[
        ['― Jules Renard:"“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”'],
        ['― Albert Einstein:“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”'],
        ['― C.S. Lewis:“I was not born to be free---I was born to adore and obey.”'],
        ['― John Galsworthy:“Life calls the tune, we dance.”'],
        ['― Oscar Wilde:“Be yourself; everyone else is already taken.”'],
        ['― Marcus Tullius Cicero:“A room without books is like a body without a soul.”']];
    
    return quotes[Math.floor(Math.random()*quotes.length)]


    
}
console.log(generate())

// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).

function task2(input){
    let result;
    if (input % 400==0){
        result =`the year ${input} is a leap year`;
      }  else if(input % 100 == 0){
        result = `the year ${input} is not a leap year`;
      }  else if(input % 4 == 0){
        result= `the year ${input} is a leap year`;
      }  else{
        result= `the year ${input} is not a leap year`;
      }
      return result
}
console.log(task2(2024));

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

function task3(input){
  
      let a= input.split('a').length-1;
      let e= input.split('e').length-1;
      let i= input.split('i').length-1;
      let o= input.split('o').length-1;
      let u= input.split('u').length-1;
      let samoglasnika=a+e+i+o+u;
      let suglasnika=input.length-samoglasnika;
      return ` U tekstu koji ima ${input.length} slova, od kojih ${samoglasnika} samoglasnika i ${suglasnika} suglasnika `

}
console.log(task3('Vojislave zasto ovoliko kasnis sa domacim'))

//  4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

