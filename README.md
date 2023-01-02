# LobbyServer

[![npm](https://img.shields.io/npm/v/@jgtools/lobbyserver)](https://www.npmjs.com/package/@jgtools/lobbyserver)
[![npm](https://img.shields.io/npm/dm/@jgtools/lobbyserver)](https://www.npmjs.com/package/@jgtools/lobbyserver)
[![GitHub](https://img.shields.io/github/license/jgtools/lobbyserver)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

Lobby system for online games

## Installation

### Using npm

```bash
npm i @jgtools/lobbyserver
```

```javascript
import LobbyServer from "@jgtools/lobbyserver";
// ...
```

### Using cdn

```html
<script type="module">
    import LobbyServer from "https://cdn.jsdelivr.net/npm/@jgtools/lobbyserver@1.0.3/dist/index.min.js";
    // ...
</script>
```

## Usage

```typescript
import LobbyServer, { LobbyUser_I } from "@jgtools/lobbyserver";

interface LobbyPlayer_I extends LobbyUser_I {
  color: number;
}
interface MetaData_I {
  maxPlayers: number;
}

const lobby = new LobbyServer<MetaData_I, LobbyPlayer_I>("lobbyid", {
  maxPlayers: 8,
});

const user: LobbyPlayer_I = {
  id: "123",
  name: "Bob",
  color: 0xff0000,
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
```

## License

MIT
