import styled from "styled-components";
/* import ezHeader from "../../../public/images/ms/xpz-img/33522_MS_Logo_Header_2014-10.png";
import ezLogo from "../../../public/images/ms/xpz-img/33522_EZNews_Logo_Header_2014-10.png";
import ezHero from "../../../public/images/ms/xpz-img/33522_ez_hero.jpg";
import ezFooter from "../../../public/images/ms/xpz-img/33417_CloudOS_LogoMicrosoft.png";
import ezArrowGrn from "../../../public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png";
import ezEntry from "../../../public/images/ms/xpz-img/33522_ez_enter.jpg";
import ezWinPC from "../../../public/images/ms/xpz-img/33522_ez_winpc.jpg";
import ezBanner from "../../../public/images/ms/xpz-img/33522_IntNL_BannerLogo_2015-02.png"; */

const ExpertENTable = styled.table`
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
  @media only screen and (max-width: 480px) {
    .mobileAdjust {
      fontsize: 16px !important;
      lineheight: 18px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;

export default function ExpertEN() {
  return (
    <ExpertENTable cellPadding='0' cellSpacing='0' border='0' align='center'>
      <tbody>
        <tr>
          <td
            align='center'
            valign='top'
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
              bgcolor='#107c10'
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
                            width='576'
                            valign='middle'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 10px 0px",
                            }}
                          >
                            &nbsp;
                          </td>
                          <td
                            width='94'
                            valign='middle'
                            style={{
                              color: "#ffffff",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              padding: "20px 0px 10px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Microsoft'
                              alias='Header Image: Microsoft'
                              style={{ textDecoration: "none" }}
                            >
                              <img
                                src='/public/images/ms/xpz-img/33522_MS_Logo_Header_2014-10.png'
                                width='94'
                                height='19'
                                border='0'
                                alt='Microsoft'
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
                              padding: "20px 0px 10px 0px",
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
                              padding: "0px 0px 20px 0px",
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
                              padding: "0px 0px 20px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='ExpertZone News'
                              alias='Header Image: ExpertZone News'
                              style={{
                                textDecoration: "none",
                                color: "#fffffe",
                              }}
                            >
                              <img
                                src='/public/images/ms/xpz-img/33522_EZNews_Logo_Header_2014-10.png'
                                class='bannerScale'
                                width='372'
                                height='56'
                                border='0'
                                alt='ExpertZone News'
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
              bgcolor='#107c10'
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
                  >
                    <a
                      href=''
                      title='Get your customers ready to play'
                      alias='Hero Image: Tons of blockbuster games make this the best year ever for Xbox One.'
                      style={{ textDecoration: "none", color: "#fffffe" }}
                    >
                      <img
                        src='/public/images/ms/xpz-img/33522_ez_hero.jpg'
                        class='hero'
                        width='700'
                        height='390'
                        border='0'
                        alt='Tons of blockbuster games make this the best year ever for Xbox One.'
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
              bgcolor='#107c10'
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
                      fontFamily: "Segoe UI Light, Segoe UI,Arial,sans-serif",
                      fontSize: "36px",
                      fontWeight: "100",
                      lineHeight: "40px",
                      padding: "20px 0px 20px 0px",
                    }}
                    class='mobileAdjust'
                  >
                    Tons of blockbuster games make this the best year ever for
                    Xbox&nbsp;One.
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
                      bgcolor='#ffffff'
                    >
                      <tbody>
                        <tr>
                          <td
                            width='10'
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
                            width='169'
                            valign='middle'
                            align='left'
                            style={{
                              color: "#505051",
                              fontFamily: "Segoe UI,Arial,sans-serif",
                              fontSize: "14px",
                              fontWeight: "bold",
                              lineHeight: "17px",
                              padding: "20px 0px 20px 0px",
                            }}
                          >
                            <a
                              href=''
                              title='Get your customers ready to play'
                              alias='Hero CTA: Get your customers ready to play'
                              style={{ color: "#505050" }}
                            >
                              Get your customers ready to play
                            </a>
                          </td>
                          <td
                            width='10'
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
                            width='6'
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
                            <a
                              href=''
                              title='Get your customers ready to play'
                              alias='Hero CTA Arrow: Get your customers ready to play'
                              style={{
                                color: "#107c10",
                                textDecoration: "none !important",
                              }}
                            >
                              <img
                                src='/public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png'
                                width='6'
                                height='12'
                                alt='▶'
                                border='0'
                              />
                            </a>
                          </td>
                          <td
                            width='10'
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
                    width='300'
                    valign='top'
                    align='left'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      lineHeight: "1px",
                    }}
                  >
                    <a
                      href=''
                      title='Help customers discover the newest, coolest games, apps, and music'
                      alias='Story 1 Image: Help customers discover the newest, coolest games, apps, and music'
                      style={{ color: "#107c10", textDecoration: "none" }}
                    >
                      <img
                        src='/public/images/ms/xpz-img/33522_ez_enter.jpg'
                        class='sectionImg'
                        border='0'
                        alt='Keep everybody entertained with Windows.'
                      />
                    </a>
                  </td>
                  <td
                    width='400'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "10px 0px 20px 0px",
                    }}
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
                            width='30'
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
                            width='340'
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
                                color: "#505050",
                                fontSize: "36px",
                                lineHeight: "40px",
                                fontFamily:
                                  "Segoe UI Light,Segoe UI,Arial,sans-serif",
                                fontWeight: "100",
                              }}
                              class='mobileAdjust'
                            >
                              Keep everybody entertained with Windows.
                            </span>
                            <br />
                            <br />
                            <a
                              href=''
                              title='Help customers discover the newest, coolest games, apps, and music'
                              alias='Story 1 CTA: Help customers discover the newest, coolest games, apps, and music'
                              style={{ color: "#107c10", fontWeight: "bold" }}
                              class='mobileAdjust'
                            >
                              Help customers discover new games, apps,
                              and&nbsp;music
                            </a>
                            &nbsp;
                            <a
                              href=''
                              title='Help customers discover the newest, coolest games, apps, and music'
                              alias='Story 1 CTA Arrow: Help customers discover the newest, coolest games, apps, and music'
                              style={{
                                color: "#107c10",
                                textDecoration: "none !important",
                              }}
                            >
                              <img
                                src='/public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png'
                                width='6'
                                height='12'
                                alt='▶'
                                border='0'
                              />
                            </a>
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
              bgcolor='#e5e5e5'
            >
              <tbody>
                <tr>
                  <td
                    width='400'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      padding: "10px 0px",
                    }}
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
                            width='30'
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
                            width='320'
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
                                color: "#505050",
                                fontSize: "36px",
                                lineHeight: "40px",
                                fontFamily:
                                  "Segoe UI Light,Segoe UI,Arial,sans-serif",
                                fontWeight: "100",
                              }}
                              class='mobileAdjust'
                            >
                              The fun is just getting started with
                              Windows&nbsp;10.
                            </span>
                            <br />
                            <br />
                            <a
                              href=''
                              title='See how Cortana, Continuum, and Xbox on Windows are changing the future'
                              alias='Story 2 CTA: See how Xbox on Windows, Cortana, and Continuum are changing the future'
                              style={{ color: "#107c10", fontWeight: "bold" }}
                              class='mobileAdjust'
                            >
                              See how Cortana and Continuum are changing the
                              future
                            </a>
                            &nbsp;
                            <a
                              href=''
                              title='See how Cortana, Continuum, and Xbox on Windows are changing the future'
                              alias='Story 2 CTA Arrow: See how Xbox on Windows, Cortana, and Continuum are changing the future'
                              style={{
                                color: "#107c10",
                                textDecoration: "none !important",
                              }}
                            >
                              <img
                                src='/public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png'
                                width='6'
                                height='12'
                                alt='▶'
                                border='0'
                              />
                            </a>
                          </td>
                          <td
                            width='50'
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
                    width='300'
                    valign='top'
                    align='left'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      lineHeight: "1px",
                    }}
                  >
                    <a
                      href=''
                      title='See how Cortana, Continuum, and Xbox on Windows are changing the future'
                      alias='Story 2 Image: See how Xbox on Windows, Cortana, and Continuum are changing the future'
                      style={{ textDecoration: "none", color: "#107c10" }}
                    >
                      <img
                        src='/public/images/ms/xpz-img/33522_ez_winpc.jpg'
                        class='sectionImg'
                        border='0'
                        alt='The fun is just getting started with Windows 10.'
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
              bgcolor='#3a3a3a'
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
                      padding: "30px 0px 30px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='110'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#ffffff",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "36px",
                      fontWeight: "100",
                      lineHeight: "40px",
                      padding: "30px 0px 30px 0px",
                    }}
                  >
                    <a
                      href=''
                      title='Using Windows 10? Share your thoughts using #EZWindowsInsider'
                      alias='Social Banner Image: Using Windows 10? Share your thoughts using #EZWindowsInsider'
                      style={{ textDecoration: "none", color: "#5dc21e" }}
                    >
                      <img
                        src='/public/images/ms/xpz-img/33522_IntNL_BannerLogo_2015-02.png'
                        width='110'
                        height='110'
                        border='0'
                        alt='EZ'
                      />
                    </a>
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
                      padding: "30px 0px 30px 0px",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    width='500'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#5dc21e",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      padding: "30px 0px 30px 0px",
                    }}
                  >
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "36px",
                        lineHeight: "40px",
                        fontFamily: "Segoe UI Light,Segoe UI,Arial,sans-serif",
                        fontWeight: "100",
                      }}
                      class='mobileAdjust'
                    >
                      Using Windows 10? Share your thoughts using
                      #EZWindowsInsider
                    </span>
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
                      padding: "30px 0px 30px 0px",
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
                    width='30'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#505050",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "10px 0px 10px 0px",
                    }}
                  ></td>
                  <td
                    width='505'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#505050",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "10px 0px 10px 0px",
                    }}
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
                    valign='middle'
                    align='left'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "10px 0px 10px 0px",
                    }}
                  ></td>
                  <td
                    width='105'
                    valign='bottom'
                    align='left'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "10px 0px 10px 0px",
                    }}
                  >
                    <a
                      href=''
                      title='Microsoft'
                      alias='Footer  Image: Microsoft'
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src='/public/images/ms/xpz-img/33417_CloudOS_LogoMicrosoft.png'
                        alt='Microsoft'
                        border='0'
                      />
                    </a>
                  </td>
                  <td
                    width='30'
                    valign='middle'
                    align='left'
                    style={{
                      color: "#444444",
                      fontFamily: "Segoe UI,Arial,sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      padding: "10px 0px 10px 0px",
                    }}
                  ></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </ExpertENTable>
  );
}
