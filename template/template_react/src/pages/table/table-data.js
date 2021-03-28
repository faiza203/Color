import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import makeData from './make-data';



const TableData = () => {
	const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            sortable: true
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            sortable: true
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            sortable: true
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            sortable: true
          },
          {
            Header: 'Status',
            accessor: 'status',
            sortable: true
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            sortable: true
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(2000), [])
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, 
    
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState: { pageIndex: 2 }, }, useSortBy, usePagination)

	 
	return (
		<div>
			<ol className="breadcrumb float-xl-right">
				<li className="breadcrumb-item"><Link to="/table/data">Home</Link></li>
				<li className="breadcrumb-item"><Link to="/table/data">Tables</Link></li>
				<li className="breadcrumb-item active">Data Tables</li>
			</ol>
			<h1 className="page-header">React Table <small>official documentation <a href="https://react-table.tanstack.com/docs/overview" target="_blank" rel="noopener noreferrer">here</a></small></h1>
			<Panel>
				<PanelHeader>
					React Table
				</PanelHeader>
				<div class="table-responsive">
					<table class="table table-bordered" {...getTableProps()}>
						<thead>
							{headerGroups.map(headerGroup => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map(column => (
										<th className="width-150" {...column.getHeaderProps(column.getSortByToggleProps())}>
											<div class="d-flex" style={{minWidth: '150px'}}>
												<span>{column.render('Header')}</span>
												<span class="ml-auto">
													{column.sortable ?
														column.isSorted
															? column.isSortedDesc
																? <i className="fa fa-sort-down fa-fw f-s-14 text-blue"></i>
																: <i className="fa fa-sort-up fa-fw f-s-14 text-blue"></i>
															: <i className="fa fa-sort fa-fw f-s-14 opacity-3"></i>
														: ''}
												</span>
											</div>
										</th>
									))}
								</tr>
							))}
					 </thead>
					 <tbody {...getTableBodyProps()}>
							{page.map(
								(row, i) => {
									prepareRow(row);
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map(cell => {
												return (
													<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
												)
											})}
										</tr>
									)}
							)}
					 </tbody>
				 </table>
			 </div>
			 <hr class="m-0" />
			 <PanelBody>
			 	<div class="d-flex align-items-center justify-content-center">
					<ul className="pagination mb-0">
						<li className="page-item"><button className="page-link" onClick={() => gotoPage(0)} disabled={!canPreviousPage}><i className="fa fa-angle-double-left"></i></button></li>
						<li className="page-item"><button className="page-link" onClick={() => previousPage()} disabled={!canPreviousPage}><i className="fa fa-angle-left"></i></button></li>
						<li className="page-item d-flex align-items-center px-2">
							<div>Page <strong>{pageIndex + 1} of {pageOptions.length}</strong></div>
						</li>
						<li className="page-item"><button className="page-link" onClick={() => nextPage()} disabled={!canNextPage}><i className="fa fa-angle-right"></i></button></li>
						<li className="page-item"><button className="page-link" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><i className="fa fa-angle-double-right"></i></button></li>
					</ul>
					<div class="ml-3 mr-1">Go to page:</div>
					<div class="width-50 mx-2">
						<input className="form-control" type="number" defaultValue={pageIndex + 1}
								onChange={e => {
									const page = e.target.value ? Number(e.target.value) - 1 : 0
									gotoPage(page)
								}}
							/>
					</div>
					<div>
						<select
							className="form-control"
							value={pageSize}
							onChange={e => {
								setPageSize(Number(e.target.value))
							}}
						>
							{[10, 20, 30, 40, 50].map(pageSize => (
								<option key={pageSize} value={pageSize}>
									Show {pageSize}
								</option>
							))}
						</select>
					</div>
				</div>
			 </PanelBody>
			</Panel>
		</div>
	)
}

export default TableData;