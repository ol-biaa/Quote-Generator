let apiQuotes = [];

//Show new Quote
//generate random quote 

function newQuote(){
//Pick a random quote from apiQuotes array

const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quote);
}

// Get  quotes from API
//using ascynchronous fetch request within a try catch statement



async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';


    //try catch helps us to attempt to complete a fetch request but if an error occurs we catch it
    try{
        //response wont be populated unless it has some data fetched
        //by default if we didnt put async it wont try to set response without fetching and it would be an error
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
       newQuote();

    }catch(error){
        //Catch Error here
        console.error('Error fetching quotes:', error);
    }

}

//on load
getQuotes();
