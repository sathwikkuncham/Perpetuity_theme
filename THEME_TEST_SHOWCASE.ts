/**
 * ==========================================
 * PERPETUITY THEME - COMPREHENSIVE TEST FILE
 * ==========================================
 * This file demonstrates all the enhanced syntax highlighting
 * features added to Perpetuity Theme v2.0
 *
 * NEW FEATURES:
 * ✅ Semantic Highlighting (44 token types)
 * ✅ 94+ TextMate Scopes (up from 24)
 * ✅ Parameter Differentiation
 * ✅ Method vs Function Distinction
 * ✅ Property Highlighting
 * ✅ Decorator Support
 * ✅ Template Strings & Regex
 * ✅ JSDoc Integration
 * ✅ Language-Specific Rules (JS/TS, Python, CSS, etc.)
 *
 * @author Sathwik Kuncham
 * @version 2.0.0
 */

// ===== 1. VARIABLE DIFFERENTIATION =====
// Regular variables
let normalVariable = "regular variable";
const CONSTANT_VALUE = 42;  // Constants in purple
const readonlyConfig = Object.freeze({ api: "endpoint" });

// Parameters (dusty rose, italic)
function processData(userId: string, maxItems: number, options?: object) {
  // Parameters are visually distinct!
  console.log(userId, maxItems, options);
}

// Properties (cyan shade)
const user = {
  firstName: "John",      // Properties have their own color
  lastName: "Doe",
  age: 30
};

// Language variables (purple, italic)
class MyClass {
  constructor() {
    this.value = 10;      // 'this' is highlighted specially
  }
}

// ===== 2. FUNCTION & METHOD DISTINCTION =====
// Function declarations (bright teal)
function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

// Method calls (aqua)
const result = calculateTotal([1, 2, 3]);
console.log(result);  // console.log is a method

// Built-in functions (italic)
const parsed = parseInt("123");
const mapped = Array.from([1, 2, 3]);

// Constructor (bold)
const date = new Date();
const map = new Map();

// ===== 3. TYPE SYSTEM ENHANCEMENTS =====
// Interfaces (bold, teal variant)
interface UserProfile {
  id: number;
  name: string;
  email: string;
}

// Type aliases (teal)
type Status = "pending" | "active" | "completed";
type Callback<T> = (data: T) => void;

// Generics (italic, teal)
function identity<T>(arg: T): T {
  return arg;
}

// Enums (bold, teal)
enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF"
}

// ===== 4. DECORATORS & ANNOTATIONS =====
// Decorators (yellow, italic)
@Component({
  selector: 'app-root',
  template: '<div>Hello</div>'
})
class AppComponent {
  @Input() title: string;
  @Output() clicked = new EventEmitter();

  @deprecated('Use newMethod instead')
  oldMethod() {}
}

// ===== 5. MODERN JAVASCRIPT FEATURES =====
// Template strings with expressions
const name = "World";
const greeting = `Hello, ${name}!`;  // Expressions in teal
const multiline = `
  Line 1
  Line 2: ${2 + 2}
`;

// Regex patterns (cyan)
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phonePattern = /\d{3}-\d{3}-\d{4}/;

// Destructuring
const { firstName, lastName } = user;
const [first, ...rest] = [1, 2, 3, 4, 5];

// ===== 6. IMPORT/EXPORT STATEMENTS =====
// Import keywords (purple, bold)
import { Component, OnInit } from '@angular/core';
import React, { useState, useEffect } from 'react';
import * as utils from './utils';

// Export keywords
export default class Main {}
export const API_URL = "https://api.example.com";
export { helper } from './helpers';

// ===== 7. JSDOC DOCUMENTATION =====
/**
 * Calculates the average of an array of numbers
 * Doc comments are styled differently from regular comments
 *
 * @param {number[]} numbers - Array of numbers to average
 * @param {boolean} round - Whether to round the result
 * @returns {number} The calculated average
 * @throws {Error} If array is empty
 * @deprecated Use calculateMean() instead
 */
function calculateAverage(numbers: number[], round: boolean = false): number {
  if (numbers.length === 0) throw new Error("Empty array");
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = sum / numbers.length;
  return round ? Math.round(avg) : avg;
}

// ===== 8. JSX/TSX SUPPORT =====
// Component names (bold, teal)
const UserCard = ({ name, email }: UserProfile) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <Button onClick={() => alert('Clicked')}>
        Click Me
      </Button>
    </div>
  );
};

// ===== 9. ASYNC/AWAIT PATTERNS =====
async function fetchUserData(userId: string): Promise<UserProfile> {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}

// ===== 10. ACCESS MODIFIERS & KEYWORDS =====
class BankAccount {
  private balance: number;      // 'private' is highlighted
  protected accountId: string;  // 'protected' is highlighted
  public readonly owner: string;    // 'readonly' is highlighted

  static bankName = "MyBank";   // 'static' is highlighted

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
    this.accountId = Math.random().toString(36);
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  private validateTransaction(amount: number): boolean {
    return amount > 0 && amount <= this.balance;
  }
}

// ===== 11. NAMESPACE & MODULES =====
namespace Utilities {
  export namespace Math {
    export function square(n: number): number {
      return n * n;
    }
  }
}

// ===== 12. LABELS (rare but supported) =====
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
  }
}

// ===== 13. DIFFERENT NUMBER FORMATS =====
const decimal = 42;
const hex = 0xFF;
const octal = 0o77;
const binary = 0b1010;
const float = 3.14159;
const scientific = 1.23e-4;

// ===== 14. COMPREHENSIVE OPERATORS =====
// Arithmetic
const sum = 10 + 5;
const product = 10 * 5;
const modulo = 10 % 3;

// Comparison
const isEqual = 5 === 5;
const isGreater = 10 > 5;

// Logical
const and = true && false;
const or = true || false;
const not = !true;

// Bitwise
const bitwiseAnd = 5 & 3;
const bitwiseOr = 5 | 3;
const bitwiseXor = 5 ^ 3;

// Nullish coalescing
const value = null ?? "default";
const optional = user?.email?.toLowerCase();

// ===== 15. ERROR HANDLING =====
try {
  throw new Error("Something went wrong");
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error:", error.message);
  } else {
    console.error("Unknown error");
  }
} finally {
  console.log("Cleanup");
}

// ===== 16. PROPERTY ACCESSORS =====
class Person {
  private _age: number = 0;

  get age(): number {  // 'get' keyword
    return this._age;
  }

  set age(value: number) {  // 'set' keyword
    if (value >= 0) {
      this._age = value;
    }
  }
}

// ===== 17. GENERATORS & ITERATORS =====
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
console.log(fib.next().value);

// ===== 18. SYMBOLS =====
const uniqueKey = Symbol('description');
const obj = {
  [uniqueKey]: 'secret value'
};

// ===== 19. PROXY & REFLECT =====
const handler = {
  get(target: any, prop: string) {
    return prop in target ? target[prop] : 'Default';
  }
};

const proxy = new Proxy({}, handler);

// ===== 20. COMMENTS VARIETY =====
// Single line comment
/* Multi-line comment
   spanning multiple lines */
/**
 * Documentation comment
 * @deprecated
 */
let x = 5;  // Inline comment

/**
 * ==========================================
 * BEFORE & AFTER COMPARISON
 * ==========================================
 *
 * BEFORE (v1.0):
 * - 24 token scopes
 * - No semantic highlighting
 * - 6 colors
 * - Parameters looked like variables
 * - Methods looked like functions
 * - All teal-heavy
 *
 * AFTER (v2.0):
 * - 94+ token scopes
 * - Full semantic highlighting
 * - 12+ distinct colors
 * - Parameters are dusty rose (italic)
 * - Methods are aqua (distinct from functions)
 * - Decorators are yellow
 * - Properties are cyan
 * - Constants are purple
 * - Much richer visual hierarchy!
 *
 * ==========================================
 */

console.log("🎨 Perpetuity Theme v2.0 - Feature Complete!");
