"use client";

import React from "react";
import { JaaSMeeting, SpinnerView } from "@jitsi/react-sdk";

function StartMeeting({ uuid, jwtToken }) {
  const room = uuid;

  return (
    <JaaSMeeting
      appId={process.env.NEXT_PUBLIC_JITSI_APP_ID}
      roomName={room}
      release = "release-5628"
      domain={"8x8.vc"}
      jwt={jwtToken}
      configOverwrite={{
        disableLocalVideoFlip: true,
        backgroundAlpha: 0.5,
      }}
      interfaceConfigOverwrite={{
        VIDEO_LAYOUT_FIT: "nocrop",
        MOBILE_APP_PROMO: false,
        TILE_VIEW_MAX_COLUMNS: 4,
      }}
      // spinner = { SpinnerView }
      // onApiReady = { (externalApi) => { ... } }
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "500px";
        iframeRef.style.width = "70%";
      }}
    />
  );
}

export default StartMeeting;
