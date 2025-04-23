//print delivery scheduled on each day

const getTypeOfDelivery=(days)=>{
    days.forEach(day => {
        switch(day){
            case 'Mon':
            console.log(`${day}-Books delivery`);
            break;
            case 'Tue':
            console.log(`${day}-Food delivery`);
            break;
            case 'Fri':
            console.log(`${day}-Uniform delivery`);
            break;
            default:
            console.log(`${day}-No dellivery`);
            break;

        }
        
    });
};
const days=["Mon","Tue", "Fri"];
getTypeOfDelivery(days);


//Check status of the book

const checkBookStatus=(bookStatuses)=>{
    bookStatuses.forEach(bookStatus=>{
        switch(bookStatus){
            case 'available':
            console.log("Ready to  lend");
            break;
            case 'borrowed':
            console.log("Checked out");
            break;
            default:
            console.log("Not yet added to system");
            break;
        }

    });
};
const bookStatuses=["borrowed","available"];
checkBookStatus(bookStatuses);


//Check customer ages

const checkCustomerAges=(ages)=>{
    for(let index=0; index<ages.length;index++){
        if(ages[index]>=18){
            console.log("Adult");
        }else{
            console.log("Minor");
        }
    }
};
const ages=[12,40,18,19,15,20];
checkCustomerAges(ages);


//countdown of lives in a game

const getCountdownOfLives= ()=>{
    let lives=5
    while(lives >0){
        console.log(`You have ${lives} left`);
        lives --;
       

    }
};
getCountdownOfLives()


//do--while loop print each comments until array is empty

const getEachCommemt=(userfeedback)=>{
   for(i of userfeedback)
    do{
        console.log(`${i}`);
        i++;
        break;
        
    }
    while(i<userfeedback.length);
   
}
const userfeedback=["Good","Bad","Wonderfull"];
getEachCommemt(userfeedback);


//gives a message to users according to user login statuses

const  getMessage=(userLoginStatuses)=>{
    for(let i=0;i<userLoginStatuses.length;i++){
        if(userLoginStatuses[i]=="logged in"){
            console.log("Welcome back!");
        }else{
            console.log("Please log in");
        }
    }
};
const userLoginStatuses=["logged in","logged out"];
getMessage(userLoginStatuses);


// print ticket priorities urgency

const getTicketPriorityurgency=(ticketPriorities)=>{
    ticketPriorities.forEach(ticketPriority=>{
        switch(ticketPriority){
            case 'high':
            console.log("Immediately");
            break;
            case 'medium':
            console.log("fast");
            break;
            case 'low':
            console.log("later");
            break;
        }
    });
};
const ticketPriorities=["low","high","medium"];
getTicketPriorityurgency(ticketPriorities);


//quiz countdown

const  getCountdownOfQuizes=()=>{
    let quizes=10;
    while(quizes>0){
     console.log(`${quizes}`);
     quizes --;
    }
}
getCountdownOfQuizes();


