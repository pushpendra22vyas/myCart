import React from "react";

function Products(props) {

  const cardWidth = {
    width: "18rem",
  };
  const cartData = [
    {
      id: 1,
      imgPath: "images/hoodie.jpg",
      heading: "Hoodie",
      prize:750,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 2,
      imgPath: "images/jacket.jpg",
      heading: "Jacket",
      prize:800,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 3,
      imgPath: "images/jeansJacket.jpg",
      heading: "Jeans Jacket",
      prize:850,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 4,
      imgPath: "images/onShirt.jpg",
      heading: "On Shirt",
      prize:435,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 5,
      imgPath: "images/WinterWear.jpg",
      heading: "Winter Wear",
      prize:950,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 6,
      imgPath: "images/girlsBlaazzer.jpg",
      heading: "Girls Blaazer",
      prize:500,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 7,
      imgPath: "images/girlsJacket.jpg",
      heading: "Girls Jacket",
      prize:600,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 8,
      imgPath: "images/demo4.jpg",
      heading: "Demo 4",
      prize:350,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 9,
      imgPath: "images/demo1.jpg",
      heading: "Demo 1",
      prize:300,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 10,
      imgPath: "images/demo2.jpg",
      heading: "Demo 2",
      prize:220,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 11,
      imgPath: "images/demo3.jpg",
      heading: "Demo 3",
      prize:100,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    },
    {
      id: 12,
      imgPath: "images/blackHoddie.jpg",
      heading: "Black Hoddie",
      prize:400,
      productDiscription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur quia hic!"
    }
  ];



  return (
    <>
      <div className="custom-card-container">
        <h3 className="py-3 mx-3">All Products Listing</h3>
        <div className="row m-3">
          {cartData.map((card) => (
            <div className="col-md-3 my-2" key={card.id}>
              <div className="card custom-card" style={cardWidth}>
                <img
                  src={card.imgPath}
                  className="card-img-top custom-image"
                  alt="..."
                />
                <div className="card-body">
                  <h2>{card.heading}</h2>
                  <p className="card-text">
                    {card.productDiscription}
                  </p>
                  <h3><strong>Prize : </strong>{card.prize}</h3>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-dark w-100" onClick={() => props.showMyCartHandler(card)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
