import React, { useState } from 'react';
import { Editor } from 'amis-editor';
import { render as renderAmis, type SchemaObject, type Schema } from 'amis';

const defaultSchema: SchemaObject = { type: 'page', body: 'contents...' };

const host = `${window.location.protocol}//${window.location.host}`;
const schemaUrl = `${host}/schema.json`;

function App() {
  const [schema, setSchema] = React.useState<SchemaObject>(defaultSchema);
  const [preview, setPreview] = React.useState(false);

  const handleChange = (value: SchemaObject) => {
    console.log('change---', value);
    setSchema(value);
    // if(typeof value.body !== 'string') {
    //   handleSaveClick()
    // }
  };
  const handleSaveClick = () => {
    console.log('save---', schema);
    // save(pageName || schema?.pageName, schema);
  };

  return (
    <>
      <Editor
        theme="cxd"
        className="is-fixed"
        preview={preview}
        isMobile={false}
        value={schema}
        onChange={handleChange}
        onSave={handleSaveClick}
        $schemaUrl={schemaUrl}
        amisEnv={{
          fetcher: () => {},
          notify: (type, msg) => {},
          enableAMISDebug: false,
        }}
      />
    </>
  );
}

export default App;

