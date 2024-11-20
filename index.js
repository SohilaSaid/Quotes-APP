
var quoteaContainer = [ 
    {quote :"Be yourself; everyone else is already taken.", writer :"- Oscar Wilde"} ,
    {quote :"So many books, so little time.", writer :"- Frank Zappa"} ,
    {quote :"A room without books is like a body without a soul.", writer :"- Marcus Tullius Cicero"} ,
    {quote :"Be the change that you wish to see in the world.", writer :"- Mahatma Gandhi"} ,
    {quote :"You only live once, but if you do it right, once is enough.", writer :"- Mae West"} ,
    {quote :"If you tell the truth, you don't have to remember anything.", writer :"- Mark Twain"} ,
    {quote :"Always forgive your enemies; nothing annoys them so much.", writer :"- Oscar Wilde"} ,
    {quote :"To live is the rarest thing in the world. Most people exist, that is all.", writer :"- Oscar Wilde"} ,
    {quote :"Without music, life would be a mistake.", writer :"- Friedrich Nietzsche"} ,
    {quote :"Live as if you were to die tomorrow. Learn as if you were to live forever.", writer :"- Mahatma Gandhi"} ,
]



function getQuoate(){
    var num = Math.random() * quoteaContainer.length ;
    num = Math.floor(num) ;
     document.getElementById("quote").innerHTML = quoteaContainer[num].quote ;
     document.getElementById("writer").innerHTML = quoteaContainer[num].writer ;

}