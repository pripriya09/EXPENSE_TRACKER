import React, { useState } from "react";
import "./App.css"

function App() {
  const[budget,setBudget]=useState(0)
  const [inp,setInp]=useState("")
  const [index,setIndex]=useState("")
  const [info,setInfo]=useState([])
  const [Amount,setAmount]=useState([])
  const [remain,setRemain] =useState("")

// const [sequence, setSequence] = useState(0);


  function handleBlur(event){
 const updateBudget= event.target.value;
 if((updateBudget>0)){
 setBudget(updateBudget)
 setInp(0)
 }

  
   
  };
  function amountremain(){
   setRemain(budget-inp)

  }


function handleSubmit(e){
  e.preventDefault();
  setInfo([...info,index])
  setIndex("")
  setAmount([...Amount, inp]);   
  // const updateamount =[...Amount,{sequence,inp}]
  // setSequence(updateamount)

  // setSequence([...Amount,{sequence,inp}])
  // setSequence(sequence + 1);
  // setSequence("")


  // setInp(""); 

amountremain()
}



  return (
    <div id="main">
       
<div id="wrapper">
  <h2>EXPENSE TRACKER</h2>
      <div id="information">
        <div id="expans">
          <input
            type="number"
            placeholder="Enter Total Budget for this month"
            id="budget"
            onBlur={handleBlur}
          />
        </div>

        <div id="detail">
          <h3 id="total">Total:{budget}</h3>
          <h3 id="spent">Spent:{inp}</h3>
          <h3 id="remaining">Remaining:{remain}</h3>
        </div>
      </div>

      <div id="enterExpense">
        <form  onSubmit={handleSubmit}>
          <input type="text" placeholder="Expense Detail"  
          value={index}  
          onChange={(e) => setIndex(e.target.value)}

          /><br />
          <input type="number" placeholder="Expense Amount" 
          value={inp}  
          onChange={(e) => setInp(e.target.value)}
          /><br />
          <button type="submit">Add Expense</button>
        </form>
      </div>

      <div id="expenseTracker">
        {/* <table>
          <thead>  
            <tr> 
                
                 <th>S.No</th>
                <tbody>
                  {Amount.map((item1, indno) => (
                  <tr key={indno}>
                   <td>{indno + 1}</td>
                   <td>{item1.amount}</td>
              </tr> 
          ))}
        </tbody>  




                 <th>Info</th>
                 <tbody>
                   {info.map((itemms, indexx) => (
                  <tr key={indexx}>
                  <td>{itemms}</td>
             </tr>
           ))}
         </tbody>


                 <th>Amount</th>
                 <tbody>
                 {Amount.map((item, index) => (
                  <tr key={index}>
                   <td>{item}</td>
             </tr>
           ))}
         </tbody>
              
           </tr>
            </thead>
         </table> */}
         
         
         
         <table>
          <thead>
            <tr>
            <th>S.No</th>
            <th>Info</th>
            <th>Amount</th>
            </tr>
                 {/* <tbody> */}
                 {Amount.map((item, index) => (
                  <tr key={index}>
                   <td>{index + 1}</td>
                   <td>{info[index]}</td>
                    <td>{item}</td>
              </tr> 
          ))}
       
               
                 {/* </tbody> */}



          </thead>
         </table>
       </div>
     </div>

     </div>
   )
 }

 export default App 










