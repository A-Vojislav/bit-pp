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

function task4(input){
  for (let i =0; i<input.length;i++){
    if (typeof input[i] == 'number' ){
      console.log(`element ${input[i]} is a number`);
    } else if(typeof input[i] == 'string'){
      console.log(`element ${input[i]} is a string`);
    } else if (typeof input[i] == 'boolean'){
      console.log(`element ${input[i]} is a Boolean`);
    } else{
      console.log(`Nesto nije ok`);
    }
  } 
  return `task4 zavrsen`;
}
console.log(task4(['pet', true, 2,'tekst',23]));

// 5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].

function task5(input){
  for (let i=0; i<input.length;i++){
     if (input[i].includes('0') == true ){
      delete input[i];
     } else if (input[i].includes('1') ==true){
      delete input[i];
     } else if(input[i].includes('2')){
      delete input[i];
     } 
    }

  return input
}

console.log(task5(['12bb','pp', 'as23s', '00s','zastava','12s']))


// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.
