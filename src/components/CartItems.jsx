import React, {useState} from "react";
import NoCartItem from "./NoCartItem";
import '../css/NoCartItem.css';

function CartItems({ addedCartItems,onGoToProduct }) {

  const countDuplicates = (array) => {
    const counts = {};
    array.forEach((item) => {
      counts[item.id] = (counts[item.id] || 0) + 1;
    });
    return counts;
  };

  // Get the counts of duplicates
  const itemCounts = countDuplicates(addedCartItems);
  // console.log(itemCounts);

  const [mergedArray, setMergedArray] = useState(() => {
    return addedCartItems.map((item) => ({
      ...item,
      count: itemCounts[item.id] || 0
    }));
  });

  const increaseCount = (item) => {
    item.count += 1;
    // Update the count in the mergedArray state
    setMergedArray([...mergedArray]);
  };

  const decreaseCount = (item) => {
    if (item.count > 0) {
      item.count -= 1;
      // Update the count in the mergedArray state
      setMergedArray([...mergedArray]);
    }
  };

  
  const uniqueArray = mergedArray.filter((item, index, self) => {
    return index === self.findIndex((el) => el.id === item.id);
  });
  

  return (
    <>
      {uniqueArray.length > 0 ? (
        <div className="my-cart-items-container w-100 pb-3">
        <h3 className="text-center pt-3">My Cart</h3>
        <div className="container mt-3">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <h3>Name</h3>
            </div>
            <div className="col-md-2">
              <h3>Price</h3>
            </div>
            <div className="col-md-2">
              <h3>Quantity</h3>
            </div>
          </div>
          {uniqueArray.map((item,i) => (
            <div className="row my-3 justify-content-between" key={i}>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={item.imgPath}
                      className="my-cart-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="my-cart-item-lable">
                      <h4>{item.heading}</h4>
                      <p>
                       {item.productDiscription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <h4>{item.prize * item.count}</h4>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <button className="btn btn-secondary counter-btn"
                 onClick={() => decreaseCount(item)}>
                  <strong>-</strong>
                </button>
                <label htmlFor="" className="item-count">
                  {item.count}
                </label>
                <button className="btn btn-secondary counter-btn"
                 onClick={() => increaseCount(item)}>
                  <strong>+</strong>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      ) : (
        <NoCartItem goToProduct={onGoToProduct}/>
      )}
    </>
  );
}

export default CartItems;
