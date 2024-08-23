import styled from "styled-components";
import stuLogo from "../../assets/ms/stu-img/33539_MSImagineLogo_2014-12.png";
import msLogo from "../../assets/ms/stu-img/33539_mslogowt_115.png";
import msFooter from "../../assets/ms/stu-img/33333_logo_microsoft_clear.png";
import stuFacebook from "../../assets/ms/stu-img/33539_facebooksocial_25.png";
import stuTwitter from "../../assets/ms/stu-img/33539_twittersocial_25.png";
import stuInsta from "../../assets/ms/stu-img/33539_instagramsocial_25.png";
import stuCode from "../../assets/ms/stu-img/33539_codehunt.jpg";
import stuBoot from "../../assets/ms/stu-img/33539_bootcamp.jpg";
import stuInnovate from "../../assets/ms/stu-img/33539_innovate.jpg";
import stuDev from "../../assets/ms/stu-img/33539_EvG_81Dev_2014-11.png";
import stuPhone from "../../assets/ms/stu-img/33539_EvG_PhoneDev_2014-11.png";
import stuAzure from "../../assets/ms/stu-img/33539_EvG_AzureDev_2014-11.png";

const ImagineTable = styled.table`
  max-width: 700px;

  td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  }
  img {
    border: none;
  }
  img.EvG {
    width: 100%;
    max-width: 216px;
    min-width: 100px;
  }

  @media screen and (max-width: 699px) {
    *[class*="mobile-hidden"] {
      display: none !important;
    }
    td[class="block"] {
      width: 320px !important;
      display: block !important;
    }
    .mob-320 {
      width: 320px !important;
      display: block !important;
    }
    img.header {
      width: 205px !important;
      height: 37px !important;
    }
    img.logo {
      width: 60px !important;
      height: 14px !important;
    }
    img.sectionIMG {
      padding-bottom: 10px;
    }
    img.sectionIMG {
      min-width: 130px !important;
      width: 100% !important;
      display: block !important;
    }
  }
  @media (min-width: 481px) {
    img.sectionIMG {
      max-width: 370px !important;
      width: 100%;
      min-width: 200px;
    }
  }
`;

export default function ImagineEn() {
  return (
    <ImagineTable
      cellPadding='0'
      cellSpacing='0'
      border='0'
      align='center'
      bgcolor='#ffffff'
    >
      <tbody>
        <tr>
          <td
            align='center'
            valign='top'
            bgcolor='#ffffff'
            className='bodywrap'
            style={{
              width: "700px !important",
              fontFamily: "Segoe UI,Helvetica,Arial,sans-serif",
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
              bgcolor='#009285'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='410'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    <a
                      href=''
                      title='Microsoft Imagine'
                      alias='Header Image: Microsoft Imagine'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#fffffe",
                      }}
                    >
                      <img
                        src={stuLogo}
                        border='0'
                        alt='Microsoft Imagine'
                        className='header'
                      />
                    </a>
                  </td>
                  <td
                    width='135'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='115'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    <img
                      src={msLogo}
                      border='0'
                      alt='Microsoft'
                      className='logo'
                    />
                  </td>
                  <td
                    width='20'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "11px",
                      padding: "24px 0 8px",
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
              bgcolor='#009285'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    align='left'
                    style={{ color: "#009285", padding: "10px 0 25px" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='410'
                    align='left'
                    valign='bottom'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                      fontWeight: "100",
                      fontSize: "24px",
                      padding: "10px 0 25px",
                    }}
                  >
                    Dream it. Build it. Live it.
                  </td>
                  <td
                    width='20'
                    align='left'
                    style={{ color: "#009285", padding: "0px 0 25px" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='230'
                    align='right'
                    valign='bottom'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                      fontWeight: "100",
                      fontSize: "18px",
                      padding: "10px 0 25px",
                    }}
                  >
                    March 2015
                  </td>
                  <td
                    width='20'
                    align='left'
                    style={{ color: "#009285", padding: "10px 0 25px" }}
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
              bgcolor='#e6e6e6'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    align='left'
                    style={{ color: "#e6e6e6", padding: "15px 0" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='25'
                    align='left'
                    valign='middle'
                    style={{ color: "#000000", padding: "15px 0" }}
                  >
                    <a
                      href=''
                      title='Facebook'
                      alias='Header Social: Facebook'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#000001",
                      }}
                    >
                      <img
                        src={stuFacebook}
                        width='25'
                        height='25'
                        border='0'
                        alt='Facebook'
                      />
                    </a>
                  </td>
                  <td
                    width='10'
                    align='left'
                    style={{ color: "#e6e6e6", padding: "15px 0" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='25'
                    align='left'
                    valign='middle'
                    style={{ color: "#000000", padding: "15px 0" }}
                  >
                    <a
                      href=''
                      title='Twitter'
                      alias='Header Social: Twitter'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#000001",
                      }}
                    >
                      <img
                        src={stuTwitter}
                        width='25'
                        height='25'
                        border='0'
                        alt='Twitter'
                      />
                    </a>
                  </td>
                  <td
                    width='10'
                    align='left'
                    style={{ color: "#e6e6e6", padding: "15px 0" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='25'
                    align='left'
                    valign='middle'
                    style={{ color: "#000000", padding: "15px 0" }}
                  >
                    <a
                      href=''
                      title='Instagram'
                      alias='Header Social: Instagram'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#000001",
                      }}
                    >
                      <img
                        src={stuInsta}
                        width='25'
                        height='25'
                        border='0'
                        alt='Instagram'
                      />
                    </a>
                  </td>
                  <td
                    width='20'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='545'
                    align='right'
                    valign='middle'
                    style={{
                      color: "#000000",
                      fontSize: "12px",
                      lineHeight: "15px",
                      padding: "15px 0",
                    }}
                  >
                    Having trouble viewing this email?
                    <br />
                    <a
                      href=''
                      title='View in browser'
                      alias='Preheader: View in browser'
                      style={{ color: "#000000" }}
                    >
                      <strong>View in browser</strong>
                    </a>
                  </td>
                  <td
                    width='20'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "11px",
                      padding: "24px 0 8px",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='700'
                    align='right'
                    style={{ color: "#ffffff", fontSize: "11px" }}
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
              bgcolor='#3589dc'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='350' className='block'>
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
                            valign='top'
                            align='left'
                            style={{ color: "#3589dc" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='310'
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "15px",
                              padding: "10px 0 25px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Want to win $1,000?
                            </span>
                            <br />
                            <br />
                            With just two{" "}
                            <a
                              href=''
                              title='Code Hunt contests'
                              alias='Body: Code Hunt contests'
                              style={{
                                textDecoration: "underline",
                                color: "#fffffe",
                              }}
                            >
                              Code Hunt contests
                            </a>{" "}
                            left, you’re almost out of time to test your coding
                            skills. You get a snippet of code, which you have to
                            rewrite to produce a desired output in as few lines
                            of code as possible. Puzzles start easy, but quickly
                            get more difficult.{" "}
                            <a
                              href=''
                              title='Sign up to play!'
                              alias='Body: Sign up to play!'
                              style={{
                                textDecoration: "underline",
                                color: "#fffffe",
                              }}
                            >
                              Sign up to play!
                            </a>
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{
                              color: "#3589dc",
                              fontSize: "13px",
                              lineHeight: "20px",
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
                    className='block'
                    align='center'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                    }}
                  >
                    <a
                      href=''
                      title='Sign up to play!'
                      alias='Section Image: Code Hunt'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#fffffe",
                      }}
                    >
                      <img
                        src={stuCode}
                        border='0'
                        alt='Want to win $1,000?'
                        className='sectionIMG'
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
              bgcolor='#ffffff'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='350' className='block'>
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
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='310'
                            valign='top'
                            align='left'
                            style={{
                              color: "#000000",
                              fontFamily: "Segoe UI,Arial,sans-seri",
                              fontSize: "15px",
                              padding: "35px 0",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Imagine Cup World Finals return to Seattle!
                            </span>
                            <br />
                            <br />
                            For the second year in a row, the Imagine Cup World
                            Finals will be held in Seattle, July 27 – July 31.
                            In addition to the $50K competition prize, we’ve
                            created customized Boot Camps for each category
                            winner with help from{" "}
                            <a
                              href=''
                              title='Microsoft Ventures'
                              alias='Body: Microsoft Ventures'
                              style={{
                                textDecoration: "underline",
                                color: "#000001",
                              }}
                            >
                              Microsoft Ventures
                            </a>
                            ,{" "}
                            <a
                              href=''
                              title='YouthSpark'
                              alias='Body: YouthSpark'
                              style={{
                                textDecoration: "underline",
                                color: "#000001",
                              }}
                            >
                              YouthSpark
                            </a>{" "}
                            and{" "}
                            <a
                              href=''
                              title='PAX'
                              alias='Body: PAX'
                              style={{
                                textDecoration: "underline",
                                color: "#000001",
                              }}
                            >
                              PAX
                            </a>
                            .{" "}
                            <a
                              href=''
                              title='Learn more'
                              alias='Body: Learn more'
                              style={{
                                textDecoration: "underline",
                                color: "#000001",
                              }}
                            >
                              Learn more
                            </a>
                            !
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontSize: "13px",
                              lineHeight: "20px",
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
                    className='block'
                    align='center'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                      padding: "35px 0",
                    }}
                  >
                    <a
                      href=''
                      title='Learn more'
                      alias='Section Image: Learn more'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#fffffe",
                      }}
                    >
                      <img
                        src={stuBoot}
                        border='0'
                        alt='Imagine Cup World Finals return to Seattle!'
                        className='sectionIMG'
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
              bgcolor='#009285'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{ color: "#009285" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='660'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "15px",
                      lineHeight: "20px",
                      padding: "35px 0",
                    }}
                  >
                    <span style={{ fontSize: "22px", lineHeight: "28px" }}>
                      Free Office&nbsp;365 for Students{" "}
                    </span>
                    <br />
                    <br />
                    U.S. students can now get Office&nbsp;365&nbsp;ProPlus for
                    free using a new{" "}
                    <a
                      href=''
                      title='self-service sign-up process'
                      alias='Body: Self-service Sign-up Process'
                      style={{ textDecoration: "underline", color: "#fffffe" }}
                    >
                      self-service sign-up process
                    </a>
                    . The offer gives you access to Word, PowerPoint, Excel,
                    Outlook, OneNote, Access, Publisher and more, plus 1&nbsp;TB
                    of storage on OneDrive for Business.
                  </td>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{
                      color: "#009285",
                      fontSize: "13px",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{ color: "#ffffff" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='660'
                    valign='top'
                    align='left'
                    style={{
                      color: "#000000",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "15px",
                      lineHeight: "20px",
                      padding: "35px 0px",
                    }}
                  >
                    <span style={{ fontSize: "22px", lineHeight: "28px" }}>
                      Create cross-platform games with Marmalade!
                    </span>
                    <br />
                    <br />
                    Want to build games for Windows 8 and Windows Phone 8 with a
                    fun, high-performance and cross-platform development tool?
                    Then watch{" "}
                    <a
                      href=''
                      title='Creating Your First Marmalade Game'
                      alias='Body: Creating Your First Marmalade Game'
                      style={{ textDecoration: "underline", color: "#000001" }}
                    >
                      Creating Your First Marmalade Game
                    </a>
                    , on-demand.{" "}
                    <a
                      href=''
                      title='Take advantage of this free online training today'
                      alias='Body: Take advantage of this free online training today'
                      style={{ textDecoration: "underline", color: "#000001" }}
                    >
                      Take advantage of this free online training today
                    </a>
                    !
                  </td>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
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
              bgcolor='#00c8f5'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{ color: "#00c8f5" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='660'
                    valign='top'
                    align='left'
                    style={{
                      color: "#000000",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "15px",
                      lineHeight: "20px",
                      padding: "35px 0",
                    }}
                  >
                    <span style={{ fontSize: "22px", lineHeight: "28px" }}>
                      Learn from the Pros
                    </span>
                    <br />
                    <br />
                    Struggling to finish an app? A{" "}
                    <a
                      href=''
                      title='new video series'
                      alias='Body: new video series'
                      style={{ textDecoration: "underline", color: "#000001" }}
                    >
                      new video series
                    </a>{" "}
                    shows how developers are using Microsoft technologies along
                    with developer tools like Visual Studio Online to take their
                    apps to the next level. Watch the videos and learn from the
                    pros.{" "}
                    <a
                      href=''
                      title='Watch now'
                      alias='Body: Watch now'
                      style={{ textDecoration: "underline", color: "#000001" }}
                    >
                      Watch now
                    </a>
                    .
                  </td>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{
                      color: "#00c8f5",
                      fontSize: "13px",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='350' className='block'>
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
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='310'
                            valign='top'
                            align='left'
                            style={{
                              color: "#000000",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "15px",
                              padding: "35px 0",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Imagine Cup winners become entrepreneurs
                            </span>
                            <br />
                            <br />
                            Team Estimeet, winners in 2014’s Imagine Cup
                            Innovation Category, recounts its time at Microsoft
                            Ventures London Accelerator. See how the team is
                            turning its winning app into a viable business.{" "}
                            <a
                              href=''
                              title='Follow their journey on the Student Developer Blog'
                              alias='Body: Follow their journey on the Student Developer Blog'
                              style={{
                                textDecoration: "underline",
                                color: "#000001",
                              }}
                            >
                              Follow their journey on the Student Developer Blog
                            </a>
                            .
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              fontSize: "13px",
                              lineHeight: "20px",
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
                    className='block'
                    align='center'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                      padding: "35px 0",
                    }}
                  >
                    <a
                      href=''
                      title='Follow their journey on the Student Developer Blog'
                      alias='Section Image: Follow their journey on the Student Developer Blog'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#fffffe",
                      }}
                    >
                      <img
                        src={stuInnovate}
                        border='0'
                        alt='Imagine Cup winners become entrepreneurs'
                        className='sectionIMG'
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              cellPadding='0'
              cellSpacing='0'
              border='0'
              width='100%'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='234'
                    className='block'
                    align='center'
                    valign='top'
                    style={{ padding: "10px 0px" }}
                  >
                    <table
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      width='100%'
                    >
                      <tbody>
                        <tr>
                          <td width='234' align='center' bgcolor='#009285'>
                            <a
                              href=''
                              title='The Windows 8.1 Developer Getting Started Guide'
                              alias='Evergreen: The Windows 8.1 Developer Getting Started Guide'
                              style={{
                                color: "#ffffff",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                src={stuDev}
                                border='0'
                                alt='Windows 8.1 Developer'
                                className='EvG'
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width='18' className='mobile-hidden'>
                    &nbsp;
                  </td>
                  <td
                    width='232'
                    className='block'
                    align='center'
                    valign='top'
                    style={{ padding: "10px 0px" }}
                  >
                    <table
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      width='100%'
                    >
                      <tbody>
                        <tr>
                          <td width='232' align='center' bgcolor='#009285'>
                            <a
                              href=''
                              title='The Windows Phone Developer Getting Started Guide'
                              alias='Evergreen: Windows Phone Developer Getting Started Guide'
                              style={{
                                color: "#ffffff",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                src={stuPhone}
                                border='0'
                                alt='Windows Phone Developer'
                                className='EvG'
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width='18' className='mobile-hidden'>
                    &nbsp;
                  </td>
                  <td
                    width='234'
                    className='block'
                    align='center'
                    valign='top'
                    style={{ padding: "10px 0px" }}
                  >
                    <table
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      width='100%'
                    >
                      <tbody>
                        <tr>
                          <td width='234' align='center' bgcolor='#009285'>
                            <a
                              href=''
                              title='The Windows Azure Developer Getting Started Guide'
                              alias='Evergreen: Windows Azure Developer Getting Started Guide'
                              style={{
                                color: "#ffffff",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                src={stuAzure}
                                border='0'
                                alt='Windows Azure Developer'
                                className='EvG'
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
              bgcolor='#f1f1f1'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='700' align='center' valign='top'>
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
              bgcolor='#f1f1f1'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='12' style={{ padding: "0px 0px 20px 0px" }}>
                    &nbsp;
                  </td>
                  <td
                    width='376'
                    align='left'
                    style={{
                      fontFamily: "Arial,sans-serif",
                      fontSize: "9px",
                      color: "#4d4d4d",
                      lineHeight: "16px",
                      textAlign: "left",
                      padding: "0px 0px 20px 0px",
                    }}
                  >
                    Microsoft Corporation
                    <br />
                    One Microsoft Way
                    <br />
                    Redmond, WA 98052 USA
                  </td>
                  <td
                    width='300'
                    align='right'
                    valign='bottom'
                    style={{ lineHeight: "1px", padding: "0px 0px 20px 0px" }}
                  >
                    <img
                      src={msFooter}
                      alt='Microsoft'
                      width='75'
                      height='13'
                      title='Microsoft'
                      border='0'
                      style={{ border: "none" }}
                    />
                  </td>
                  <td width='12'>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </ImagineTable>
  );
}
