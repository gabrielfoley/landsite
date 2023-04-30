import './bootstrap.css';
import './coming.css';

function App() {


return (
<>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    name="viewport"
  />
  <meta name="viewport" content="width=device-width" />
  <title>BUILD ON 4 LOTS </title>
  <link href="css/bootstrap.css" rel="stylesheet" />
  <link href="css/coming.css" rel="stylesheet" />
  {/*     Fonts     */}
  <link
    href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css"
    rel="stylesheet"
  />
  <link
    href="http://fonts.googleapis.com/css?family=Grand+Hotel"
    rel="stylesheet"
    type="text/css"
  />
  <div className="navbar">
    <div className="navbarContainer">
      <div className="left" />
      <div className="right">
        <ul className="navItems">
          <li
            className="navItem"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout=""
            data-size=""
          >
            <i
              style={{ fontSize: 18, color: "#fff", margin: 7 }}
              className="fa fa-facebook-square"
            />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Share
            </a>
          </li>
          <li className="navItem">
            <a target="_blank" href="https://twitter.com/intent/tweet" rel="noreferrer">
              <i className="fa fa-twitter" />
              Tweet
            </a>
          </li>
          <li className="navItem">
            <a href="tel:5109153235" target="_blank" rel="noreferrer">
              <i className="fa fa-phone" />
              Call
            </a>
          </li>
          <li className="navItem">
            <a href="mailto:Mike@HugheyHomes.com" target="_blank" rel="noreferrer">
              <i className="fa fa-envelope-o" />
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="main">
    <div className="container">
      <h1 className="logo">ATTENTION ALL CONTRACTORS!</h1>
      <h2 className="logo2">4 LOTS! - 3/4 Acres each In El Sobrante, CA</h2>
      <div className="content">
        <ul className="motto">
          <li>
            <span>✔</span> Build 4 Homes worth $1.5 Million each
          </li>
          <li>
            <span>✔</span> Private &amp; Central Location
          </li>
          <li>
            <span>✔</span> Views of the Bay Area
          </li>
          <li>
            <span>✔</span> Completed Building &amp; Subdivision Application
          </li>
          <li>
            <span>✔</span> Complete Tentative Map
          </li>
          <li>
            <span>✔</span> Complete Architectural Plans
          </li>
          <li>
            <span>✔</span> Looking for Contractor/Partner or Buyer
          </li>
          <li>
            <span>✔</span> Ready to build!
          </li>
        </ul>
        <div className="subscribe">
          <h5 className="info-text">
            <span className="span">
              <a href="tel:5109153235" target="_blank" rel="noreferrer">
                CALL NOW (510) 915-3235
              </a>
            </span>
            
            <span>
              <a href="mailto:Mike@HugheyHomes.com" target="_blank" rel="noreferrer">
                {" "}
                Email: Mike@HugheyHomes.com
              </a>
            </span>
          </h5>
        </div>
      </div>
    </div>
    <div className="footer"></div>
  </div>
  <div id="fb-root" />
</>

)


}
export default App 

