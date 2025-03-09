const inputValueBill = document.querySelector('#inputValueBill');
const inputValueTip = document.querySelector('#inputValueTip');
const calculateBtn = document.querySelector('#calculateBtn');
const totalvalue = document.querySelector('#totalvalue');


    
    // add eventlistener in btn
    
    calculateBtn.onclick = ()=>{
        const bill = parseFloat(inputValueBill.value);
        const tip = parseFloat(inputValueTip.value);
        const total=  bill * (tip/100);

         if(bill &&  tip  ){
            
             const fianlamt = total+bill;
             totalamt(fianlamt);
            
         }
            
        inputValueBill.value = ' '
        inputValueTip.value = ' '
        
    }
    function totalamt(amt){
        totalvalue.innerHTML=' ';
        const h1 = document.createElement('h1')
        h1.className = "text-2xl text-red-700 font-bold"  
        totalvalue.append(h1);
        h1.innerText = amt;
    }
    

  