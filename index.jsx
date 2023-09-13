import React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const RoomPage =() => {
    const {roomId} =useParams();

    const myMeeting=async(element)=>{
      const appID = 571927949;
      const serverSecret = "8d73bd9587aaa7591dcc2ef83d1a0f2b";
      const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomId,Date.now().toString(),"Bezawada Sravani");
      const zc=ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`,
            },
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
        
      });


    } ;

    return (
        <div>
            <div ref={myMeeting}/>
        </div>
    );
}

export default RoomPage;