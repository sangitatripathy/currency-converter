const BASE_URL =" https://v6.exchangerate-api.com/v6/d382a493765148e3fb28ef7f/latest/USD";
  

  let nodeList=document.querySelectorAll(".dropdown select")
  let btn=document.querySelector("form button")
  let fromCurr=document.querySelector(".from select")
  let toCurr=document.querySelector(".to select")

  for(let select of nodeList){
    for(currCode in countryList){
      let newOption= document.createElement("option");
      newOption.innerText=currCode;
      newOption.value=currCode;
      if(select.name === "from" && currCode==="USD"){
        newOption.selected="selected"
      }
      else if(select.name === "to" && currCode==="INR"){
        newOption.selected="selected"
      }
      select.append(newOption);
    }
    select.addEventListener("change",(event)=>{
      updateFlag(event.target)
    })
  }
  const updateFlag=(element)=>{
    let currCode=element.value
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
  }
  
  btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input")
    let amtVal=amount.value;
    if(amtVal=="" || amtVal<1){
      amtVal=1;
      amount.value=1;
    }
    // const URL= `${BASE_URL}//${toCurr.value.toLowerCase()}.json`
    const response=await fetch(`https://v6.exchangerate-api.com/v6/d382a493765148e3fb28ef7f/latest/${fromCurr.value.toLowerCase()}`);
    const data= await response.json();
    const conversionRate=data.rates[toCurr.value.toLowerCase()]
      
    })
