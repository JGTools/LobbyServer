export interface LobbyUser_I {
    id: string;
    name: string;
}

export default class LobbyServer<MetaType_I, UserType_I extends LobbyUser_I>  {
    #hostID: string | null = null;
    #users = new Map<string, UserType_I>();
    #meta: MetaType_I;

    constructor(meta: MetaType_I) {
        this.#meta = meta;
    }
    addUser(u: UserType_I) {
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
    setMeta(u: LobbyUser_I, meta: MetaType_I) {
        if (this.#hostID != u.id)
            return;
        this.#meta = meta;
    }
    getHostID() { return this.#hostID }
    getUsers() { return this.#users }
    getMeta() { return this.#meta }
}