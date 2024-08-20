import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import DataStash from "../../projects/Stash/DataStash";

import tmoLogo from "../../assets/tm/tmo.svg";

export default function TMdata() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Data Stash",
      url: "/T-Mobile/Stash",
    },
  ];

  return (
    <>
      <Banner logo={tmoLogo} alt='T-Mobile' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Data Stash'>
          <b>Front End Developer</b>
          <br />
          The Data Stash click to call landing page campaign was part of
          T-Mobile's introduction of Data Stash, a free service that allowed
          users roll unused data over to the following month.
        </Copy>
        <br />
        <Viewport>
          <DataStash />
        </Viewport>
      </Article>
    </>
  );
}
