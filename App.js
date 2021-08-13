import React from "react";
import "./App.css";
import Cards from "./users";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);

    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="wholecontainer">
        <nav className="navbar navbar-expand-lg navbar-light glassnav">
          <div className="container-fluid ">
            <span className="brandname">LGM TASK-2</span>
            <span className="but">
              <ul className="navbar-nav ms-auto  me-5">
                <button className="Btn" onClick={handleClick}>
                  Get Users
                </button>
              </ul>
            </span>
          </div>
        </nav>

        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className="col-4 mt-5">
                  <h4 className="h4">Fetching details...</h4>
                  <span className="loader">
                    <img
                      className="loader"
                      alt="loader"
                      src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
                    />
                  </span>
                </div>
              )
            ) : (
              <div className="col-6  col-sm-8 text">
                <b>Click "Get Users" to Fetch the details</b>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
