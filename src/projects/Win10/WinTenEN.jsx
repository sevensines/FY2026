import styled from "styled-components";
import winLogo from "./33547_headerlogo150x35_2014-09.png";
import winSplit from "./splithero_ltr.jpg";
import winGet from "./getwin10_ltr.jpg";
import winArrow from "./33333_azure_arrowcta.png";
import winFooter from "./33547_FooterLogo125x27_2014-09.png";

const WinTenTable = styled.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[class="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[class="sectionImg"] {
    max-width: 300px;
    min-width: 150px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
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
  @media only screen and (max-width: 767px) {
    table {
      max-width: 320px;
    }
    .block {
      display: block;
      width: 100%;
      padding: 5px 0px 5px 0px;
    }
    .mobileAdjust {
      fontsize: 24px !important;
      lineheight: 28px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;

export default function Win10EN() {
  return (
    <WinTenTable
      cellPadding='0'
      cellSpacing='0'
      border='0'
      align='center'
      bgcolor='#ffffff'
    >
      <tr>
        <td
          align='center'
          valign='top'
          bgcolor='#ffffff'
          class='bodywrap'
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
            bgcolor='#ffffff'
          >
            <tr>
              <td
                width='20'
                style={{ background: "#ffffff", lineHeight: "1px" }}
              >
                &nbsp;
              </td>
              <td
                width='150'
                style={{ background: "#ffffff", padding: "15px 0 25px" }}
              >
                <img
                  src={winLogo}
                  width='150'
                  height='35'
                  border='0'
                  align='left'
                  alt='Windows'
                />
              </td>
              <td
                width='10'
                style={{ background: "#ffffff", lineHeight: "1px" }}
              >
                &nbsp;
              </td>
              <td
                width='500'
                align='right'
                style={{
                  backgroundColor: "#ffffff",
                  color: "#999999",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "11px",
                  lineHeight: "15px",
                  padding: "15px 0 25px",
                  direction: "ltr",
                }}
              >
                Home | Why&nbsp;Windows | Latest&nbsp;Devices | Windows&nbsp;10
              </td>
              <td
                width='20'
                style={{ background: "#ffffff", lineHeight: "1px" }}
              >
                &nbsp;
              </td>
            </tr>
          </table>

          <table
            width='100%'
            cellPadding='0'
            cellSpacing='0'
            border='0'
            bgcolor='#ffffff'
          >
            <tr>
              <td
                width='700'
                colSpan='4'
                align='left'
                valign='middle'
                style={{
                  color: "#505050",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                }}
              >
                &nbsp;
              </td>
            </tr>
            <tr>
              <td
                width='400'
                align='left'
                valign='middle'
                style={{
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "32px",
                  lineHeight: "40px",
                  direction: "ltr",
                }}
                class='block'
              >
                <table
                  width='100%'
                  cellPadding='0'
                  cellSpacing='0'
                  border='0'
                  bgcolor='#ffffff'
                >
                  <tr>
                    <td width='20'>&nbsp;</td>
                    <td
                      width='370'
                      align='left'
                      valign='middle'
                      style={{
                        color: "#0078d7",
                        fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                        fontSize: "26px",
                        lineHeight: "32px",
                        fontWeight: "100",
                        padding: "0 0 30px",
                        direction: "ltr",
                      }}
                    >
                      Congratulations on reserving Windows 10
                      <table
                        width='100%'
                        cellPadding='0'
                        cellSpacing='0'
                        border='0'
                        bgcolor='#ffffff'
                      >
                        <tr>
                          <td
                            width='370'
                            align='left'
                            valign='top'
                            style={{
                              color: "#000000",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px 0px 0px",
                              direction: "ltr",
                            }}
                          >
                            Your free upgrade is coming in August, and now that
                            you’ve reserved it, you won’t miss a minute of
                            Windows 10 helping you do great things.
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width='10'>&nbsp;</td>
                  </tr>
                </table>
              </td>
              <td
                width='300'
                align='right'
                valign='top'
                style={{
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "32px",
                  lineHeight: "40px",
                  direction: "ltr",
                }}
                class='block'
              >
                <img
                  src={winSplit}
                  width='300'
                  height='339'
                  border='0'
                  alt='Windows 10'
                  class='sectionImg'
                />
              </td>
            </tr>
          </table>

          <table
            width='100%'
            cellPadding='0'
            cellSpacing='0'
            border='0'
            bgcolor='#0078d7'
          >
            <tr>
              <td
                width='700'
                colSpan='3'
                align='left'
                valign='middle'
                style={{
                  color: "#505050",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                }}
              >
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width='20'>&nbsp;</td>
              <td
                width='660'
                align='left'
                valign='middle'
                style={{
                  color: "#ffffff",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "16px",
                  lineHeight: "20px",
                  padding: "5px 0px 0px 0px",
                  direction: "ltr",
                }}
              >
                You’ll get a notification when your upgrade is ready. Windows
                will automatically take care of the download in advance. That
                way you can install and start using Windows 10 immediately – or
                schedule a time that’s convenient for you. If you have any more
                questions, check out the upgrade FAQ.
                <br />
                <br />
                Read the FAQ&nbsp;&nbsp;&nbsp;
                <img src={winArrow} width='16' height='16' border='0' />
              </td>
              <td width='20'>&nbsp;</td>
            </tr>
            <tr>
              <td
                width='700'
                colSpan='3'
                align='left'
                valign='middle'
                style={{
                  color: "#505050",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </table>

          <table
            width='100%'
            cellPadding='0'
            cellSpacing='0'
            border='0'
            bgcolor='#ffffff'
          >
            <tr>
              <td
                width='700'
                colSpan='3'
                align='left'
                valign='middle'
                style={{
                  color: "#ffffff",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                }}
              >
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width='20'>&nbsp;</td>
              <td
                width='660'
                align='center'
                valign='top'
                style={{
                  color: "#0078d7",
                  fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                  fontSize: "26px",
                  lineHeight: "32px",
                  fontWeight: "100",
                  padding: "0 0 30px",
                  direction: "ltr",
                }}
              >
                What’s in the “Get Windows 10” app?
              </td>
              <td width='20'>&nbsp;</td>
            </tr>
            <tr>
              <td
                width='700'
                colSpan='3'
                align='center'
                valign='middle'
                style={{
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                }}
              >
                <img
                  src={winGet}
                  width='600'
                  height='383'
                  border='0'
                  alt='Get Windows 10'
                  class='hero'
                />
              </td>
            </tr>
            <tr>
              <td width='20'>&nbsp;</td>
              <td
                width='660'
                align='left'
                valign='top'
                style={{
                  padding: "10px 0 40px",
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "16px",
                  lineHeight: "22px",
                  direction: "ltr",
                }}
              >
                You’ve just reserved your free upgrade using the “Get Windows 10
                app”. You can also use the app to confirm the reservation, check
                to see if your device is compatible with Windows 10, and
                un-reserve if you wish to cancel your reservation prior to your
                Windows 10 upgrade.
              </td>
              <td width='20'>&nbsp;</td>
            </tr>
          </table>

          <table
            width='100%'
            cellPadding='0'
            cellSpacing='0'
            border='0'
            bgcolor='#0078d7'
          >
            <tr>
              <td
                width='700'
                colSpan='3'
                align='left'
                valign='middle'
                style={{
                  color: "#505050",
                  fontFamily: "Segoe UI&,Arial,sans-serif",
                }}
              >
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width='20'>&nbsp;</td>
              <td
                width='660'
                align='left'
                valign='middle'
                style={{
                  color: "#ffffff",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "16px",
                  lineHeight: "20px",
                  padding: "5px 0px 15px 0px",
                  direction: "ltr",
                }}
              >
                <span
                  style={{
                    fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                    fontSize: "26px",
                    lineHeight: "32px",
                    fontWeight: "100",
                  }}
                >
                  Windows 10 is full of great features
                </span>
                <br />
                <br />
                In addition to features you many have heard about such as
                Cortana and our new web browser, Windows 10 contains lots of
                other exciting tools to help you do great things.
                <br />
                <br />
                Learn more&nbsp;&nbsp;&nbsp;
                <img src={winArrow} width='16' height='16' border='0' />
              </td>
              <td width='20'>&nbsp;</td>
            </tr>
            <tr>
              <td
                width='700'
                colSpan='3'
                align='left'
                valign='middle'
                style={{
                  color: "#505050",
                  fontFamily: "Segoe UI&,Arial,sans-serif",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </table>

          <table
            width='100%'
            cellPadding='0'
            cellSpacing='0'
            border='0'
            bgcolor='#d2d2d2'
          >
            <tr>
              <td
                width='30'
                style={{ background: "#d2d2d2", lineHeight: "1px" }}
              >
                &nbsp;
              </td>
              <td
                width='640'
                align='left'
                valign='top'
                style={{
                  background: "#d2d2d2",
                  color: "#4d4d4d",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "10px",
                  padding: "20px 0",
                  direction: "ltr",
                }}
              >
                <em>
                  Windows Offer Details
                  <br />
                  Windows 10 is a free upgrade, for a limited time, for
                  qualified Windows 7 and Windows 8.1 devices (including devices
                  you already own). It is our intent that most of these devices
                  will qualify, but some hardware/software requirements apply
                  and feature availability may vary by device. The availability
                  of Windows 10 upgrade for Windows Phone 8.1 devices may vary
                  by OEM, mobile operator or carrier. Devices must be connected
                  to the internet and have Windows Update enabled. ISP fees may
                  apply. Windows 7 SP1 and Windows 8.1 Update required. Some
                  editions are excluded: Windows 7 Enterprise, Windows 8/8.1
                  Enterprise, and Windows RT/RT 8.1. Active Software Assurance
                  customers in volume licensing have the benefit to upgrade to
                  Windows 10 enterprise offerings outside of this offer. To
                  check for compatibility and other important installation
                  information, visit your device manufacturer’s website and the
                  www.windows.com/windows10specs.
                </em>
                <br />
                <br />
                Microsoft respects your privacy. Please read our online Privacy
                Statement.
              </td>
              <td
                width='30'
                style={{ background: "#d2d2d2", lineHeight: "1px" }}
              >
                &nbsp;
              </td>
            </tr>
          </table>

          <table
            width='100%'
            cellPadding='0'
            cellSpacing='0'
            border='0'
            bgcolor='#d2d2d2'
          >
            <tr>
              <td
                width='30'
                style={{
                  background: "#d2d2d2",
                  lineHeight: "1px",
                  padding: "0px 0px 15px 0px",
                }}
              >
                &nbsp;
              </td>
              <td
                width='395'
                valign='top'
                align='left'
                style={{
                  background: "#d2d2d2",
                  color: "#4d4d4d",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "10px",
                  padding: "0px 0px 15px 0px",
                }}
              >
                Microsoft Corporation
                <br />
                One Microsoft Way
                <br />
                Redmond, WA 98052 USA
              </td>
              <td
                width='20'
                valign='top'
                align='left'
                style={{
                  background: "#d2d2d2",
                  color: "#4c4c4c",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "11px",
                  padding: "0px 0px 15px 0px",
                }}
              >
                &nbsp;
              </td>
              <td
                width='125'
                valign='bottom'
                align='right'
                style={{
                  background: "#d2d2d2",
                  color: "#4c4c4c",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "11px",
                  padding: "0px 0px 15px 0px",
                }}
              >
                <img
                  src={winFooter}
                  width='125'
                  height='27'
                  border='0'
                  align='left'
                  alt='Microsoft'
                />
              </td>
              <td
                width='30'
                style={{
                  background: "#d2d2d2",
                  lineHeight: "1px",
                  padding: "0px 0px 15px 0px",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </WinTenTable>
  );
}
