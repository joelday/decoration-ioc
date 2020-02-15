/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as instantiation from './instantiation';

export class Descriptor<T> {

	readonly ctor: any;
	readonly staticArguments: any[];
	readonly supportsDelayedInstantiation: boolean;

	constructor(ctor: new (...args: any[]) => T, staticArguments: any[] = [], supportsDelayedInstantiation: boolean = false) {
		this.ctor = ctor;
		this.staticArguments = staticArguments;
		this.supportsDelayedInstantiation = supportsDelayedInstantiation;
	}
}

export interface CreateFunc {

	<T>(ctor: instantiation.IConstructorSignature0<T>): Descriptor0<T>;

	<A1, T>(ctor: instantiation.IConstructorSignature1<A1, T>): Descriptor1<A1, T>;
	<A1, T>(ctor: instantiation.IConstructorSignature1<A1, T>, a1: A1): Descriptor0<T>;

	<A1, A2, T>(ctor: instantiation.IConstructorSignature2<A1, A2, T>): Descriptor2<A1, A2, T>;
	<A1, A2, T>(ctor: instantiation.IConstructorSignature2<A1, A2, T>, a1: A1): Descriptor1<A2, T>;
	<A1, A2, T>(ctor: instantiation.IConstructorSignature2<A1, A2, T>, a1: A1, a2: A2): Descriptor0<T>;

	<A1, A2, A3, T>(ctor: instantiation.IConstructorSignature3<A1, A2, A3, T>): Descriptor3<A1, A2, A3, T>;
	<A1, A2, A3, T>(ctor: instantiation.IConstructorSignature3<A1, A2, A3, T>, a1: A1): Descriptor2<A2, A3, T>;
	<A1, A2, A3, T>(ctor: instantiation.IConstructorSignature3<A1, A2, A3, T>, a1: A1, a2: A2): Descriptor1<A3, T>;
	<A1, A2, A3, T>(ctor: instantiation.IConstructorSignature3<A1, A2, A3, T>, a1: A1, a2: A2, a3: A3): Descriptor0<T>;

	<A1, A2, A3, A4, T>(ctor: instantiation.IConstructorSignature4<A1, A2, A3, A4, T>): Descriptor4<A1, A2, A3, A4, T>;
	<A1, A2, A3, A4, T>(ctor: instantiation.IConstructorSignature4<A1, A2, A3, A4, T>, a1: A1): Descriptor3<A2, A3, A4, T>;
	<A1, A2, A3, A4, T>(ctor: instantiation.IConstructorSignature4<A1, A2, A3, A4, T>, a1: A1, a2: A2): Descriptor2<A3, A4, T>;
	<A1, A2, A3, A4, T>(ctor: instantiation.IConstructorSignature4<A1, A2, A3, A4, T>, a1: A1, a2: A2, a3: A3): Descriptor1<A4, T>;
	<A1, A2, A3, A4, T>(ctor: instantiation.IConstructorSignature4<A1, A2, A3, A4, T>, a1: A1, a2: A2, a3: A3, a4: A4): Descriptor0<T>;

	<A1, A2, A3, A4, A5, T>(ctor: instantiation.IConstructorSignature5<A1, A2, A3, A4, A5, T>): Descriptor5<A1, A2, A3, A4, A5, T>;
	<A1, A2, A3, A4, A5, T>(ctor: instantiation.IConstructorSignature5<A1, A2, A3, A4, A5, T>, a1: A1): Descriptor4<A2, A3, A4, A5, T>;
	<A1, A2, A3, A4, A5, T>(ctor: instantiation.IConstructorSignature5<A1, A2, A3, A4, A5, T>, a1: A1, a2: A2): Descriptor3<A3, A4, A5, T>;
	<A1, A2, A3, A4, A5, T>(ctor: instantiation.IConstructorSignature5<A1, A2, A3, A4, A5, T>, a1: A1, a2: A2, a3: A3): Descriptor2<A4, A5, T>;
	<A1, A2, A3, A4, A5, T>(ctor: instantiation.IConstructorSignature5<A1, A2, A3, A4, A5, T>, a1: A1, a2: A2, a3: A3, a4: A4): Descriptor1<A5, T>;
	<A1, A2, A3, A4, A5, T>(ctor: instantiation.IConstructorSignature5<A1, A2, A3, A4, A5, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor0<T>;

	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>): Descriptor6<A1, A2, A3, A4, A5, A6, T>;
	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, a1: A1): Descriptor5<A2, A3, A4, A5, A6, T>;
	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, a1: A1, a2: A2): Descriptor4<A3, A4, A5, A6, T>;
	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, a1: A1, a2: A2, a3: A3): Descriptor3<A4, A5, A6, T>;
	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, a1: A1, a2: A2, a3: A3, a4: A4): Descriptor2<A5, A6, T>;
	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor1<A6, T>;
	<A1, A2, A3, A4, A5, A6, T>(ctor: instantiation.IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Descriptor0<T>;

	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>): Descriptor7<A1, A2, A3, A4, A5, A6, A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1): Descriptor6<A2, A3, A4, A5, A6, A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2): Descriptor5<A3, A4, A5, A6, A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2, a3: A3): Descriptor4<A4, A5, A6, A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2, a3: A3, a4: A4): Descriptor3<A5, A6, A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor2<A6, A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Descriptor1<A7, T>;
	<A1, A2, A3, A4, A5, A6, A7, T>(ctor: instantiation.IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Descriptor0<T>;

	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>): Descriptor8<A1, A2, A3, A4, A5, A6, A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1): Descriptor7<A2, A3, A4, A5, A6, A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2): Descriptor6<A3, A4, A5, A6, A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3): Descriptor5<A4, A5, A6, A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3, a4: A4): Descriptor4<A5, A6, A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor3<A6, A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Descriptor2<A7, A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Descriptor1<A8, T>;
	<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: instantiation.IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8): Descriptor0<T>;
}

export const createDescriptor: CreateFunc = <T>(ctor: any, ...staticArguments: any[]): any => {
	return new Descriptor<T>(ctor, staticArguments);
};

export interface Descriptor0<T> {
	ctor: any;
	bind(): Descriptor0<T>;
}
export interface Descriptor1<A1, T> {
	ctor: any;
	bind(a1: A1): Descriptor0<T>;
}
export interface Descriptor2<A1, A2, T> {
	ctor: any;
	bind(a1: A1): Descriptor1<A2, T>;
	bind(a1: A1, a2: A2): Descriptor0<T>;
}
export interface Descriptor3<A1, A2, A3, T> {
	ctor: any;
	bind(a1: A1): Descriptor2<A2, A3, T>;
	bind(a1: A1, a2: A2): Descriptor1<A3, T>;
	bind(a1: A1, a2: A2, a3: A3): Descriptor0<T>;
}
export interface Descriptor4<A1, A2, A3, A4, T> {
	ctor: any;
	bind(a1: A1): Descriptor3<A2, A3, A4, T>;
	bind(a1: A1, a2: A2): Descriptor2<A3, A4, T>;
	bind(a1: A1, a2: A2, a3: A3): Descriptor1<A4, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4): Descriptor0<T>;
}
export interface Descriptor5<A1, A2, A3, A4, A5, T> {
	ctor: any;
	bind(a1: A1): Descriptor4<A2, A3, A4, A5, T>;
	bind(a1: A1, a2: A2): Descriptor3<A3, A4, A5, T>;
	bind(a1: A1, a2: A2, a3: A3): Descriptor2<A4, A5, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4): Descriptor1<A5, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor0<T>;
}
export interface Descriptor6<A1, A2, A3, A4, A5, A6, T> {
	ctor: any;
	bind(a1: A1): Descriptor5<A2, A3, A4, A5, A6, T>;
	bind(a1: A1, a2: A2): Descriptor4<A3, A4, A5, A6, T>;
	bind(a1: A1, a2: A2, a3: A3): Descriptor3<A4, A5, A6, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4): Descriptor2<A5, A6, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor1<A6, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Descriptor0<T>;
}
export interface Descriptor7<A1, A2, A3, A4, A5, A6, A7, T> {
	ctor: any;
	bind(a1: A1): Descriptor6<A2, A3, A4, A5, A6, A7, T>;
	bind(a1: A1, a2: A2): Descriptor5<A3, A4, A5, A6, A7, T>;
	bind(a1: A1, a2: A2, a3: A3): Descriptor4<A4, A5, A6, A7, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4): Descriptor3<A5, A6, A7, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor2<A6, A7, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Descriptor1<A7, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Descriptor0<T>;
}
export interface Descriptor8<A1, A2, A3, A4, A5, A6, A7, A8, T> {
	ctor: any;
	bind(a1: A1): Descriptor7<A2, A3, A4, A5, A6, A7, A8, T>;
	bind(a1: A1, a2: A2): Descriptor6<A3, A4, A5, A6, A7, A8, T>;
	bind(a1: A1, a2: A2, a3: A3): Descriptor5<A4, A5, A6, A7, A8, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4): Descriptor4<A5, A6, A7, A8, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Descriptor3<A6, A7, A8, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Descriptor2<A7, A8, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Descriptor1<A8, T>;
	bind(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8): Descriptor0<T>;
}
