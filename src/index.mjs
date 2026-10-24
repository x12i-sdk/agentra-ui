import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { writeFile } from 'node:fs/promises';
async function savePreview(markup) {
  assert(markup.length > 0);
  await writeFile('preview.html', '<!doctype html><html lang="en"><meta charset="utf-8"><title>Package UI fixture</title><body>' + markup + '</body></html>');
  console.log('Generated preview.html (' + markup.length + ' characters).');
}
import { WidgetRenderer } from '@x12i/agentra-ui';
const widget = { id: 'fixture-total', title: 'Example total', type: 'number', query: { scope: 'fixture', counterId: 'fixture', timeframe: { type: 'all' }, format: 'number' } };
const packageMarkup = renderToStaticMarkup(React.createElement(WidgetRenderer, { widget, data: { rows: [{ count: 3 }] } }));
assert.equal(packageMarkup, '', 'Recheck the fallback when upgrading to a rendering implementation');
const fallback = renderToStaticMarkup(React.createElement('p', null, 'Agentra UI 0.1.0 does not render this widget yet.'));
await savePreview(fallback);
// The fallback belongs to this host application; it is not package-provided widget rendering.
