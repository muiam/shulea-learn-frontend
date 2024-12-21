"use client";

import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';



function StartMeeting({ uuid  , jwtToken}) {

  //get the use joining and use jwt to generate a token

  const domain = "meet.jit.si"; // Use the public Jitsi meet server or your own Jitsi server
  const room = uuid;

  return (
    <JitsiMeeting
      domain={domain}
      jwt= {jwtToken}
      roomName={room}
      configOverwrite={{
        startWithAudioMuted: false,
        startWithVideoMuted: false,
        disableModeratorIndicator: false,
        startScreenSharing: true,
        enableEmailInStats: false,
        // Add the following line to grant moderator privileges
        prejoinPageEnabled: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{
        displayName: 'YOUR_USERNAME',
      }}
      onApiReady={(externalApi) => {
        // Attach custom event listeners to the Jitsi Meet External API
        // Store it locally to execute commands
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = '500px';
        iframeRef.style.width = '70%';
      }}
    />
  );
}

export default StartMeeting;