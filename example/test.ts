import LobbyServer, { LobbyUser_I } from "../src";

const lobby = new LobbyServer("id", { maxPlayers: 8 });

const user: LobbyUser_I = {
    id: "asdf",
    name: "Bob"
}
lobby.addUser(user);
console.log(lobby.getLobby());
