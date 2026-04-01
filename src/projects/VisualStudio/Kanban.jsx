import styled from "styled-components";
/* import vstHeader from "../../../public/images/ms/vst-img/VSO_HeaderLogo2_2015-02.png";
import vstKanban from "../../../public/images/ms/vst-img/33542_VSO_Agile_Kanban.gif";
import vstArrow from "../../../public/images/ms/vst-img/33333_Azure_ArrowCTA.png";
import vstFooter from "../../../public/images/ms/vst-img/ms-logo-metro-generic-bk.gif"; */

const VSTable = styled.table`
  .bodywrap {
    max-width: 600px;
    margin: auto;
  }
  @media only screen and (max-width: 767px) {
    .block {
      display: block;
      width: 100%;
    }
  }
  img[className="gif"] {
    max-width: 565px;
    width: 100% !important;
    height: auto !important;
  }
  img[className="video"] {
    max-width: 450px;
    width: 100% !important;
    height: auto !important;
  }
`;

export default function Kanban() {
  return (
    <VSTable cellPadding='0' cellSpacing='0' border='0' align='center'>
      <tbody>
        <tr>
          <td
            align='center'
            valign='top'
            bgcolor='#ffffff'
            className='bodywrap'
            style={{
              width: "600px",
              fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
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
              bgcolor='#68217a'
            >
              <tbody>
                <tr>
                  <td
                    width='25'
                    valign='top'
                    align='left'
                    style={{ padding: "2px 0" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='575'
                    height='25'
                    align='left'
                    valign='middle'
                    style={{ padding: "10px 0" }}
                  >
                    <a
                      href=''
                      style={{ textDecoration: "none" }}
                      alias='Banner: Visual Studio Online'
                      title='Visual Studio Online'
                    >
                      <img
                        src='/public/images/ms/vst-img/VSO_HeaderLogo2_2015-02.png'
                        alt='Visual Studio Online'
                        style={{ display: "block" }}
                        border='0'
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
            >
              <tbody>
                <tr>
                  <td
                    width='15'
                    valign='top'
                    align='left'
                    style={{ paddingTop: "0" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='565'
                    valign='top'
                    align='left'
                    className='scaling'
                    style={{
                      fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#292929",
                    }}
                  >
                    <br />
                    <br />
                    <span
                      style={{
                        color: "#68217a",
                        fontFamily: "Segoe UI,Helvetica,Arial,sans-serif",
                        fontSize: "20px",
                        lineHeight: "25px",
                      }}
                    >
                      Here’s how easy it is to start your backlog:
                    </span>
                    <br />
                    <br />
                    <a
                      href=''
                      title='Start Your Backlog'
                      alias='Body Image: Start Your Backlog'
                      style={{ color: "#0044cc", textDecoration: "none" }}
                    >
                      <img
                        src='/public/images/ms/vst-img/33542_VSO_Agile_Kanban.gif'
                        width='565'
                        height='342'
                        border='0'
                        alt='start your backlog'
                        className='gif'
                      />
                    </a>
                    <br />
                    <br />
                    That’s it! Now you’re ready to check in code, invite more
                    team members, or add more backlog items to get your project
                    started. For a full walk-through on backlogs and other
                    Visual Studio Online features, check out our{" "}
                    <a
                      href=''
                      title='Getting Started Guide'
                      alias='Body: Getting Started Guide'
                      style={{ color: "#0060a6", textDecoration: "none" }}
                    >
                      Getting Started Guide
                    </a>
                    .
                    <br />
                    <br />
                    <table
                      cellPadding='0'
                      cellSpacing='0'
                      border='0'
                      bgcolor='#68217a'
                    >
                      <tbody>
                        <tr>
                          <td width='15'>&nbsp;</td>
                          <td
                            align='left'
                            valign='middle'
                            style={{
                              color: "#f0f0f0",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "12px",
                              lineHeight: "15px",
                              padding: "7px 0",
                            }}
                          >
                            <a
                              href=''
                              title='Getting Started Guide'
                              alias='CTA: Getting Started Guide'
                              style={{
                                color: "#ffffff",
                                textDecoration: "none",
                              }}
                            >
                              Getting Started Guide
                            </a>
                          </td>
                          <td width='15'>&nbsp;</td>
                          <td
                            align='right'
                            valign='middle'
                            width='28'
                            style={{
                              color: "#f0f0f0",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "18px",
                              padding: "7px 0",
                            }}
                          >
                            <a
                              href=''
                              title='Getting Started Guide'
                              alias='CTA: Getting Started Guide'
                              style={{
                                color: "#ffffff",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                src='/public/images/ms/vst-img/33333_Azure_ArrowCTA.png'
                                width='20'
                                height='20'
                                border='0'
                              />
                            </a>
                          </td>
                          <td width='10'>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                    <span
                      style={{
                        color: "#68217a",
                        fontFamily: "Segoe UI,Helvetica,Arial,sans-serif",
                        fontSize: "20px",
                        fontWeight: "100",
                        lineHeight: "30px",
                      }}
                    >
                      Answers. Insights. Expertise.
                    </span>
                    <br />
                    Need an answer? Have an answer? We deploy new bits to Visual
                    Studio Online every 3 weeks, so you can shape the service
                    with your feedback via:{" "}
                    <a
                      href=''
                      title='UserVoice portal'
                      alias='Body: UserVoice Portal'
                      style={{ color: "#0060a6", textDecoration: "none" }}
                    >
                      UserVoice portal
                    </a>
                    ,{" "}
                    <a
                      href=''
                      title='MSDN Forums'
                      alias='Body: MSDN forums'
                      style={{ color: "#0060a6", textDecoration: "none" }}
                    >
                      MSDN forums
                    </a>{" "}
                    or mention #VSOnline on Twitter. And make sure to check out{" "}
                    <a
                      href=''
                      title='Brian Harry’s blog'
                      alias='Body: Brian Harry’s Blog'
                      style={{ color: "#0060a6", textDecoration: "none" }}
                    >
                      Brian Harry’s blog
                    </a>{" "}
                    as he goes into the details about how new Visual Studio
                    Online features will help your team!
                    <br />
                    <br />
                    <br />
                    Cheers,
                    <br />
                    The Visual Studio Online team
                    <br />
                    <br />
                  </td>
                  <td
                    width='20'
                    valign='top'
                    align='left'
                    style={{ paddingTop: "0" }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              cellPadding='0'
              cellSpacing='0'
              border='0'
              width='100%'
              bgcolor='#ffffff'
            >
              <tbody>
                <tr>
                  <td
                    colSpan='3'
                    width='600'
                    style={{
                      color: "#000000",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "12px",
                      lineHeight: "20px",
                      borderTop: "1px solid #d2d2d2",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td
                    width='15'
                    bgcolor='#ffffff'
                    style={{ lineHeight: "1px" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='565'
                    valign='top'
                    align='left'
                    bgcolor='#ffffff'
                    style={{
                      fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#292929",
                    }}
                  >
                    <span
                      style={{
                        color: "#68217a",
                        fontFamily: "Segoe UI,Helvetica,Arial,sans-serif",
                        fontSize: "20px",
                        fontWeight: "100",
                        lineHeight: "30px",
                      }}
                    >
                      Useful Links
                    </span>
                    <br />
                    <a
                      href=''
                      title='Visual Studio News'
                      alias='Body: Visual Studio News'
                      style={{ color: "#0060a6", textDecoration: "none" }}
                    >
                      Visual Studio News
                    </a>
                    <br />
                    <a
                      href=''
                      title='Visual Studio Online Support'
                      alias='Body: Visual Studio Online Support'
                      style={{ color: "#0060a6", textDecoration: "none" }}
                    >
                      Visual Studio Online Support
                    </a>
                  </td>
                  <td
                    width='20'
                    bgcolor='#ffffff'
                    style={{ lineHeight: "1px" }}
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan='3'
                    width='600'
                    style={{
                      color: "#000000",
                      fontFamily: "Segoe UI,Arial,sans-serif",
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
              cellPadding='0'
              cellSpacing='0'
              border='0'
              width='100%'
              bgcolor='#eeeeee'
            >
              <tbody>
                <tr>
                  <td
                    width='45'
                    valign='top'
                    align='left'
                    style={{ paddingBottom: "13px" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='445'
                    style={{
                      fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
                      fontSize: "10px",
                      color: "#505050",
                    }}
                  >
                    Microsoft Corporation | One Microsoft Way | Redmond, WA
                    98052 USA
                  </td>
                  <td width='60' align='right'>
                    <a href='http://www.microsoft.com/' target='_blank'>
                      <img
                        src='/public/images/ms/vst-img/ms-logo-metro-generic-bk.gif'
                        wdith='60'
                        height='11'
                        alt='Microsoft'
                        border='0'
                        style={{ display: "block" }}
                      />
                    </a>
                  </td>
                  <td
                    width='45'
                    valign='top'
                    align='left'
                    style={{ paddingBottom: "13px" }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </VSTable>
  );
}
