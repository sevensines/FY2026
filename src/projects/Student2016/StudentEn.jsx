import styled from "styled-components";
import stuLogo from "./33539_MSPartnerLogo-466_2015-04.png";
import stuFooter from "./33539_MSLogo_Footer_2015-04.png";
import stuFacebook from "./33539_MSPartner_Facebook_2015-04.png";
import stuTwitter from "./33539_MSPartner_Twitter_2015-04.png";
import stuInsta from "./33539_MSPartner_IG_2015-04.png";
import stuHireLine from "./33539_Headline_Scott_2015-04.png";
import stuHires from "./33539_hires.jpg";
import stuStudents from "./33539_azurestudent.jpg";
import stuTopStory from "./33539_2015-04_Headline_TopStoriesB.png";
import stuWin10 from "./33539_win10.jpg";
import stuSpain from "./33539_spain.jpg";
import stuCountryLine from "./33539_Headline_Country_2015-04.png";
import stuDateLine from "./33539_2015-04_Headline_KeyDatesB.png";

const StudentTable = styled.table`
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
  img.sectionIMG {
    max-width: 260px !important;
    width: 100%;
  }
  img.topstoryIMG {
    max-width: 640px;
    width: 100%;
  }
  @media (max-width: 699px) {
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
      width: 200px !important;
      height: 54px !important;
    }
    img.header2 {
      width: 205px !important;
      height: 37px !important;
    }
    img.logo {
      width: 60px !important;
      height: 14px !important;
    }
    img.sectionIMG {
      min-width: 130px !important;
      width: 100% !important;
      display: block !important;
    }
    img.topstoryIMG {
      min-width: 320px !important;
      width: 100% !important;
      display: block !important;
    }
  }
`;

export default function StudentEn() {
  return (
    <StudentTable
      cellPadding='0'
      cellSpacing='0'
      border='0'
      align='center'
      bgcolor='#ffffff'
      className='_student'
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
              bgcolor='#2b73d4'
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
                    width='466'
                    align='left'
                    valign='middle'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    <a
                      href=''
                      title='Microsoft Student Partners'
                      alias='Header Image: Microsoft Student Partners'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#fffffe",
                      }}
                    >
                      <img
                        src={stuLogo}
                        border='0'
                        alt='Microsoft Student Partners'
                        className='header'
                      />
                    </a>
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
                  <td
                    width='174'
                    align='right'
                    valign='bottom'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "24px 0 8px",
                    }}
                  >
                    <table
                      width='100%'
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      bgcolor='#2b73d4'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='54'
                            align='left'
                            style={{ color: "#ffffff", padding: "15px 0" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='20'
                            align='left'
                            valign='top'
                            style={{ color: "#000000", padding: "0 0 15px" }}
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
                                width='20'
                                height='20'
                                border='0'
                                alt='Facebook'
                              />
                            </a>
                          </td>
                          <td
                            width='5'
                            align='left'
                            style={{ color: "#ffffff", padding: "15px 0" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='20'
                            align='left'
                            valign='top'
                            style={{ color: "#000000", padding: "0 0 15px" }}
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
                                width='20'
                                height='20'
                                border='0'
                                alt='Twitter'
                              />
                            </a>
                          </td>
                          <td
                            width='5'
                            align='left'
                            style={{ color: "#ffffff", padding: "15px 0" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='20'
                            align='left'
                            valign='top'
                            style={{ color: "#000000", padding: "0 0 15px" }}
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
                                width='20'
                                height='20'
                                border='0'
                                alt='Instagram'
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
                      bgcolor='#2b73d4'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='174'
                            align='right'
                            valign='bottom'
                            style={{
                              color: "#ffffff",
                              fontFamily:
                                "Segoe UI Light,Segoe UI,Arial,sans-serif",
                              fontWeight: "100",
                              fontSize: "18px",
                              padding: "0 0 6px",
                            }}
                          >
                            April 2015
                          </td>
                        </tr>
                        <tr>
                          <td
                            width='174'
                            align='right'
                            valign='bottom'
                            style={{
                              color: "#ffffff",
                              fontFamily:
                                "Segoe UI Light,Segoe UI,Arial,sans-serif",
                              fontWeight: "100",
                              fontSize: "11px",
                              padding: "0px 0px 5px 0px",
                            }}
                          >
                            Having trouble viewing this&nbsp;email?{" "}
                            <a
                              href=''
                              title='View as a webpage'
                              alias='Preheader: View as a webpage'
                              style={{
                                color: "#fffffe",
                                fontWeight: "bold",
                                textDecoration: "underline",
                              }}
                            >
                              View&nbsp;as&nbsp;a&nbsp;webpage.
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
              bgcolor='#e6e6e6'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td
                    width='700'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "6px 0",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='380'
                    valign='top'
                    bgcolor='#ffffff'
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
                            width='340'
                            colSpan='3'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                            }}
                          >
                            <img
                              src={stuHireLine}
                              width='177'
                              height='24'
                              border='0'
                              alt='A Message From Scott Burmester'
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              padding: "15px 0px 25px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='340'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                              padding: "15px 0px 25px 0px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Welcome to our Worldwide MSP Newsletter
                            </span>
                            <br />
                            <br />
                            Hello MSPs! When I was given the honor of becoming
                            the MSP Program Manager, one of my first goals was
                            to facilitate better worldwide connections within
                            our amazing community. We started toward this goal
                            by creating the{" "}
                            <a
                              href=''
                              title='WW MSP Yammer Network'
                              alias='Body: WW MSP Yammer Network'
                              style={{
                                textDecoration: "underline",
                                color: "#404041",
                              }}
                            >
                              WW MSP Yammer Network
                            </a>{" "}
                            and our{" "}
                            <a
                              href=''
                              title='monthly MSP calls'
                              alias='Body: monthly MSP calls'
                              style={{
                                textDecoration: "underline",
                                color: "#404041",
                              }}
                            >
                              monthly MSP calls
                            </a>
                            , which allow us to share best practices and gain
                            insight from MSP stakeholders around the globe.
                            We’ll use this newsletter as one more worldwide
                            communication vehicle to share exclusive content,
                            program benefits and offers specifically for our
                            MSPs. We hope you enjoy!
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              padding: "15px 0px 25px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='260'
                    valign='top'
                    align='center'
                    className='block'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                      padding: "0",
                    }}
                  >
                    <img
                      src={stuHires}
                      border='0'
                      alt='Welcome to our worldwide MSP newsletter'
                      width='260'
                      className='sectionIMG'
                    />
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
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
                    width='700'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "6px 0",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='640'
                    valign='middle'
                    align='center'
                    bgcolor='#ffffff'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                    }}
                  >
                    <a
                      href=''
                      title='Microsoft Azure Offer for Students'
                      alias='Section Image: Build 2015'
                      style={{ textDecoration: "none", color: "#404041" }}
                    >
                      <img
                        src={stuStudents}
                        border='0'
                        alt='Microsoft Azure Offer for Students'
                        className='topstoryIMG'
                      />
                    </a>
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='640'
                    valign='top'
                    align='left'
                    style={{
                      color: "#404040",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "13px",
                      padding: "0",
                      msoLineHeightRule: "exactly",
                      lineHeight: "24px",
                    }}
                  >
                    <img src={stuTopStory} border='0' alt='Top Stories' />
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td width='640' bgcolor='#ffffff'>
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
                            width='540'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                              padding: "10px 0px 25px 0px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Microsoft Azure Offer for&nbsp;Students
                            </span>
                            <br />
                            <br />
                            In March, we launched a new{" "}
                            <a
                              href=''
                              title='Microsoft Azure'
                              alias='Body: Microsoft Azure'
                              style={{
                                textDecoration: "underline",
                                color: "#404041",
                              }}
                            >
                              Microsoft Azure
                            </a>{" "}
                            offer specifically for students. After receiving
                            initial feedback from our student developer
                            community, we adjusted the redemption process of the
                            offer and would now like to have our MSPs test it so
                            we can make it even better in the months to come.{" "}
                            <a
                              href=''
                              title='We welcome your feedback'
                              alias='Body: We welcome your feedback'
                              style={{
                                textDecoration: "underline",
                                color: "#404041",
                              }}
                            >
                              We welcome your&nbsp;feedback
                            </a>
                            !
                          </td>
                          <td
                            width='80'
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
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
                    width='700'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "6px 0",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='380'
                    valign='top'
                    bgcolor='#ffffff'
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
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              padding: "15px 0px 25px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='340'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                              padding: "15px 0px 25px 0px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Windows 10 Technical Preview
                            </span>
                            <br />
                            <br />
                            We’re building Windows 10 in a whole new way. You
                            can help build Windows 10 alongside PC experts, IT
                            pros, and developers from around the world through
                            the Windows Insider Program.
                            <br />
                            <br />
                            This is not only the one place to receive the latest
                            Windows 10 builds, but also a community of
                            developers who are looking to impact future versions
                            of Windows.{" "}
                            <a
                              href=''
                              title='Join the program now'
                              alias='Body: Join the program now'
                              style={{
                                textDecoration: "underline",
                                color: "#404041",
                              }}
                            >
                              Join the program&nbsp;now
                            </a>
                            !
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{
                              color: "#ffffff",
                              padding: "15px 0px 25px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='260'
                    valign='top'
                    align='center'
                    className='block'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                      padding: "0",
                    }}
                  >
                    <a
                      href=''
                      title='Windows 10 Technical Preview'
                      alias='Section Image: Windows 10 Technical Preview'
                      style={{ textDecoration: "none", color: "#fffffe" }}
                    >
                      <img
                        src={stuWin10}
                        border='0'
                        alt='Windows 10 Technical Preview'
                        width='260'
                        className='sectionIMG'
                      />
                    </a>
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
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
                    width='700'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "6px 0",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='640'
                    valign='middle'
                    align='center'
                    bgcolor='#ffffff'
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      lineHeight: "0px",
                    }}
                  >
                    <a
                      href=''
                      title='Spain MSP changing perceptions of Microsoft'
                      alias='Section Image: How do student devs'
                      style={{
                        textDecoration: "none",
                        border: "0px",
                        color: "#fffffe",
                      }}
                    >
                      <img
                        src={stuSpain}
                        border='0'
                        alt='Spain MSP changing perceptions of Microsoft'
                        className='topstoryIMG'
                      />
                    </a>
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='640'
                    valign='top'
                    align='left'
                    style={{
                      color: "#404040",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "13px",
                      padding: "0",
                      msoLineHeightRule: "exactly",
                      lineHeight: "24px",
                    }}
                  >
                    <img
                      src={stuCountryLine}
                      border='0'
                      alt='Country Spotlight'
                    />
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td width='640' bgcolor='#ffffff'>
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
                            width='560'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                              padding: "10px 0 25px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Spain MSP Changing Perceptions of&nbsp;Microsoft
                            </span>
                            <br />
                            <br />
                            Roya Change Lee carried her spirit and passion as a
                            MSP into her new role as a TE Intern.{" "}
                            <a
                              href=''
                              title='Find out how'
                              alias='Body: Find out how'
                              style={{
                                textDecoration: "underline",
                                color: "#404041",
                              }}
                            >
                              Find out how
                            </a>{" "}
                            she revitalized the MSP program in Spain to help
                            change perceptions about&nbsp;Microsoft.
                          </td>
                          <td
                            width='60'
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
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
                    width='700'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "6px 0",
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
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='640'
                    colSpan='2'
                    valign='top'
                    align='left'
                    style={{
                      color: "#404040",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "13px",
                      padding: "0",
                      msoLineHeightRule: "exactly",
                      lineHeight: "24px",
                    }}
                  >
                    <img
                      src={stuDateLine}
                      border='0'
                      alt='Key Dates + Events'
                    />
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
                    &nbsp;
                  </td>
                  <td
                    width='320'
                    className='block'
                    align='left'
                    valign='top'
                    bgcolor='#ffffff'
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
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='280'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                              padding: "10px 0 25px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Key Dates
                            </span>
                            <br />
                            <br />
                            Be sure to mark your calendars with these important
                            dates!
                            <ul>
                              <li style={{ paddingBottom: "6px" }}>
                                <a
                                  href=''
                                  title='Worldwide MSP Call: April 28, 2015'
                                  alias='Body: Worldwide MSP Call: April 28, 2015'
                                  style={{
                                    textDecoration: "underline",
                                    color: "#404041",
                                  }}
                                >
                                  Worldwide MSP Call: April 28, 2015
                                </a>
                              </li>
                              <li style={{ paddingBottom: "6px" }}>
                                <a
                                  href=''
                                  title='Build Conference Live Stream: April 29 – May 1, 2015'
                                  alias='Body: Build Conference Live Stream: April 29 – May 1, 2015'
                                  style={{
                                    textDecoration: "underline",
                                    color: "#404041",
                                  }}
                                >
                                  Build Conference Live Stream: April&nbsp;29 –
                                  May&nbsp;1,&nbsp;2015
                                </a>
                              </li>
                            </ul>
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width='320'
                    className='block'
                    align='left'
                    valign='top'
                    bgcolor='#ffffff'
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
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='280'
                            valign='top'
                            align='left'
                            style={{
                              color: "#404040",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "13px",
                              padding: "10px 0 25px",
                            }}
                          >
                            <span
                              style={{ fontSize: "22px", lineHeight: "28px" }}
                            >
                              Upcoming Events
                            </span>
                            <br />
                            <br />
                            Don’t miss out on the latest coding&nbsp;activities!
                            <ul>
                              <li style={{ paddingBottom: "6px" }}>
                                <a
                                  href=''
                                  title='Free Windows 10 Game Jams: May – June 2015. Find an event and register today!'
                                  alias='Body: Free Windows 10 Game Jams: May – June 2015. Find an event and register today!'
                                  style={{
                                    textDecoration: "underline",
                                    color: "#404041",
                                  }}
                                >
                                  Free Windows 10 Game Jams: May – June 2015.
                                  Find an event and register today!
                                </a>
                              </li>
                              <li style={{ paddingBottom: "6px" }}>
                                <a
                                  href=''
                                  title='Build Tours: May – June 2015'
                                  alias='Body: Build Tours: May – June 2015'
                                  style={{
                                    textDecoration: "underline",
                                    color: "#404041",
                                  }}
                                >
                                  Build Tours: May – June 2015
                                </a>
                              </li>
                            </ul>
                          </td>
                          <td
                            width='20'
                            valign='top'
                            align='left'
                            style={{ color: "#ffffff" }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width='30' className='mobile-hidden' bgcolor='#e6e6e6'>
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
                    width='700'
                    align='right'
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      padding: "6px 0",
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
              bgcolor='#e6e6e6'
              className='mob-320'
            >
              <tbody>
                <tr>
                  <td width='30' style={{ padding: "0px 0px 20px 0px" }}>
                    &nbsp;
                  </td>
                  <td
                    width='340'
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
                      src={stuFooter}
                      alt='Microsoft'
                      width='75'
                      height='16'
                      title='Microsoft'
                      border='0'
                      style={{ border: "none" }}
                    />
                  </td>
                  <td width='30'>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </StudentTable>
  );
}
