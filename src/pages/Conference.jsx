import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Conference = () => {
  const { id } = useParams();

  const myMeeting = async (element) => {
    if (!element) return;

    const appID = 433057448;
    const serverSecret = "b5c0c5c07654005293446278f545df9d";

    // generate kit token
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "User"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://vcalll-git-main-adityas-projects-dcce7ebc.vercel.app/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    });
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={myMeeting} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Conference;
