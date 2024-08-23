import styled from "styled-components";
import pbiLogo from "../../assets/ms/pbi-img/33531_PBIheaderLogo2.png";
import pbiHeader from "../../assets/ms/pbi-img/33531_NLHeaderA.png";
import pbiHeroApr from "../../assets/ms/pbi-img/33531_HeroMain_01.png";
import pbiStory01 from "../../assets/ms/pbi-img/33531_Story1_01.png";
import pbiStory02 from "../../assets/ms/pbi-img/33531_Story2_01.png";
import pbiFacebook from "../../assets/ms/pbi-img/33531_Youtube_Tile2015.png";
import pbiTwitter from "../../assets/ms/pbi-img/33531_FB_Tile2015.png";
import pbiYouTube from "../../assets/ms/pbi-img/33531_Twitter_Tile2015.png";
import pbiFooter from "../../assets/ms/pbi-img/33417_CloudOS_LogoMicrosoft.png";

const PowerAprTable = styled.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[className="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[className="sectionImg"] {
    max-width: 350px;
    min-width: 100px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    textdecoration: none;
  }
  a:hover {
    textdecoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  @media only screen and (max-width: 480px) {
    .block {
      display: block;
      width: 100%;
    }
    .mobileAdjust {
      fontsize: 24px !important;
      lineheight: 28px !important;
    }
    .bannerScale {
      width: 300px !important;
      height: 19px !important;
    }
    .hide {
      display: none;
    }
  }
`;

export default function PowerBIApr() {
  return (
    <PowerAprTable cellPadding='0' cellSpacing='0' border='0' align='center'>
      <tbody>
        <tr>
          <td
            align='center'
            valign='top'
            bgcolor='#ffffff'
            className='bodywrap'
            style={{
              width: "700px !important",
              fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#292929",
            }}
          >
            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#333333'
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='350'
                            valign='middle'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='320'
                            align='right'
                            valign='middle'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Power BI'
                              alias='Header Image: Power BI'
                              style={{ textDecoration: "none" }}
                              target='_blank'
                            >
                              <img
                                src={pbiLogo}
                                width='118'
                                height='33'
                                border='0'
                                alt='Power BI'
                              />
                            </a>
                          </td>
                          <td
                            width='30'
                            valign='middle'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='30'
                            valign='middle'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 30px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='670'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 30px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Power BI Newsletter'
                              alias='Header Image: Power BI Newsletter'
                              style={{
                                textDecoration: "none",
                                color: "#fffffe",
                              }}
                              target='_blank'
                            >
                              <img
                                src={pbiHeader}
                                className='bannerScale'
                                width='560'
                                height='36'
                                border='0'
                                alt='Microsoft Power BI Newsletter'
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#333333'
            >
              <tbody>
                <tr>
                  <td
                    width='700'
                    valign='top'
                    align='center'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                    target='_blank'
                  >
                    <a
                      href=''
                      title='Try the Preview Now!'
                      alias='Hero Image: Experience what’s coming next for Power BI'
                      style={{ textDecoration: "none", color: "#fffffe" }}
                    >
                      <img
                        src={pbiHeroApr}
                        className='hero'
                        width='700'
                        height='292'
                        border='0'
                        alt='Experience what’s coming next for Power BI'
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#333333'
            >
              <tbody>
                <tr>
                  <td
                    width='30'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "20px 0px 20px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='405'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "24px",
                      lineHeight: "30px",
                      padding: "20px 0px 20px 0px",
                    }}
                    className='mobileAdjust'
                  >
                    Experience what’s coming next for Power&nbsp;BI
                  </td>
                  <td
                    width='30'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "20px 0px 20px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='205'
                    valign='middle'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "20px 0px 20px 0px",
                    }}
                  >
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      bgcolor='#f2c811'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='10'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#f2c811",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='185'
                            valign='middle'
                            align='center'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Try the Preview Now!'
                              alias='Hero CTA: Try the Preview Now!'
                              style={{ color: "#000001" }}
                            >
                              Try the Preview Now!
                            </a>
                          </td>
                          <td
                            width='10'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#f2c811",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='30'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "20px 0px 20px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#ffffff'
            >
              <tbody>
                <tr>
                  <td
                    width='350'
                    valign='middle'
                    align='center'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "18px",
                      padding: "20px 0px 20px 0px",
                    }}
                    className='block'
                  >
                    <a
                      href=''
                      title='Try Power BI with Google Analytics'
                      alias='Story 1 Image: Try Power BI with Google Analytics'
                      style={{ color: "#f2c811", textDecoration: "none" }}
                    >
                      <img
                        src={pbiStory01}
                        className='sectionImg'
                        border='0'
                        alt='Try Power BI with Google Analytics'
                      />
                    </a>
                  </td>
                  <td
                    width='350'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "20px 0px 20px 0px",
                    }}
                    className='block'
                  >
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      bgcolor='#ffffff'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='20'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='310'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#333333",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            <span
                              style={{
                                color: "#333333",
                                fontSize: "30px",
                                lineHeight: "36px",
                                fontFamily:
                                  "Segoe UI Light,Segoe UI,Arial,sans-serif",
                                fontWeight: "100",
                              }}
                              className='mobileAdjust'
                            >
                              Visualize and Explore your Google Analytics data
                              with Power&nbsp;BI
                            </span>
                            <br />
                            <br />
                            Now you can connect to your Google Analytics data
                            using{" "}
                            <a
                              href=''
                              title='Power BI'
                              alias='Story 1: Power BI'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Power&nbsp;BI
                            </a>{" "}
                            and the{" "}
                            <a
                              href=''
                              title='Power BI Designer'
                              alias='Story 1: Power BI Designer'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Power&nbsp;BI Designer
                            </a>
                            . Start unlocking your website’s insights today.
                            <table
                              width='290'
                              cellPadding='0'
                              cellSpacing='0'
                              border='0'
                            >
                              <tbody>
                                <tr>
                                  <td colSpan='3'>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td
                                    width='15'
                                    valign='middle'
                                    align='left'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#f2c811",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    &nbsp;
                                  </td>
                                  <td
                                    width='260'
                                    valign='middle'
                                    align='center'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#ffffff",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "16px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    <a
                                      href=''
                                      title='Try Power BI with Google Analytics'
                                      alias='Story 1 CTA: Try Power BI with Google Analytics'
                                      style={{
                                        color: "#000001",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Try Power&nbsp;BI with Google Analytics
                                    </a>
                                  </td>
                                  <td
                                    width='15'
                                    valign='middle'
                                    align='left'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#f2c811",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            width='20'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#ffffff'
            >
              <tbody>
                <tr>
                  <td
                    width='350'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "20px 0px 20px 0px",
                    }}
                    className='block'
                  >
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='20'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='310'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            <span
                              style={{
                                color: "#333333",
                                fontSize: "30px",
                                lineHeight: "36px",
                                fontFamily:
                                  "Segoe UI Light,Segoe UI,Arial,sans-serif",
                                fontWeight: "100",
                              }}
                              className='mobileAdjust'
                            >
                              The Power BI Designer gets its biggest
                              update&nbsp;yet
                            </span>
                            <br />
                            <br />
                            Last week we announced the biggest{" "}
                            <a
                              href=''
                              title='Power BI Designer'
                              alias='Story 2: Power BI Designer'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Power&nbsp;BI Designer
                            </a>{" "}
                            update since the{" "}
                            <a
                              href=''
                              title='preview launch on December 18, 2014'
                              alias='Story 2: preview launch on December 18, 2014'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              preview launch on December 18, 2014
                            </a>
                            . This update includes the ability to create
                            measures using DAX, as well as several other new
                            Modeling &amp; Query features.
                            <table
                              width='290'
                              cellPadding='0'
                              cellSpacing='0'
                              border='0'
                            >
                              <tbody>
                                <tr>
                                  <td colSpan='3'>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td
                                    width='15'
                                    valign='middle'
                                    align='left'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#f2c811",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    &nbsp;
                                  </td>
                                  <td
                                    width='260'
                                    valign='middle'
                                    align='center'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#ffffff",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "16px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    <a
                                      href=''
                                      title='Learn more about the update'
                                      alias='Story 2 CTA 1: Learn more about the update'
                                      style={{
                                        color: "#000001",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Learn more about the&nbsp;update
                                    </a>
                                  </td>
                                  <td
                                    width='15'
                                    valign='middle'
                                    align='left'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#f2c811",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan='3'>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td
                                    width='15'
                                    valign='middle'
                                    align='left'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#f2c811",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    &nbsp;
                                  </td>
                                  <td
                                    width='260'
                                    valign='middle'
                                    align='center'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#ffffff",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "16px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    <a
                                      href=''
                                      title='The Power BI Designer Experience'
                                      alias='Story 2 CTA 2: The Power BI Designer Experience'
                                      style={{
                                        color: "#000001",
                                        textDecoration: "none",
                                      }}
                                    >
                                      The Power&nbsp;BI Designer Experience
                                    </a>
                                  </td>
                                  <td
                                    width='15'
                                    valign='middle'
                                    align='left'
                                    bgcolor='#f2c811'
                                    style={{
                                      color: "#f2c811",
                                      fontFamily: "Segoe UI,Arial,sans-serif",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      padding: "10px 0px 10px 0px",
                                    }}
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            width='20'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='350'
                    valign='middle'
                    align='center'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "18px",
                      lineHeight: "1px",
                      paddingBottom: "10px",
                    }}
                    className='block'
                  >
                    <a
                      href=''
                      title='Learn more about the update'
                      alias='Story 2 Image: Learn more about the update'
                      style={{ color: "#f2c811", textDecoration: "none" }}
                    >
                      <img
                        src={pbiStory02}
                        className='sectionImg'
                        border='0'
                        alt='Learn more about the update'
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#4C68B0'
            >
              <tbody>
                <tr>
                  <td
                    width='10'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='10'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='block'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='206'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      padding: "20px 0px 20px 0px",
                      msoLineHeightRule: "exactly",
                    }}
                    className='block'
                  >
                    What Visualization should I&nbsp;use?
                    <br />
                    <br />
                    <a
                      href=''
                      title='Use these tips to help you pick the right visualization for your data'
                      alias='Triple Banner CTA 1: Use these tips to help you pick the right visualization for your data'
                      style={{
                        color: "#fffffe",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Use these tips to help you pick the right visualization
                      for your&nbsp;data
                    </a>
                  </td>
                  <td
                    width='10'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='hide'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='11'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='hide'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='206'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      padding: "20px 0px 20px 0px",
                      msoLineHeightRule: "exactly",
                    }}
                    className='block'
                  >
                    Using SendGrid?
                    <br />
                    <br />
                    <a
                      href=''
                      title='Get more out of your email analytics. Monitor and analyze your email deliverability statistics with Power BI'
                      alias='Triple Banner CTA 2: Get more out of your email analytics.'
                      style={{
                        color: "#fffffe",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Get more out of your email analytics. Monitor and analyze
                      your email deliverability statistics with Power&nbsp;BI
                    </a>
                  </td>
                  <td
                    width='10'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='hide'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='11'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='hide'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='206'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      padding: "20px 0px 20px 0px",
                      msoLineHeightRule: "exactly",
                    }}
                    className='block'
                  >
                    Customer Support with&nbsp;Zendesk?
                    <br />
                    <br />
                    <a
                      href=''
                      title='Get better insights into your Zendesk customer support with Power BI'
                      alias='Triple Banner CTA 3: Get better insights into your Zendesk customer support with Power BI'
                      style={{
                        color: "#fffffe",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Get better insights into your Zendesk customer support
                      with Power&nbsp;BI
                    </a>
                  </td>
                  <td
                    width='10'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='block'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='10'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#ffffff'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='465'
                    valign='top'
                    align='left'
                    style={{
                      color: "#505050",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      padding: "20px 0px 20px 0px",
                    }}
                    className='block'
                  >
                    <span
                      style={{
                        color: "#333333",
                        fontSize: "24px",
                        lineHeight: "30px",
                        fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                        fontWeight: "100",
                      }}
                      className='mobileAdjust'
                    >
                      More about Power&nbsp;BI
                    </span>
                    <br />
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='205'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='PowerBI.com'
                              alias='Extra Links 1: PowerBI.com'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              PowerBI.com
                            </a>
                          </td>
                          <td
                            width='10'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='270'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Power BI Designer'
                              alias='Extra Links 4: Power BI Designer'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Power&nbsp;BI Designer
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            width='205'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Blog'
                              alias='Extra Links 2: Blog'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Blog
                            </a>
                          </td>
                          <td
                            width='10'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='270'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Power BI Mobile'
                              alias='Extra Links 5: Power BI Mobile'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Power&nbsp;BI Mobile
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            width='205'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Support'
                              alias='Extra Links 3: Support'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Support
                            </a>
                          </td>
                          <td
                            width='10'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='270'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Analysis Services Connector'
                              alias='Extra Links 6: Analysis Services Connector'
                              style={{
                                color: "#E6BE1D",
                                textDecoration: "none",
                              }}
                            >
                              Analysis Services Connector
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='20'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className='block'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='175'
                    valign='top'
                    align='left'
                    style={{
                      color: "#505050",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      padding: "20px 0px 20px 0px",
                    }}
                    className='block'
                  >
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='31'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a href='' title='YouTube' alias='YouTube'>
                              <img
                                src={pbiYouTube}
                                height='31'
                                width='31'
                                border='0'
                                alt='YouTube'
                              />
                            </a>
                          </td>
                          <td
                            width='10'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='31'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a href='' title='Facebook' alias='Facebook'>
                              <img
                                src={pbiFacebook}
                                height='31'
                                width='31'
                                border='0'
                                alt='Facebook'
                              />
                            </a>
                          </td>
                          <td
                            width='10'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='31'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            <a href='' title='Twitter' alias='Twitter'>
                              <img
                                src={pbiTwitter}
                                height='31'
                                width='31'
                                border='0'
                                alt='Twitter'
                              />
                            </a>
                          </td>
                          <td
                            width='62'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td
                            width='175'
                            colSpan='6'
                            valign='top'
                            align='left'
                            style={{
                              color: "#505050",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px",
                            }}
                          >
                            Follow us to stay up to date with the latest news
                            about Power&nbsp;BI
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='20'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#333333",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#ffffff'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "0px 0px 10px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='525'
                    valign='top'
                    align='left'
                    style={{
                      color: "#505050",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "0px 0px 10px 0px",
                    }}
                    className='block'
                  >
                    Microsoft Corporation <br />
                    One Microsoft Way
                    <br />
                    Redmond, WA 98052
                    <br />
                    USA
                  </td>
                  <td
                    width='30'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "0px 0px 10px 0px",
                    }}
                    className='block'
                  >
                    &nbsp;
                  </td>
                  <td
                    width='105'
                    valign='bottom'
                    align='left'
                    style={{
                      color: "#505050",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "0px 0px 10px 0px",
                    }}
                    className='block'
                  >
                    <a
                      href=''
                      title='Microsoft'
                      alias='Footer Image: Microsoft'
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pbiFooter} alt='Microsoft' border='0' />
                    </a>
                  </td>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "0px 0px 10px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              width='100%'
              cellPadding='0'
              cellSpacing='0'
              border='0'
              bgcolor='#ffffff'
            >
              <tbody>
                <tr>
                  <td
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Seoge UI,Arial,sans-serif",
                      fontSize: "11px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </PowerAprTable>
  );
}
