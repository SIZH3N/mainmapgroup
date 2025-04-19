/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // const mapUrl = WA.room.mapURL
    // const root = mapUrl.substring(0, mapUrl.lastIndexOf("/"))
    //let currentMapName = "campus"

    if(WA.player.tags.includes("admin")) {
        WA.player.setOutlineColor(0, 119, 141);
    }

    // Code pour cacher les portes
    WA.room.area.onEnter("atelier").subscribe(() => {
        WA.room.hideLayer("murs/atelier")
    })
    WA.room.area.onLeave("atelier").subscribe(() => {
        WA.room.showLayer("murs/atelier")
    })

    WA.room.area.onEnter("bureauA").subscribe(() => {
        WA.room.hideLayer("murs/bureauA")
    })
    WA.room.area.onLeave("bureauA").subscribe(() => {
        WA.room.showLayer("murs/bureauA")
    })

      WA.room.area.onEnter("bureauB").subscribe(() => {
        WA.room.hideLayer("murs/bureauB")
    })
    WA.room.area.onLeave("bureauB").subscribe(() => {
        WA.room.showLayer("murs/bureauB")
    })

    WA.room.area.onEnter("reunionB").subscribe(() => {
        WA.room.hideLayer("murs/reunionB")
        WA.room.hideLayer("basMurs/basReunionB")
    })
    WA.room.area.onLeave("reunionB").subscribe(() => {
        WA.room.showLayer("murs/reunionB")
        WA.room.showLayer("basMurs/basReunionB")
    })

     WA.room.area.onEnter("reunionA").subscribe(() => {
        WA.room.hideLayer("murs/reunionA")
        WA.room.hideLayer("basMurs/basReunionA")
    })
    WA.room.area.onLeave("reunionA").subscribe(() => {
        WA.room.showLayer("murs/reunionA")
        WA.room.showLayer("basMurs/basReunionA")
    })

    // // Bouton guide
    // console.log('Ajout du bouton Guide utilisateur');
    // WA.ui.actionBar.addButton({
    //     id: 'help-btn',
    //     type: 'action',
    //     imageSrc: root + '/help.svg',
    //     toolTip: "Guide utilisateur",
    //     callback: () => {
    //         WA.ui.modal.openModal({
    //             title: "Guide utilisateur",
    //             src: "https://u2l.fr/guidewa",
    //             allowApi: false,
    //             allow: "microphone; camera",
    //             position: "center",
    //         }, () => WA.ui.modal.closeModal())
    //     }
    // });

    // // Bouton évaluation
    // console.log('Ajout du bouton Évaluation');
    // WA.ui.actionBar.addButton({
    //     id: 'evaluation-btn',
    //     type: 'action',
    //     imageSrc: root + '/star.svg',
    //     toolTip: "Évaluation",
    //     callback: () => {
    //         WA.ui.modal.openModal({
    //             title: "Guide utilisateur",
    //             src: "https://u2l.fr/evalsantewa",
    //             allowApi: false,
    //             allow: "microphone; camera",
    //             position: "center",
    //         }, () => WA.ui.modal.closeModal())
    //     }
    // });

   /* WA.ui.actionBar.addButton({
        id: 'move-btn',
        type: 'action',
        imageSrc: root + '/arrows-to-center.svg',
        toolTip: "M'envoyer à l'accueil",
        callback: () => {
            // If the player is already on the destination map, the page won't reload and the moveTo parameter won't be applied
            // So we make a direct call to the moveTo feature instead using the API
            if (currentMapName === "accueil") {
                const x = 81 * 32;
                const y = 29 * 32;
                WA.player.moveTo(x, y);
            } else {
                WA.nav.goToRoom("https://play.workadventu.re/@/universite-de-lorraine/pleiades/accueil#moveTo=accueil")
            }
        }
    });
    
    WA.ui.actionBar.addButton({
        id: 'plan-btn',
        type: 'action',
        imageSrc: root + '/map-plan.svg',
        toolTip: "Ouvrir le plan",
        callback: () => {
            WA.ui.modal.openModal({
                title: "Plan",
                src: `${root}/map-overview/index.html?image=${currentMapName}.png`,
                allowApi: false,
                allow: "microphone; camera",
                position: "center",
            }, () => WA.ui.modal.closeModal())
        }
    });
    WA.ui.actionBar.addButton({
        id: 'program-btn',
        type: 'action',
        imageSrc: root + '/program-schedule.svg',
        toolTip: "Ouvrir le programme de la journée",
        callback: () => {
            WA.ui.modal.openModal({
                title: "Plan",
                src: root + '/Programme.pdf',
                allowApi: false,
                allow: "microphone; camera",
                position: "center",
            }, () => WA.ui.modal.closeModal())
        }
    });
    */

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
        // Update current map name
        // currentMapName = WA.state.loadVariable('mapName') as string;
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
