import React from 'react';
import './../static/css/ItemsListComponent.css';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
   
  }
}

const ItemsListComponent = (props) => {
  const { itemListdata, cartItems, addHandler, subHandler } = props
  return (<div>
    {props.itemListdata.map((itemListdata, index) => {
      const { name, rs, mrp, content } = itemListdata
      const cartItemData = cartItems[name] || { quant: 0 }
      return (
        <div style={styles.container}>
          <div className={"Card-header"}><img src={require(`../static/images/${itemListdata.imageUrl}`)} style={{ width: '100%', height: '100%' }} /></div>
          <div className={"item-details"}>
            <h1 style={{color:'green'}} className={"content-details"} >{name} </h1>
            <p className={"content2-details"}>{content} </p>
            <p className={"content2-details"}>MRP {mrp}</p>
            <p className={"content1-details"}>Rs {rs}</p>
            <div className="button-container"> <button type="button" className="button-cart ">ADD CART</button>
              <i onClick={() => addHandler({ name: itemListdata.name, price: itemListdata.rs })} className="fas fa-plus-circle icon-container" ></i>
              <span>{cartItemData.quant}</span>
            <i onClick={() => subHandler({ name: itemListdata.name, price: itemListdata.rs })}class="fas fa-minus-circle icon-container"></i>
            </div>
          </div>
        </div>
      )
    } 
    )}

  </div>);

}
export default ItemsListComponent;