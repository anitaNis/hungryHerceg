import React, {useState} from "react";
import OrdersCollection from "../../collections/OrdersCollection"

const CreateOrder = () => {

    const [pollName, setPollName] = useState('');
    const [restaurantWon, setRestaurantWon] = useState('');


    const addOrder =  () => {
    
        OrdersCollection.doc().set({
          created: 'now',
          createBy: 'tesla@tesla.com',
          label: pollName,
          restaurantId: '20ce30a6-fe28-s4c75-a37a-5499851af079',
          active: true
        }, {merge: true})
        .then(() => {
          console.log('order upisan')
          });
        }

    return ( <div className="polls">
        {/* Ljubica */}
        {/* izaberi anketu */}
        <input type="text" onChange={event => setRestaurantWon(event.target.value)}/>
      <input type="text" onChange={event => setPollName(event.target.value)} />
        <button onClick={addOrder}>Push</button>
    </div> );
}
 
export default CreateOrder;