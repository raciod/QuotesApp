const getQuote = async() => {
    try{
        const response = await fetch('https://dummyjson.com/quotes/random', {
            headers: {
                Accept: "application/json"
            }
        });
        const jsonQuote =  await response.json();
        console.log(jsonQuote.quote);
        document.getElementById('quotePlaceholder').innerHTML = jsonQuote.quote;
    }
    catch(error)
    {
        console.error(error);
    }
    
}

document.getElementById('loadQuote').addEventListener("click", getQuote);

//document.getElementById('quotePlaceholder').innerHTML = `${jsonQuote}`;