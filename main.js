// ==============================================
//
//  RPG loot/Inv System
//
// ==============================================

import { ItemList } from "./items.js";

"use strict";

(function main() {

    // Creates new item objects
    const Item = (itemNum) => {
        let wep = itemNum;

        return {
            itemName : wep.itemName,
            atk : wep.atk,
            cost : wep.cost,
        }
    };

    // ** For Testing ** Available loot for each level.  
    const level1Loot = [10001, 10001, 10002, 10007, 10007, 10008];
    const level2Loot = [10002, 10002, 10003, 10004, 10008, 10008, 10009];

    // Returns a random loot item number based on what items are available
    const getItem = levelLoot => {
        return levelLoot[Math.floor(Math.random() * levelLoot.length)];
    };

    // ** For Testing ** Displays sample item drops
    const displayItem = item => {
        console.log(`Skeleton dropped a ${item.itemName}!!!`);
        console.log(`Item Name: ${item.itemName}
        \nAttack: ${item.atk}
        \nItem Cost: $${item.cost}
        `);
    }

    // ** For Testing ** Displays the player's current inventory
    const displayPlayerInv = playerInv => {
        console.log("====== PLAYER INVENTORY ======");
        for(let i = 0; i < playerInv.length; i++){
            console.log(playerInv[i].itemName);
        }
    }

    // ** For Testing ** Create player inventory
    let playerInv = [];


    // ** For Testing ** Sample drop level 1 
    let drop = Item(ItemList[getItem(level1Loot)]);
    displayItem(drop);
    playerInv.push(drop);

    // ** For Testing ** Sample drop level 2 
    let drop2 = Item(ItemList[getItem(level2Loot)]);
    displayItem(drop2);
    playerInv.push(drop2);

    // ** For Testing ** displayItem(drop);
    displayPlayerInv(playerInv);

})();