export interface Lobby_I<MetaType, UserType extends LobbyUser_I> {
    id: string;
    hostID: string | null;
    users: Map<string, UserType>;
    meta: MetaType;
}
export interface LobbyUser_I {
    id: string;
    name: string;
}

export default class LobbyServer<MetaType, UserType extends LobbyUser_I>  {
    #id: string;
    #hostID: string | null = null;
    #users = new Map<string, UserType>();
    #meta: MetaType;

    constructor(id: string, meta: MetaType) {
        this.#id = id;
        this.#meta = meta;
    }
    addUser(u: UserType) {
        this.#users.set(u.id, u);
        if (this.#hostID == null)
            this.#hostID = u.id;
    }
    removeUser(id: string) {
        this.#users.delete(id);
        if (this.#hostID == id) {
            if (this.#users.size > 0)
                this.#hostID = [...this.#users][0][1].id;
            else
                this.#hostID = null;
        }
    }
    setMeta(u: LobbyUser_I, meta: MetaType) {
        if (this.#hostID != u.id)
            return;
        this.#meta = meta;
    }
    getLobby(): Lobby_I<MetaType, UserType> {
        return {
            id: this.#id,
            hostID: this.#hostID,
            users: this.#users,
            meta: this.#meta
        };
    }
    getID() { return this.#id }
    getHostID() { return this.#hostID }
    getUsers() { return this.#users }
    getMeta() { return this.#meta }
}