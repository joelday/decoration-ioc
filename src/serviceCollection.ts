/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

import { binarySearch } from "./base/arrays";
import { ServiceIdentifier, IService } from "./instantiation";
import { Descriptor } from "./descriptors";

type Entry = [ServiceIdentifier<any>, any];

export class ServiceCollection {

    private _entries: Entry[] = [];

    constructor(...entries:[ServiceIdentifier<any>, any][]) {
        for (const entry of entries) {
            this.set(entry[0], entry[1]);
        }
    }

    set<T extends IService>(id: ServiceIdentifier<T>, instanceOrDescriptor: T | Descriptor<T>): T | Descriptor<T> {
        const entry: Entry = [id, instanceOrDescriptor];
        const idx = binarySearch(this._entries, entry, ServiceCollection._entryCompare);
        if (idx < 0) {
            // new element
            this._entries.splice(~idx, 0, entry);
        } else {
            const old = this._entries[idx];
            this._entries[idx] = entry;
            return old[1];
        }
    }

    forEach(callback: (id: ServiceIdentifier<any>, instanceOrDescriptor: any) => any): void {
        for (const entry of this._entries) {
            const [id, instanceOrDescriptor] = entry;
            callback(id, instanceOrDescriptor);
        }
    }

    has(id: ServiceIdentifier<any>): boolean {
        return binarySearch(this._entries, ServiceCollection._searchEntry(id), ServiceCollection._entryCompare) >= 0;
    }

    get<T extends IService>(id: ServiceIdentifier<T>): T | Descriptor<T> {
        const idx = binarySearch(this._entries, ServiceCollection._searchEntry(id), ServiceCollection._entryCompare);
        if (idx >= 0) {
            return this._entries[idx][1];
        }
    }

    private static _dummy: Entry = [undefined, undefined];

    private static _searchEntry(id: ServiceIdentifier<any>): Entry {
        ServiceCollection._dummy[0] = id;
        return ServiceCollection._dummy;
    }

    private static _entryCompare(a: Entry, b: Entry): number {
        const _a = a[0].toString();
        const _b = b[0].toString();
        if (_a < _b) {
            return -1;
        } else if (_a > _b) {
            return 1;
        } else {
            return 0;
        }
    }
}
