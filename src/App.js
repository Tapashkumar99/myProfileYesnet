import "./App.css";
import avtor from "./avtor.jpg";
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";

function App() {
  return (
    <div className="App">
      <div className="p-4" style={{ borderRadius: "2rem", borderColor: "red" }}>
        <div className="navb mt-2">
          <a
            class="btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <i class="fa-solid fa-bars" />
          </a>

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <h6 className="header">My Profile</h6>
          <i class="fa fa-solid fa-bell" />
        </div>

        <div
          class="card m-1 card1"
          style={{ maxWidth: "22rem", borderColor: "white" }}
        >
          <div class="card-body">
            <div class="row">
              <div className="col-3 ">
                <img className="avator" src={avtor} />
              </div>
              <div className="col-9">
                <p class="card-title">
                  Welcome back
                  <br />
                  <span>
                    <h3>John Sortino!</h3>
                  </span>
                </p>
              </div>
            </div>

            <div class="card-text row mt-3 pt-2">
              <div className="col-8">
                <p className="about">
                  Shelf It,s all about you read.
                  <br />
                  Try and enjoy
                </p>
              </div>
              <div className="col-4">
                <button className="btn2">
                  <iSMART class="fa-brands fa-react" /> SMART PICKER
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="card m-1 p-2 pb-0 card2" style={{ borderRadius: "1rem" }}>
            <div class="card-body">
              <div class="card-text row">
                <div className="col-4 text-center">
                  <p className="text-secondary">
                    <h1 className="text-dark">928</h1>Hours
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p className="text-secondary">
                    <h1 className="text-dark">129</h1>Books
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p className="text-secondary">
                    <h1 className="text-dark">100</h1>Authors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card mt-2 pt-3 card1"
            style={{ borderRadius: "1rem" }}
          >
            <div class="card-header">
              <b>Continue Reading</b>
            </div>
            <div className="card-body col">
              <div className="row cardRow py-2">
                <div className="col-3 text-center">
                  <img src={book1} className="book" />
                </div>
                <div className="col-5">
                  <p className="text-secondary bookAuth">
                    <h4 className="text-dark bookName">
                      The <br /> Goldfinch
                    </h4>
                    Donna Tartt
                  </p>
                </div>
                <div className="col-3 text-center">
                  62%
                  <br />
                  <div className="pie-box"></div>
                </div>
              </div>
              <div className="row cardRow py-2">
                <div className="col-3">
                  <img className="book" src={book2} />
                </div>
                <div className="col-5">
                  <p className="text-secondary bookAuth">
                    <h4 className="text-dark bookName">
                      Die <br /> Verwandlung
                    </h4>
                    Franz Kalka
                  </p>
                </div>
                <div className="col-3 text-center">
                  45%
                  <br />
                  <div className="pie-box2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
