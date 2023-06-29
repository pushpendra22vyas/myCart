import React from "react";

function NavBar({ loggedIn, onShowMyCart, btnName, onGoToProduct }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ">Hashtechy</a>

          {loggedIn && (
            <a>
              {btnName === "My Cart" ? (
                <button
                  className="btn btn-primary pull-right"
                  onClick={onShowMyCart}
                >
                  {btnName}
                </button>
              ) : (
                <button
                  className="btn btn-primary pull-right"
                  onClick={onGoToProduct}
                >
                  {btnName}
                </button>
              )}
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
