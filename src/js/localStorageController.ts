import { BlobConfig } from './blober';

class LocalStorageController<T> {
  protected storage = localStorage;

  protected entities: Set<T> = new Set();
  protected bgColor: string;
  protected metakey: string;

  constructor(metakey: string) {
    this.metakey = metakey;
    const current = JSON.parse(this.storage.getItem(this.metakey) || '[]');
    this.entities = new Set(current);

    this.bgColor = localStorage.getItem(`${metakey}_bgColor`) || '#f3dddd';
  }

  protected save() {
    this.storage.setItem(
      this.metakey,
      JSON.stringify(Array.from(this.entities))
    );
    this.storage.setItem(`${this.metakey}_bgColor`, this.bgColor);
    document.dispatchEvent(new Event('update'));
  }

  setBGColor(color: string) {
    this.bgColor = color;
    this.storage.setItem(`${this.metakey}_bgColor`, color);
    document.dispatchEvent(new Event('update'));
  }
  
  clear() {
    this.entities.clear();
    this.storage.removeItem(this.metakey);
    
    this.bgColor = '#f3dddd';
    this.storage.removeItem(`${this.metakey}_bgColor`);
    document.dispatchEvent(new Event('update'));
  }

  getBGColor() {
    return this.bgColor;
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

  updateEntity(prevValue: T, newValue: T) {
    if (this.entities.has(prevValue)) {
      const entities = Array.from(this.entities);
      const index = entities.findIndex((entity) => entity === prevValue);
      entities[index] = newValue;
      this.entities = new Set(entities);

      this.save();
    }
  }

  moveEntity(entity: T, newIndex: number) {
    const entities = Array.from(this.entities);
    const newEntities = entities.filter((e) => e !== entity);
    newEntities.splice(newIndex, 0, entity);
    this.entities = new Set(newEntities);
    this.save();
  }
}

export const blobStorage = new LocalStorageController<BlobConfig>(
  '__blobConfigs__'
);
