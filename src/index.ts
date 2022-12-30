export default class LobbyServer {
    #c = {
        TEAM_SIZE: 5,
    };
    #users = new Map<string, any>();
    constructor(config: any) {
        if (config)
            this.#c = config;

    }
}