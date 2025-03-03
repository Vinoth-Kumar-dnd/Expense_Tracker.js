
let arr=[]
let id=1;
function getexp(){
    
    let name = prompt("enter the expense name : ");
    let amt = parseFloat(prompt("enter amount : "));
    
    if(name === "" || isNaN(amt) || amt <= 0){
         console.log("Invalid input");
         return;
    }
    
    arr.push({id :id++, name,amt});
    console.log(`ID : ${id-1} Added ${amt} for expense ${name}`);
  
}

function expenselog(){
    let total=0;
    
    if(arr.length === 0){
      console.log("No expenses recorded.");
        return;
    }
    
    console.log("Expense List:");
    
    arr.forEach(exp => {
        total += exp.amt;
          console.log(`ID : ${exp.id} Amount : ${exp.amt}  expense : ${exp.name}`);
    });
     console.log(`Total Spending: ${total}`);
}

function editlog(){
      if(arr.length === 0){
        console.log("No expenses recorded.");
        return;
    }
        let id = parseInt(prompt("Enter the expense ID :"));
        let exp = arr.find(e => e.id === id);
        if (!exp) {
        console.log("Expense not found.");
        return;
    }
    
     let name1 = prompt("Edit description:", exp.name);
     let amt1 = parseFloat(prompt("Edit amount:", exp.amt));
   if(name1 !== "" && !isNaN(amt1) && amt1 > 0){  
       
       exp.amt=amt1;
       exp.name=name1;
        console.log("Expense updated successfully.");
        expenselog();
   }
   else{
       consol.log("inavlid input");
   }
}
function deletelog() {
    
        if(arr.length === 0){
      console.log("No expenses recorded.");
        return;
    }
    
    let id = parseInt(prompt("Enter the expense ID :"));
    let len = arr.length;
    let brr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== id) {
            brr.push(arr[i]);
        }
    }

    arr = brr;

    if (arr.length < len) {
        console.log("Expense deleted successfully.");
       
    } else {
        console.log("Expense not found.");
    }
}

function main(){
    let choice = true;
    while(choice){
        console.log("Enter 1 to add");
         console.log("Enter 2 to view");
          console.log("Enter 3 to edit");
           console.log("Enter 4 to delete");
            console.log("Enter -1 to stop");
           let ch = prompt("Enter");
           if(ch==1)
           getexp();
           else if(ch==2)
           expenselog();
           else if(ch==3)
           editlog();
           else if(ch==4)
           deletelog();
           else
           choice=false;
    }
}
main();