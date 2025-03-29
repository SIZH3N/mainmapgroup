/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import { openPopup , closePopup} from "./c";
import { day_night_cycle } from "./b";
import { levelUp } from "@workadventure/quests";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    const currentUrl = new URL(window.location.href);
    console.log(currentUrl.href); // Full URL

    
    if(WA.player.tags.includes("team")) {
        WA.player.setOutlineColor(0, 119, 141);
    }
    
    let currentZone: string;
    WA.room.area.onEnter('fireplacezone').subscribe (() => {
        //console.log('   uhiuiiuh        iuh iuiuh          uihuih');
        currentZone = 'fireplacezone';
        openPopup(currentZone, currentZone + 'Popup');
    });
    
    WA.room.area.onLeave('fireplacezone').subscribe(() => {
        closePopup();
    });
    
    //This function will automatically change day mode into night mode
    //folders for the inputs: first day folder, second night folder.
    //In each folder, the layers should be related to the state of day and night.
    day_night_cycle("","");
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function levelup(){
    levelUp("Up-time-meta",1);
    //console.log('*************************Level up Up-time-meta');
}

setInterval(levelup, 15000);


export {};
