import { hexToCSSFilter } from 'hex-to-css-filter';
// We want to turn WHITE to GOLD
// hexToCSSFilter converts BLACK to the target color. 
// Can we convert WHITE? No, but what's the filter?
console.log(hexToCSSFilter('#d4af37'));
