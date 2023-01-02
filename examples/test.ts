import LobbyServer, { LobbyUser_I } from "../src";

interface LobbyPlayer_I extends LobbyUser_I {
    color: number;
}
interface MetaData_I {
    maxPlayers: number;
}

const lobby = new LobbyServer<MetaData_I, LobbyPlayer_I>("lobbyid", { maxPlayers: 8 });

const user: LobbyPlayer_I = {
    id: "123",
    name: "Bob",
    color: 0xff0000
};

lobby.addUser(user);
console.log(lobby.getUsers());
lobby.setMeta(user, { maxPlayers: 9 });
console.log(lobby.getMeta());
lobby.removeUser(user.id);
console.log(lobby.getUsers());
lobby.addUser(user);

const u = lobby.getUsers().get("123");
if (u) {
    console.log(u.id);
    console.log(u.color);
}
