
function sammenlign (tekst1, tekst2) {
    console.log("text")


if (result == true) {
    indholdElement.innerHTML = "de er ens";
}
else {
    indholdElement.innerHTML = "de er ikke ens";
    return false;

    }
}
//når siden er indlæst
document.addEventListener ("DOMContentLoaded", function (event){

    
    let formKnap = document.querySelector ("#formKnap");
    console.log(formKnap);

    //når knappen er trykket
    formKnap.addEventListener ("click", function (event) {
        event.preventDefault();
        console.log("==============");
    
        let minForm = document.querySelector ("#minForm");
        //console.log(minForm);

        let teskt1Element = minForm.elements.tekst1;
        let teskt2Element = minForm.elements.tekst2;
            console.log(tekst1Element.value);
            //console.log(teskt2Element);
    
            sammenlign(tekst1Element.value, teskt2Element.value);
        

            
            let result = sammenlign (tekst1Element.value, teskt2Element.value);

            let indholdElement = document.querySelector ("#indhold");
                console.log(indholdElement);
            indholdElement
    });
});
