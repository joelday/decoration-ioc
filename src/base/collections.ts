/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are strings.
 */
export interface IStringDictionary<V> {
    [name: string]: V;
}

/**
 * Looks up and returns a property that is owned
 * by the provided map object.
 * @param what The key.
 * @param from A native JavaScript object that stores items.
 * @param alternate A default value this is return in case an item with
 *     the key isn"t found.
 */
export function lookup<T>(from: IStringDictionary<T>, what: string, alternate?: T): T;
export function lookup<T>(from: any, what: any, alternate: T = null): T {
    const key = String(what);
    if (contains(from, key)) {
        return from[key];
    }
    return alternate;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Returns {{true}} iff the provided object contains a property
 * with the given name.
 */
export function contains<T>(from: IStringDictionary<T>, what: string): boolean;
export function contains(from: any, what: any): boolean {
    return hasOwnProperty.call(from, what);
}

/**
 * Iterates over each entry in the provided set. The iterator allows
 * to remove elements and will stop when the callback returns {{false}}.
 */
export function forEach<T>(from: IStringDictionary<T>, callback: (entry: { key: string; value: T; }, remove: Function) => any): void;
export function forEach<T>(from: any, callback: (entry: { key: any; value: T; }, remove: Function) => any): void {
    for (const key in from) {
        if (hasOwnProperty.call(from, key)) {
            const result = callback({ key: key, value: from[key] }, function() {
                delete from[key];
            });
            if (result === false) {
                return;
            }
        }
    }
}