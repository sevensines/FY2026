import styled from "styled-components";
import tmoLogo from "./logo.svg";
import tmoKhaled from "./hero.png";
import tmoFree from "./tmo-freetuesdays.svg";

const TuesdayFrame = styled.div`
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
    font-family: inherit;
  }
  .sup {
    font-size: 45% !important;
    display: inline;
  }
  strong {
    font-weight: 700;
  }
  img {
    border: 0;
    display: block;
    margin: auto;
  }
  hr {
    border: 1px solid #005fa9;
    clear: both;
    margin: 30px 0;
  }
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 0.8em;
    line-height: 1.2;
  }
  ul {
    margin: 0 15px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    line-height: 1.1;
    color: #444;
  }
  h1 {
    font-size: 5.25em;
  }
  h2 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 1.65em;
  }
  h4 {
    font-size: 1.5em;
  }
  h5 {
    font-size: 1.125em;
  }
  h6 {
    font-size: 0.813em;
  }

  #header,
  #main,
  #sub,
  #triple,
  #stock,
  #stockBottom,
  #footer {
    margin: 0 auto;
  }

  #headerWrapper {
    position: relative;
    top: 0;
    z-index: 11;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 2px 2px -2px #999;
  }

  #header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
  }

  #header .logo {
    background: transparent url(${tmoLogo}) no-repeat center;
    width: 225px;
    height: 35px;
    padding: 0 20px;
  }

  #topcta {
    padding: 0 20px;

    h5 {
      color: #e20074;
      font-family: "swis721 heavy", "open sans", helvetica, arial, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1em;

      span {
        font-size: 130%;
        font-family: "swis721 bold", "open sans", helvetica, arial, sans-serif;
        font-weight: 600;
      }
    }
  }

  #main {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    position: relative;
    z-index: 10;
    background: #fff;
    padding: 0;

    .column-left {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      background: url("${tmoKhaled}") no-repeat top center;
      background-size: contain;
    }
    .column-right {
      display: flex;
      flex-direction: column;
      margin: 0px 0px 0px 0px;

      .container {
        h3 {
          font-size: 1.8em;
          background: #e20074;
          width: 260px;
          margin: 0 auto;
          padding: 10px 0;
          border-radius: 10px;
          color: #ffffff;
          span {
            display: none;
          }
        }
        h4 {
          padding-top: 5px;
          font-size: 0.8em;
          line-height: 1.1em;
          color: #444444;
          text-align: center;
        }
      }
    }
  }

  #heroCopy {
    h2 {
      color: #e20074;
      text-align: center;
      font-weight: 600;
      font-family: "swis721 heavy", "open sans", helvetica, arial, sans-serif;
      font-weight: 700;
      font-size: 1.7em;
      line-height: 1em;
    }
  }

  #heroCopy img {
    width: 480px;
    height: auto;
    margin: 0 auto;
  }

  @media (min-width: 320px) {
    #header,
    #main,
    #sub,
    #triple,
    #stock,
    #stockBottom,
    #footer {
      width: 300px;
    }

    #topcta {
      display: none;
    }

    #main {
      padding: 0;
      .column-left {
        width: 265px;
        height: 160px;
      }
      .column-right {
        width: 300px;
        margin: 0;
        .container {
          h4 {
            font-size: 0.9em;
          }
          h3 {
            font-size: 1.5em;
            background: transparent;
            width: auto;
            margin: 0 auto;
            padding: 0;
            border-radius: 0;
            color: #e20074;
          }
        }
      }
    }
    #heroCopy {
      h2 {
        padding-top: 5px;
        font-size: 0.95em;
      }
    }

    #heroCopy img {
      width: 270px;
    }
  }
  @media (min-width: 375px) {
    #header,
    #main,
    #sub,
    #triple,
    #stock,
    #stockBottom,
    #footer {
      width: 375px;
    }
    #main {
      .column-right {
        width: 300px;
      }
    }
  }
  @media (min-width: 480px) {
    #header,
    #main,
    #sub,
    #triple,
    #stock,
    #stockBottom,
    #footer {
      width: 480px;
    }
    #main {
      .column-right {
        width: 370px;
      }
    }
    #heroCopy {
      h2 {
        padding-top: 24px;
        font-size: 1em;
      }
    }
    #heroCopy img {
      width: 270px;
    }
  }
  @media (min-width: 768px) {
    #header,
    #main,
    #sub,
    #triple,
    #stock,
    #stockBottom,
    #footer {
      width: 748px;
    }
    #header {
      justify-content: space-between;
    }
    #topcta {
      display: block;
    }
    #main {
      flex-direction: row;
      .column-left {
        width: 360px;
        height: 370px;
      }
      .column-right {
        .container {
          h4 {
            text-align: left;
          }
          h3 {
            font-size: 1.5em;
            background: transparent;
            width: auto;
            margin: 0 auto;
            padding: 0;
            border-radius: 0;
            span {
              display: inline-block;
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) {
    #header,
    #main,
    #sub,
    #triple,
    #stock,
    #stockBottom,
    #footer {
      width: 960px;
    }
    #main {
      .column-left {
        width: 475px;
        height: 485px;
      }
      .column-right {
        width: 445px;
        margin: 0;
        .container {
          h4 {
            font-size: 1.15em;
          }
        }
      }
    }
    #heroCopy {
      h2 {
        padding-top: 5px;
        font-size: 1.3em;
      }
    }
    #heroCopy img {
      width: 370px;
    }
  }
  @media (min-width: 1200px) {
    #header,
    #main,
    #sub,
    #triple,
    #stock,
    #stockBottom,
    #footer {
      width: 1170px;
    }
    #main {
      .column-left {
        width: 580px;
        height: 600px;
      }
      .column-right {
        width: 550px;
        margin: 5px 15px 15px 15px;
        .container {
          h4 {
            font-size: 1.15em;
            line-height: 1.3em;
          }
        }
      }
    }
    #heroCopy {
      h2 {
        font-size: 1.7em;
      }
    }
    #heroCopy img {
      width: 440px;
    }
  }
`;

export default function Tuesday() {
  return (
    <TuesdayFrame>
      <div id='headerWrapper'>
        <div id='header'>
          <div className='logo'></div>
          <a href='' id='topcta' title='(800)-555-1234'>
            <h5>
              Order now! <span>(800)-555-1234</span>
            </h5>
          </a>
        </div>
      </div>
      {/* MAIN */}
      <div id='main'>
        {/* LEFT COL */}
        <div className='column-left'></div>
        {/* RIGHT COL */}
        <div className='column-right'>
          <div id='heroCopy'>
            <h2>SIGN UP FOR A T-MOBILE PLAN AND GET FREE STUFF. EVERY WEEK.</h2>
            <img
              src={tmoFree}
              alt='Introducing T-Mobile Tuesdays. Free Stuff. Every Week.'
              border='0'
            />
          </div>
          {/* LEFT COl CONTAINER */}
          <div className='container'>
            <h4>
              Plus, Get Thanked with a share of Un-carrier stock. Just for being
              a customer. Limited time offer; subject to change.
            </h4>
            <br />
            <h3>
              <span>Call now!&nbsp;</span>
              <a href='tel:(800)-555-1234' title='(800)-555-1234'>
                (800)-555-1234
              </a>
            </h3>
            <br />
            <p className='disc'>
              Qualifying plan req'd. For best experience use App. Obtain
              prospectus by calling toll free 1-855-256-9253 or visiting{" "}
              <a
                href='http://www.t-mobile.com/prospectus'
                title='http://www.t-mobile.com/prospectus'
                style={{ textDecoration: "underline" }}
              >
                http://www.t-mobile.com/prospectus
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div id='freeWrapper'>
        {/* SUB */}
        <div id='subWrapper'>
          <div id='sub'>
            <div id='subTitle'>Get Free Stuff Every Tuesday</div>
            <div id='subCopy'>
              Just for being a customer. No hoops. No strings.
            </div>
          </div>
        </div>

        {/* THREE BLOCKS */}
        <div id='triple'>
          <div className='tripRow'>
            <div className='block'>
              <div className='blockTitle'>
                <h4>Free</h4>
                <h3>Pizza</h3>
              </div>
              <span className='blockLogo dominos'></span>
              <h5>A Medium 2 Topping Pizza</h5>
            </div>

            <div className='block'>
              <div className='blockTitle'>
                <h4>Free</h4>
                <h3>Movies</h3>
              </div>
              <span className='blockLogo vudu'></span>
              <h5>A Movie with Vudu</h5>
            </div>

            <div className='block'>
              <div className='blockTitle'>
                <h4>Free</h4>
                <h3>Treats</h3>
              </div>
              <span className='blockLogo wendys'></span>
              <h5>
                A Wendy's<sup>&reg;</sup> Frosty<sup>&reg;</sup>
              </h5>
            </div>
          </div>
          <div className='tripRow'>
            <h3>
              <span>Call For Details&nbsp;</span>
              <a href='tel:(800)-555-1234' title='(800)-555-1234'>
                (800)-555-1234
              </a>
            </h3>
          </div>
        </div>
      </div>

      {/* STOCK */}
      <div id='stockWrapper'>
        <div id='stock'>
          <div id='blackBarOne'>We're also making you</div>
          <div id='blackBarTwo'>an owner of the compnay</div>
          <div id='pinkBarOne'>Get your share of</div>
          <div id='pinkBarTwo'>Un-Carrier Stock</div>
        </div>
        <div id='stockBottom'>
          <div id='stockDetail'>
            <div id='stockLeft'>
              You’re more than just a customer to us. So we’re giving you the
              biggest thanking of all by making you an owner in the Un-carrier
              with a share of the company.
              <br />
              <br />
              Sign up with T-Mobile today and claim your free share of stock.
              Shares will be available in the app within 3 weeks of joining
              T‑Mobile.
              <br />
              <br />
              Call Now for Details
              <br />
              <h3>
                <a href='tel:(800)-555-1234' title='(800)-555-1234'>
                  (800)-555-1234
                </a>
              </h3>
              <h6>
                Read the{" "}
                <a
                  href=''
                  title='Registration Statement and Prospectus'
                  style={{ textDecoration: "none" }}
                  target='_blank'
                >
                  &#10148;
                </a>
              </h6>
            </div>

            <div id='stockRight'>
              <img src='images/tmo-stockup.svg' />
              <br />
              <br />
              <strong>
                REFER A FRIEND
                <br />
                &nbsp;&nbsp;&nbsp;FOR EVEN MORE SHARES
              </strong>
              <br />
              Increase your ownership stake with a share of stock for every
              friend or family member you bring to T‑Mobile.
            </div>
          </div>
        </div>
      </div>
    </TuesdayFrame>
  );
}
