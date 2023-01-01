import LobbyServer, { LobbyUser_I } from "../src";

const lobby = new LobbyServer("id", { maxPlayers: 8 });

interface LobbyPlayer_I extends LobbyUser_I {
    color: number;
}

const user: LobbyPlayer_I = {
    id: "asdf",
    name: "Bob",
    color: 0xff0000
};

lobby.addUser(user);
console.log(lobby.getLobby());
lobby.removeUser(user.id);
console.log(lobby.getLobby());
