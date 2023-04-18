import { acceptHMRUpdate, defineStore } from 'pinia';

export class Person {
    public cookedQuantity?: number;
    public index: number;
    public name: string;
    public rawQuantity: number;

    public constructor(index: number, name: string, rawQuantity: number, cookedQuantity?: number) {
        this.rawQuantity = rawQuantity;
        this.index = index;
        this.name = name;
        this.cookedQuantity = cookedQuantity;
    }

    public cook(totalRawQuantity: number, totalCookedQuantity: number) {
        this.cookedQuantity = (this.rawQuantity * totalCookedQuantity) / totalRawQuantity;
    }
}

function parseJsonToPerson(data: string) {
    const storedState = JSON.parse(data) as StateInterface;
    const newState = { ...storedState } as StateInterface;
    newState.persons = storedState.persons.map((person) => new Person(person.index, person.name, person.rawQuantity, person.cookedQuantity));

    return newState;
}

export interface StateInterface {
    cookedQuantity?: number;
    persons: Array<Person>;
}

const usePastaStore = defineStore('pasta', {
    actions: {
        addPerson(name: string, rawQuantity: number) {
            const person = new Person(this.persons.length, name, rawQuantity);
            this.persons.push(person);
        },
        cook(cookedQuantity: number) {
            this.cookedQuantity = cookedQuantity;

            const totalRawQuantity = this.persons.reduce((sum: number, person: Person) => {
                return sum + person.rawQuantity;
            }, 0);

            this.persons.forEach((person: Person) => {
                person.cook(totalRawQuantity, cookedQuantity);
            });
        },
        reset() {
            this.persons = [];
        },
    },
    persist: {
        serializer: {
            deserialize: parseJsonToPerson,
            serialize: JSON.stringify,
        },
    },
    state(): StateInterface {
        return {
            persons: [],
        };
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePastaStore, import.meta.hot));
}

export default usePastaStore;
