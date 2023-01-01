export interface Lobby_I<MetaType> {
    id: string;
    hostID: string | null;
    users: Map<string, LobbyUser_I>;
    meta: MetaType;
}
export interface LobbyUser_I {
    id: string;
    name: string;
}

export default class LobbyServer<MetaType> {
    #id: string;
    #hostID: string | null = null;
    #users = new Map();
    #meta: MetaType;

    constructor(id: string, meta: MetaType) {
        this.#id = id;
        this.#meta = meta;
    }
    addUser(u: LobbyUser_I) {
        this.#users.set(u.id, u);
        if (this.#hostID == null)
            this.#hostID = u.id;
    }
    removeUser(u: LobbyUser_I) {
        this.#users.delete(u.id);
        if (this.#hostID == u.id)
            this.#hostID = [...this.#users][0][1].id || null;
    }
    setMeta(u: LobbyUser_I, meta: any) {
        if (this.#hostID != u.id)
            return;
        this.#meta = meta;
    }
    getLobby(): Lobby_I<MetaType> {
        return {
            id: this.#id,
            hostID: this.#hostID,
            users: this.#users,
            meta: this.#meta
        };
    }
}