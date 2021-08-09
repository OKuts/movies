// Core
import { makeAutoObservable } from 'mobx';

class UIStore {
    private message = '';

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    resetError() {
        this.message = '';
    }

    get errorMessage() {
        return this.message;
    }

    setError(newErrorMessage: string) {
        this.message = newErrorMessage;
    }
}

export { UIStore };
