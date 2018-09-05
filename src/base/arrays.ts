/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

export function binarySearch<T>(array: T[], key: T, comparator: (op1: T, op2: T) => number): number {
    let low = 0,
        high = array.length - 1;

    while (low <= high) {
        const mid = ((low + high) / 2) | 0;
        const comp = comparator(array[mid], key);
        if (comp < 0) {
            low = mid + 1;
        } else if (comp > 0) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -(low + 1);
}

export function index<T>(array: T[], indexer: (t: T) => string): { [key: string]: T; };
export function index<T,R>(array: T[], indexer: (t: T) => string, merger?: (t: T, r: R) => R): { [key: string]: R; };
export function index<T,R>(array: T[], indexer: (t: T) => string, merger: (t: T, r: R) => R = t => t as any): { [key: string]: R; } {
    return array.reduce((r, t) => {
        const key = indexer(t);
        r[key] = merger(t, r[key]);
        return r;
    }, Object.create(null));
}