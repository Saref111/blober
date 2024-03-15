import { BlobConfig } from "./blober";

class LocalStorageController<T> {
    protected storage = localStorage;

    protected entities: Set<T> = new Set();

    protected metakey: string;

    constructor(metakey: string) {
        this.metakey = metakey;
        const current = JSON.parse(this.storage.getItem(this.metakey) || "[]");
        this.entities = new Set(current);
    }
    
    protected save() {
        this.storage.setItem(this.metakey, JSON.stringify(Array.from(this.entities)));
        document.dispatchEvent(new Event("update"));
    }

    clear() {
        this.entities.clear();
        this.storage.removeItem(this.metakey);
    }

    addEntity(key: T) {
        this.entities.add(key);
        this.save();
    }

    removeEntity(key: T) {
        this.entities.delete(key);
        this.save();
    }

    has(id: string) {
        return Array.from(this.entities).some((entity: any) => entity.id === id);
    }

    getEntities() {
        return Array.from(this.entities);
    }

    getEntitiesCount() {
        return this.entities.size;
    }

    findEntity(predicate: (value: T, value2: number, set: Array<T>) => unknown) {
        return Array.from(this.entities).find(predicate);
    }

    updateEntity(key: T, value: T) {
        if (this.entities.has(key)) {
            this.entities.delete(key);
            this.entities.add(value);
            this.save();
        }
    }
}

export const blobStorage =  new LocalStorageController<BlobConfig>("__blobConfigs__");