// Server Joining script
// Allows you to transfer players from one server to another automatically.
// useful for hub servers that send players to different game servers.
// Made by Ozorical

import {
  world
} from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";
world.afterEvents.playerSpawn.subscribe((event) => {
transferPlayer(event.player, { hostname: "your.server.ip", port: 19132 }); // Enter server IP here, example: "play.crabsmp.net"
});

