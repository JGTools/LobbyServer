import LobbyServer, { LobbyUser_I } from "../src";

interface LobbyPlayer_I extends LobbyUser_I {
    color: number;
}

const lobby = new LobbyServer("lobbyid", { maxPlayers: 8 });

const user: LobbyPlayer_I = {
    id: "123",
    name: "Bob",
    color: 0xff0000,
};

lobby.addUser(user);
console.log(lobby.getLobby());
lobby.setMeta(user, { maxPlayers: 9 });
console.log(lobby.getLobby());
lobby.removeUser(user.id);
console.log(lobby.getLobby());
