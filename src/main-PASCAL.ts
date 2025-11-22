/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.player.tags.push("room1");
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)
    WA.player.setOutlineColor(0, 200, 135);
    WA.room.onEnterLayer("roofZone").subscribe(() => {
        WA.room.hideLayer('Roof1');
        WA.room.hideLayer('Roof2');
    });

    WA.room.onLeaveLayer("roofZone").subscribe(() => {
        WA.room.showLayer('Roof1');
        WA.room.showLayer('Roof2');
    });
    WA.room.onEnterLayer("silent").subscribe(() => {
        WA.room.showLayer('silentRoof');
    });

    WA.room.onLeaveLayer("silent").subscribe(() => {
        WA.room.hideLayer('silentRoof');
    });

    WA.ui.actionBar.removeButton("invite");
    WA.controls.disableInviteButton();


    let ressourcesUrl: any;
    //let githubUrl: any;
    if (WA.player.tags.includes("room1")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom1') as string;
        //githubUrl = WA.state.loadVariable('gitRoom1') as string;
        console.log("As room1 right");
    } else if (WA.player.tags.includes("room2")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom2') as string;
        //githubUrl = WA.state.loadVariable('gitRoom2') as string;
        console.log("As room2 right");
    } else if (WA.player.tags.includes("room3")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom3') as string;
        //githubUrl = WA.state.loadVariable('gitRoom3') as string;
        console.log("As room3 right");
    } else if (WA.player.tags.includes("room4")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom4') as string;
        //githubUrl = WA.state.loadVariable('gitRoom4') as string;
        console.log("As room5 right");
    } else if (WA.player.tags.includes("room5")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom5') as string;
        //githubUrl = WA.state.loadVariable('gitRoom5') as string;
        console.log("As room6 right");
    } else if (WA.player.tags.includes("room6")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom6') as string;
        //githubUrl = WA.state.loadVariable('gitRoom6') as string;
        console.log("As room7 right");
    } else if (WA.player.tags.includes("room7")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom7') as string;
        //githubUrl = WA.state.loadVariable('gitRoom7') as string;
        console.log("As room8 right");
    } else if (WA.player.tags.includes("room8")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom8') as string;
        //githubUrl = WA.state.loadVariable('gitRoom8') as string;
        console.log("As room9 right");
    } else if (WA.player.tags.includes("room9")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom9') as string;
        //githubUrl = WA.state.loadVariable('gitRoom9') as string;
        console.log("As room10 right");
    } else if (WA.player.tags.includes("room10")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom10') as string;
        //githubUrl = WA.state.loadVariable('gitRoom10') as string;
        console.log("As room11 right");
    } else if (WA.player.tags.includes("room11")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom11') as string;
        //githubUrl = WA.state.loadVariable('gitRoom11') as string;
        console.log("As room12 right");
    } else if (WA.player.tags.includes("room12")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom12') as string;
        //githubUrl = WA.state.loadVariable('gitRoom12') as string;
    } else if (WA.player.tags.includes("room13")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom13') as string;
        //githubUrl = WA.state.loadVariable('gitRoom13') as string;
        console.log("As room13 right");
    } else if (WA.player.tags.includes("room14")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom14') as string;
        //githubUrl = WA.state.loadVariable('gitRoom14') as string;
        console.log("As room14 right");
    } else if (WA.player.tags.includes("room15")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesRoom15') as string;
        //githubUrl = WA.state.loadVariable('gitRoom15') as string;
        console.log("As room15 right");
    } else if (WA.player.tags.includes("admin")) {
        ressourcesUrl = WA.state.loadVariable('ressourcesAdmin') as string;
        //githubUrl = WA.state.loadVariable('gitAdmin') as string;
        console.log("As admin right");
    }

    /*
    WA.ui.actionBar.addButton({
        id: 'github-btn',
        type: 'action',
        imageSrc: 'https://www.shareicon.net/data/256x256/2015/09/15/101512_logo_512x512.png',
        toolTip: 'Github project repository',
        callback: () => {
            WA.nav.openTab(githubUrl as string);
        }
    });
    */
    WA.ui.actionBar.addButton({
        id: 'workspace',
        // @ts-ignore
        label: 'Ressources',
        toolTip: 'Access to your project directory',
        callback: () => {
            WA.nav.openTab(ressourcesUrl as string);
        }
    });

    WA.ui.actionBar.addButton({
        id: 'help-btn',
        // @ts-ignore
        label: 'Help',
        callback: () => {
            WA.ui.modal.closeModal();
            WA.ui.modal.openModal({
                src: "https://workadventure.github.io/embed-pages/src/pasqal/welcome.html",
                allow: 'fullscreen',
                title: 'Bienvenue',
                allowApi: true,
                position: 'right',
            });
        }
    });
    let helpZone: any;
    WA.room.onEnterLayer('helpZone').subscribe(() => {
        helpZone = WA.ui.displayActionMessage({
            message: "<div style='text-align:center;'>Press <svg width='20' height='10' viewBox='0 0 20 10' style='margin-right: 2px; margin-left: 2px; fill: white; border-radius: 2px; border: 1px solid white; padding: 2px; box-sizing: border-box; background-color: white;'><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' style='font-size: 10px; fill: black; font-weight: bold;'>SPACE</text></svg> to get help</div>",
            callback: () => {
                WA.ui.modal.closeModal();
                WA.ui.modal.openModal({
                    src: "https://workadventure.github.io/embed-pages/src/pasqal/welcome.html",
                    allow: 'fullscreen',
                    title: 'Bienvenue',
                    allowApi: true,
                    position: 'right',
                });
            }
        });
    })
    WA.room.onLeaveLayer('helpZone').subscribe(() => {
        helpZone.remove();
    })

    let startZone: any;
    setTimeout(function () {
        startZone = WA.ui.displayActionMessage({
            message: "<img src='https://workadventu.re/wp-content/uploads/2025/02/keyboard.gif' width='40' style='width: 40px !important;' id='keyboard-info' />",
            callback: () => {

            }
        });
    }, 3000)
    WA.room.onLeaveLayer('start').subscribe(() => {
        startZone.remove();
    })
    WA.room.area.onEnter('helpZoneRight').subscribe(() => {
        helpZone = WA.ui.displayActionMessage({
            message: "<div style='text-align:center;'>Press <svg width='20' height='10' viewBox='0 0 20 10' style='margin-right: 2px; margin-left: 2px; fill: white; border-radius: 2px; border: 1px solid white; padding: 2px; box-sizing: border-box; background-color: white;'><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' style='font-size: 10px; fill: black; font-weight: bold;'>SPACE</text></svg> to get help</div>",
            callback: () => {
                WA.ui.modal.closeModal();
                WA.ui.modal.openModal({
                    src: "https://workadventure.github.io/embed-pages/src/pasqal/welcome.html",
                    allow: 'fullscreen',
                    title: 'Bienvenue',
                    allowApi: true,
                    position: 'right',
                });
            }
        });
    })
    WA.room.area.onLeave('helpZoneRight').subscribe(() => {
        helpZone.remove();
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export { };
