import styled from "styled-components";
import winLogo from "../../assets/ms/ten-img/33547_headerlogo150x35_2014-09.png";
import winSplit from "../../assets/ms/ten-img/splithero_ltr.jpg";
import winGet from "../../assets/ms/ten-img/getwin10_ltr.jpg";
import winArrow from "../../assets/ms/ten-img/33333_azure_arrowcta.png";
import winFooter from "../../assets/ms/ten-img/33547_FooterLogo125x27_2014-09.png";

const WinTHTable = styled.table`
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

export default function Win10TH() {
  return (
    <WinTHTable
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
                หน้าแรก | ทำไมต้องใช้ Windows | อุปกรณ์ล่าสุด | Windows&nbsp;10
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
                      ยินดีด้วย คุณได้ทำการจอง Windows 10 แล้ว
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
                            การอัพเกรดฟรีของคุณจะใช้ได้ตั้งแต่วันที่ 29 กรกฎาคม
                            และตอนนี้เมื่อคุณได้จองการอัพเกรดแล้ว
                            คุณจะไม่พลาดการทำงานอันยอดเยี่ยมของ Windows 10
                            แม้แต่นาทีเดียว
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
                คุณจะได้รับการแจ้งเตือนเมื่อการอัพเกรดของคุณพร้อมใช้งาน Windows
                จะจัดการการดาวน์โหลดให้พร้อมไว้ล่วงหน้าโดยอัตโนมัติ
                ซึ่งจะทำให้คุณสามารถติดตั้งและเริ่มใช้งาน Windows 10 ได้ทันที
                หรืออาจเลือกกำหนดเวลาที่สะดวกสำหรับคุณ หากคุณมีคำถามเพิ่มเติม
                โปรดอ่านข้อมูลในส่วนคำถามที่พบบ่อยในการอัพเกรด
                <br />
                <br />
                อ่านคำถามที่พบบ่อย&nbsp;&nbsp;&nbsp;
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
                แอพ ติดตั้ง Windows 10 ใช้ทำอะไรได้บ้าง
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
                คุณได้จองการอัพเกรดฟรีโดยใช้ “แอพติดตั้ง Windows 10”
                เรียบร้อยแล้ว นอกจากนี้คุณยังสามารถใช้แอพเพื่อยืนยันการจอง
                และตรวจสอบเพื่อดูว่าอุปกรณ์ของคุณสามารถใช้งานกับ Windows 10 ได้
                และยกเลิกการจองหากคุณต้องการยกเลิกการจองก่อนทำการอัพเกรดเป็น
                Windows 10
                <br />
                <br />
                เนื่องจากคุณได้จองการอัพเกรดแล้ว Windows
                จะจัดการการดาวน์โหลดให้พร้อมไว้ล่วงหน้าโดยอัตโนมัติ
                จากนั้นคุณจะได้รับการแจ้งเตือนเมื่อการอัพเกรดของคุณพร้อมติดตั้ง
                ซึ่งจะทำให้คุณสามารถเริ่มใช้งาน Windows 10 ได้ทันที
                หรืออาจเลือกกำหนดเวลาที่สะดวกสำหรับคุณ หากคุณมีคำถามเพิ่มเติม
                โปรดอ่านข้อมูลในส่วนคำถามที่พบบ่อยในการอัพเกรด
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
                  Windows 10 มีคุณสมบัติอันยอดเยี่ยมมากมาย
                </span>
                <br />
                <br />
                นอกจากคุณสมบัติอย่าง Cortana* และ Microsoft Edge
                ซึ่งเป็นเบราว์เซอร์รุ่นใหม่ของเราที่คุณอาจเคยได้ยินมาบ้างแล้ว
                Windows 10 ยังมีเครื่องมืออันน่าตื่นเต้นอื่นๆ
                อีกมากมายเพื่อช่วยคุณสร้างสรรค์งานอันยอดเยี่ยม
                <br />
                <br />
                เรียนรู้เพิ่มเติม&nbsp;&nbsp;&nbsp;
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
                  *รายละเอียดข้อเสนอ Windows
                  <br />
                  ใช่แล้ว ฟรี! ข้อเสนอการอัพเกรดนี้สำหรับ Windows 10 รุ่นสมบูรณ์
                  ไม่ใช่รุ่นทดลอง ต้องดาวน์โหลด 3GB
                  โดยมีค่าบริการข้อมูลตามมาตรฐาน ในการรับข้อเสนอฟรีนี้
                  คุณต้องอัพเกรด Windows 10 ภายในหนึ่งปีที่สามารถทำได้
                  เมื่ออัพเกรดแล้ว คุณจะใช้งาน Windows 10 ได้ฟรีบนอุปกรณ์นั้น
                  <br />
                  <br />
                  แผนกกฎหมายของเราแนะนำให้พูดว่า: ข้อเสนอการอัพเกรด Windows 10
                  ใช้ได้กับอุปกรณ์ Windows 7 และ Windows 8.1
                  ที่มีคุณสมบัติตามกำหนดรวมถึงอุปกรณ์ที่เป็นของคุณด้วย
                  อาจมีข้อกำหนดด้านฮาร์ดแวร์/ซอฟต์แวร์บางประการ
                  และคุณลักษณะที่ใช้ได้อาจแตกต่างกันไป
                  ขึ้นอยู่กับตัวอุปกรณ์และตลาด สิทธิ์การอัพเกรดเป็น Windows 10
                  สำหรับอุปกรณ์ Windows Phone 8.1 อาจแตกต่างกันไปตาม OEM
                  และผู้ให้บริการโครงข่ายโทรศัพท์มือถือ
                  จะต้องเชื่อมต่ออุปกรณ์กับอินเทอร์เน็ตและเปิดใช้งาน การอัพเดต
                  Windows ต้องมีการอัพเดต Windows 7 SP1 และ Windows 8.1
                  มีบางรุ่นที่ไม่มีสิทธิ์: Windows 7 Enterprise, Windows 8/8.1
                  Enterprise และ Windows RT/RT 8.1 ลูกค้าที่มี Software
                  Assurance แบบ Volume Licensing
                  ที่ยังใช้งานได้จะได้รับสิทธิประโยชน์ในการอัพเกรดเป็น Windows
                  10 Enterprise นอกเหนือจากข้อเสนอนี้
                  ในการตรวจสอบความเข้ากันได้ของอุปกรณ์และข้อมูลการติดตั้งที่สำคัญอื่นๆ
                  โปรดเยี่ยมชมเว็บไซต์ของผู้ผลิตอุปกรณ์ของคุณ และหน้า Windows 10
                  Specifications อาจจำเป็นต้องอัพเดตเพิ่มเติมเมื่อเวลาผ่านไป
                  การรักษาความปลอดภัยและคุณลักษณะได้รับการอัพเดตโดยอัตโนมัติซึ่งมีการเปิดใช้งานอยู่เสมอ
                  <br />
                  <br />
                  *อาจไม่มีให้ใช้งานในบางตลาด
                </em>
                <br />
                <br />
                Microsoft เคารพในความเป็นส่วนตัวของคุณ
                หากต้องการเรียนรู้เพิ่มเติม โปรดอ่านคำ ชี้แจงสิทธิ์ส่วนบุคคล
                ออนไลน์ของเรา
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
    </WinTHTable>
  );
}
