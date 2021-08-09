// Storages
import { UIStore } from './uiStore';

class RootStore {
    uiStore: UIStore;

    constructor() {
        this.uiStore = new UIStore();
    }
}

const rootStore = new RootStore();

export {
    RootStore,
    rootStore,
};
