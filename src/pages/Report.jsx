import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, CommandColumn, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, PdfExport, ExcelExport } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/datasource';
import { Header } from '../components';

import { Tooltip, Button } from "@material-tailwind/react";

const Report = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete', 'PdfExport', 'ExcelExport'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Activity Report" />

      <Tooltip content="Material Tailwind">
      <Button variant="gradient">Show Tooltip</Button>
    </Tooltip>


      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging= {true}
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting={true}
        allowFiltering= {true}
        allowPdfExport= {true}
        allowExcelExport= {true}
      >
        <ColumnsDirective>
        <ColumnDirective field='SNO' headerText='S/No' textAlign='Left' width='50' />
          <ColumnDirective field='ReportID' headerText='Report ID' textAlign='Justify' width='100' />
          <ColumnDirective field='ReportName' headerText='Report Name'  textAlign='Justify' width='100'  />
          <ColumnDirective field='Report' headerText='Report'  textAlign='Justify' width='100'  />
          <ColumnDirective field='ReportDate' headerText='Report Date'  textAlign='justify' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter, PdfExport, ExcelExport, CommandColumn]} />

        
      </GridComponent>
    </div>
  );
};

export default Report;
