/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Papa from 'papaparse';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const CsvExporter = () => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState(['name', 'age', 'email', 'phone']);
  const [currentStep, setCurrentStep] = useState(0);
  const [newEntry, setNewEntry] = useState({});
  const [exportedData, setExportedData] = useState('');
  const [newField, setNewField] = useState('');

  const labels = fields.map(field => field.charAt(0).toUpperCase() + field.slice(1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddField = () => {
    if (newField && !fields.includes(newField)) {
      setFields([...fields, newField]);
      setNewEntry({ ...newEntry, [newField]: '' });
      setNewField('');
    }
  };


  const handleExport = () => {
    const csv = Papa.unparse({
      fields: fields,
      data: data.map(item => 
        fields.reduce((acc, field) => {
          acc[field] = item[field] || ''; 
          return acc;
        }, {})
      ),
    });
    setExportedData(csv);
  };

  return (
    <Container>
      <h1>CSV Exporter</h1>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column' }} noValidate autoComplete="off">
        {fields.map((field, index) => (
          <TextField
            key={field}
            name={field}
            label={labels[index]}
            variant="outlined"
            value={newEntry[field] || ''}
            onChange={handleChange}
          />
        ))}
       
      </Box>

      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column' }} noValidate autoComplete="off">
        <TextField
          name="newField"
          label="New Field"
          variant="outlined"
          value={newField}
          onChange={(e) => setNewField(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddField}>
          Add New Field
        </Button>
      </Box>

      <Button variant="contained" color="primary" onClick={handleExport}>
        Export CSV
      </Button>
      
      {exportedData && (
        <div>
          <h2>Exported CSV</h2>
          <textarea rows="10" cols="50" value={exportedData} readOnly />
          <a
            href={`data:text/csv;charset=utf-8,${encodeURIComponent(exportedData)}`}
            download="exported_data.csv"
          >
            Download CSV
          </a>
        </div>
      )}
    </Container>
  );
};

export default CsvExporter;
