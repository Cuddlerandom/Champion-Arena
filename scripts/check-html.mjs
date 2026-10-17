import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync('index.html', 'utf8');
assert.match(html, /<!doctype html>/i, 'HTML doctype missing');
assert.match(html, /<meta[^>]+name=["']viewport["']/i, 'Mobile viewport missing');
assert.match(html, /<canvas\b/i, 'Arena canvas missing');
assert.match(html, /id=["']pause["']/, 'Pause control missing');
assert.match(html, /id=["']reset["']/, 'Restart control missing');
for (const value of ['.5','1','2','4','8']) {
  assert.ok(html.includes('data-speed="'+value+'"'), 'Missing speed: '+value);
}
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).filter(s=>s.trim());
assert.ok(scripts.length, 'No inline JavaScript found');
for (const source of scripts) new vm.Script(source, {filename:'index.html inline script'});
console.log('PASS: HTML structure, mobile controls and JavaScript syntax');
