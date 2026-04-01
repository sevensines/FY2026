import styled from "styled-components";
/* import winLogo from "../../../public/images/ms/ten-img/33547_headerlogo150x35_2014-09.png";
import winSplit from "../../../public/images/ms/ten-img/splithero_rtl.jpg";
import winGet from "../../../public/images/ms/ten-img/getwin10_rtl.jpg";
import winArrow from "../../../public/images/ms/ten-img/33333_azure_arrowcta.png";
import winFooter from "../../../public/images/ms/ten-img/33547_FooterLogo125x27_2014-09.png"; */

const WinHETable = styled.table`
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
  .dsk-hidden {
    display: none;
  }
  .mbl-hidden {
    display: inline-block;
  }
  @media only screen and (max-width: 767px) {
    table {
      max-width: 320px;
    }
    .mbl-hidden {
      display: none;
      visibility: none;
    }
    .dsk-hidden {
      display: block;
    }
    .block {
      display: block;
      width: 100%;
      padding: 5px 0px 5px 0px;
    }
    .mobileAdjust {
      font-size: 24px !important;
      line-height: 28px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;

export default function Win10HE() {
  return (
    <WinHETable
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
                width='500'
                align='left'
                style={{
                  backgroundColor: "#ffffff",
                  color: "#999999",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "11px",
                  lineHeight: "15px",
                  padding: "15px 0 25px",
                  direction: "rtl",
                }}
              >
                בית | מדוע Windows | המכשירים העדכניים ביותר | Windows&nbsp;10
              </td>
              <td
                width='10'
                style={{ background: "#ffffff", lineHeight: "1px" }}
              >
                &nbsp;
              </td>
              <td
                width='150'
                style={{ background: "#ffffff", padding: "15px 0 25px" }}
              >
                <img
                  src='/public/images/ms/ten-img/33547_headerlogo150x35_2014-09.png'
                  width='150'
                  height='35'
                  border='0'
                  align='left'
                  alt='Windows'
                />
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
                colSpan='2'
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
                width='300'
                align='left'
                valign='top'
                style={{
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "32px",
                  lineHeight: "40px",
                  direction: "rtl",
                }}
                class='block'
              >
                <img
                  src='/public/images/ms/ten-img/splithero_rtl.jpg'
                  width='300'
                  height='339'
                  border='0'
                  alt='Windows 10'
                  class='sectionImg'
                />
              </td>
              <td
                width='400'
                align='right'
                valign='middle'
                style={{
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "32px",
                  lineHeight: "40px",
                  direction: "rtl",
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
                      align='right'
                      valign='middle'
                      style={{
                        color: "#0078d7",
                        fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                        fontSize: "26px",
                        lineHeight: "32px",
                        fontWeight: "100",
                        padding: "0 0 30px",
                        direction: "rtl",
                      }}
                    >
                      השדרוג החינמי שלך יגיע באוגוסט, וכעת, ולאחר ששריינת אותו,
                      לא תחמיץ אף דקה מחוויית Windows 10, שתסייע לך לבצע דברים
                      נהדרים.
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
                            align='right'
                            valign='top'
                            style={{
                              color: "#000000",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "16px",
                              lineHeight: "20px",
                              padding: "5px 0px 0px 0px",
                              direction: "rtl",
                            }}
                          >
                            לאחר שהוא יהיה זמין ב-29 ביולי, Windows 10 יורד
                            למכשיר שלך. תקבל הודעה כשהיא תהיה מוכנה להתקנה —
                            תוכל להתקין אותה מיד או לבחור מועד נוח יותר עבורך.
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width='10'>&nbsp;</td>
                  </tr>
                </table>
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
                align='right'
                valign='middle'
                style={{
                  color: "#ffffff",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "16px",
                  lineHeight: "20px",
                  padding: "5px 0px 0px 0px",
                  direction: "rtl",
                }}
              >
                היות ושריינת לעצמך שדרוג, Windows תתכונן להורדה באופן אוטומטי.
                לאחר מכן תקבל הודעה כשהשדרוג יהיה מוכן להתקנה. כך תוכל להתקין
                ולהתחיל להשתמש מיד ב- Windows 10 - או שתוכל לתזמן מועד התקנה נוח
                יותר עבורך. לשאלות נוספות, קרא את השאלות הנפוצות בנושא השדרוג.
                <br />
                <br />
                להתקין ולהתחיל להשתמש ב- Windows 10&nbsp;
                <img
                  src='/public/images/ms/ten-img/33333_azure_arrowcta.png'
                  width='16'
                  height='16'
                  border='0'
                />
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
                  direction: "rtl",
                }}
              >
                מהי אפליקציית Get Windows 10?
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
                  src='/public/images/ms/ten-img/getwin10_rtl.jpg'
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
                align='right'
                valign='top'
                style={{
                  padding: "10px 0 40px",
                  color: "#000000",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "16px",
                  lineHeight: "22px",
                  direction: "rtl",
                }}
              >
                זה עתה שריינת עבורך שדרוג חינמי באמצעות שימוש באפליקציית "קבל את
                Windows 10". באפשרותך להשתמש באפליקציה גם כדי לוודא את הזמנתך,
                לבדוק אם המכשיר שלך תואם ל- Windows 10 ולבטל את הזמנתך טרם
                השדרוג ל- Windows&nbsp;10.
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
                align='right'
                valign='middle'
                style={{
                  color: "#ffffff",
                  fontFamily: "Segoe UI,Arial,sans-serif",
                  fontSize: "16px",
                  lineHeight: "20px",
                  padding: "5px 0px 15px 0px",
                  direction: "rtl",
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
                  Windows 10 מלאה בתכונות נהדרות
                </span>
                <br />
                <br />
                בנוסף לתכונות שבוודאי שמעת עליהן, כגון Cortana* ודפדפן האינטרנט
                החדש שלנו, Microsoft Edge, Windows 10 מכילה כלים מלהיבים רבים
                נוספים שיסייעו לך לבצע דברים נהדרים.
                <br />
                <br />
                למידע נוסף&nbsp;&nbsp;&nbsp;
                <img
                  src='/public/images/ms/ten-img/33333_azure_arrowcta.png'
                  width='16'
                  height='16'
                  border='0'
                />
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
                  direction: "rtl",
                }}
              >
                <em>
                  פרטי מבצע Windows
                  <br />
                  כן, בחינם! מבצע שדרוג זה הוא עבור גרסה מלאה של Windows 10, לא
                  גירסת ניסיון. נדרשת הורדה של 3GB; חלים תעריפי נתונים רגילים.
                  כדי לנצל מבצע חינמי זה, עליך לשדרג ל-Windows 10 תוך שנת זמינות
                  אחת. לאחר השדרוג, תקבל את Windows 10 ללא תשלום במכשיר זה.
                  <br />
                  <br />
                  עורכי הדין שלנו הכריחו אותנו לומר זאת:
                  <br />
                  מבצע שדרוג Windows 10 זמין עבור מכשירי Windows 7- Windows 8.1
                  זכאים, כולל מכשירים הנמצאים כבר ברשותך. דרישות חומרה/תוכנה
                  מסוימות חלות וזמינות התכונות עשויה להשתנות בהתאם למכשיר ולשוק.
                  זמינות השדרוג ל- Windows 10 עבור מכשירי Windows Phone 8.1
                  עשויה להשתנות בהתאם ליצרן (OEM), למפעיל, או לספק הסלולאר.
                  המכשירים חייבים להיות מחוברים לאינטרנט - Windows Update צריך
                  להיות זמין. נדרשים Windows 7 SP1 - Windows 8.1 Update. מהדורות
                  מסוימות אינן נכללות: Windows 7 Enterprise, Windows 8/8.1
                  Enterprise - Windows RT/RT 8.1. לקוחות Software Assurance
                  פעילים ברישוי רב משתמשים זכאים לשדרוג ל- Windows 10 במסגרת
                  מבצעים לארגונים, מלבד מבצע זה. כדי לבדוק את התאימות ומידע חשוב
                  אחר אודות ההתקנה, בקר באתר האינטרנט של יצרן המכשיר ובדף המפרט
                  של Windows 10. ייתכן שעם הזמן יחולו דרישות נוספות עבור
                  עדכונים. האבטחה והתכונות מתעדכנות באופן אוטומטי ותכונה זו
                  זמינה תמיד.
                  <br />
                  <br />
                  *לא זמין בכל השווקים.
                </em>
                <br />
                <br />
                חברת Microsoft מכבדת את פרטיותך.
                <br />
                למידע נוסף, קרא את הצהרת הפרטיות המקוונת שלנו.
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
                  src='/public/images/ms/ten-img/33547_FooterLogo125x27_2014-09.png'
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
    </WinHETable>
  );
}
