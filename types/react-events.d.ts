import React from 'react';

declare module 'react' {
  // Add missing event type declarations
  export interface ChangeEvent<T = Element> {
    target: T;
    currentTarget: T;
    type: string;
  }

  export interface FormEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    target: T;
    currentTarget: T;
    type: string;
  }

  // Declare the types for HTML elements
  export interface HTMLInputElement extends HTMLElement {
    value: string;
    name: string;
    type: string;
  }

  export interface HTMLTextAreaElement extends HTMLElement {
    value: string;
    name: string;
    rows: number;
  }
} 